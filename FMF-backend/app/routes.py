# This file will handle the API endpoints

from flask import Blueprint, request, jsonify
from app import db
from app.models import User, Application, Contribution
from app.webhook import funding_predictor, handle_user_guidance, handle_crowdfund_setup, handle_loan_application
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity

main_bp = Blueprint('auth', __name__)

@main_bp.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    fullName = data.get('fullName')
    email = data.get('email')
    password = data.get('password')
    role = data.get('role')  # 'student' or 'sponsor'
    
    if User.query.filter_by(fullName=fullName).first():
        return jsonify({"error": "FullName already exists"}), 400
    
    if User.query.filter_by(email=email).first():
        return jsonify({"error": "Email already registered"}), 400
    
    user = User(fullName=fullName, email=email, role=role)
    user.password = password # will trigger the hybrid_property setter
    
    db.session.add(user)
    db.session.commit()
    
    return jsonify({"message": "User registered successfully"}), 201

@main_bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')
    
    user = User.query.filter_by(email=email).first()
    
    if user and user.check_password(password):
        # Include user ID in the JWT payload
        access_token = create_access_token(identity={"id": user.id, "email": user.email, "role": user.role})
        return jsonify({"access_token": access_token}), 200
    else:
        return jsonify({"error": "Invalid credentials"}), 401


# Student submits an application
@main_bp.route('/student/application', methods=['POST'])
@jwt_required()
def create_application():
    current_user = get_jwt_identity()
    student_id = current_user['id'] 

    # Get application data
    data = request.get_json()
    # firstName = data.get('firstName')
    # lastName = data.get('lastName')
    # email = data.get('email')
    # phone = data.get('phone')
    # school = data.get('school')
    # program = data.get('program')
    # startDate = data.get('startDate')
    amount = data.get('amount')
    reason = data.get('reason')

    # Create a new application for the student
    application = Application(student_id=student_id, amount=amount, reason=reason)

    db.session.add(application)
    db.session.commit()

    return jsonify({"message": "Application submitted successfully"}), 201


# Sponsor views applications to contribute
@main_bp.route('/sponsor/applications', methods=['GET'])
@jwt_required()
def get_applications():
    applications = Application.query.all()
    result = [
        {
            "id": app.id,
            "student_name": app.student.fullName,
            # "email": app.student.email,
            # "phone": app.phone,
            # "school": app.school,
            # "program": app.program,
            # "startDate": app.startDate,
            "amount": app.amount,
            "reason": app.reason,
            "date_submitted": app.date_submitted
        }
        for app in applications
    ]
    return jsonify(result), 200

# Sponsor makes a contribution
@main_bp.route('/sponsor/contribute/<int:application_id>', methods=['POST'])
@jwt_required()
def contribute(application_id):
    data = request.get_json()
    sponsor_id = get_jwt_identity()['id']
    amount = data['amount']
    
    contribution = Contribution(sponsor_id=sponsor_id, application_id=application_id, amount=amount)
    db.session.add(contribution)
    db.session.commit()
    
    return jsonify({"message": "Contribution successful"}), 201

@main_bp.route('/dialogflow-webhook', methods=['POST'])
def dialogflow_webhook():
    req = request.get_json()
    
    # Extract intent name
    intent_name = req.get("queryResult", {}).get("intent", {}).get("displayName")

    # Obtain current user info
    current_user = get_jwt_identity()
    age = current_user['age']
    gender = current_user['gender']
    education = current_user['education']
    income = current_user['income']
    funding_gap = current_user['funding_gap']

    if intent_name == "recommend_finance":
        recommendation = funding_predictor(age, gender, education, income, funding_gap) # Loan amount is defaulted to the lowest offered on the platform

        # If the model determines the student is not fit for a loan applications
        if recommendation == "Denied":
            # Search the database for scholarships that match the student's needs and save them in scholarships array
            # Use features like education level, area of study and funding gap for search
            scholarships = "Scholarships" # To be queried when a suitable model is created

            if scholarships == None:
                # Enable the student to start a crowdfunding process
                response_text = "The best option for you is to crowdfund. Would you like the bot to help you with that or do you want to do it yourself?"
                outputContexts = [
                    {
                        "name": "projects/YOUR_PROJECT_ID/agent/sessions/SESSION_ID/contexts/campaign-setup", # Put the correct details here on setup
                        "lifespanCount": 5
                    }
                ]
            else:
                response_text = "The best option for you is to apply for a scholarship. Here are some scholarships on our platform that match your needs." # To be converted to rich response
                outputContexts = [
                    {
                        "name": "projects/YOUR_PROJECT_ID/agent/sessions/SESSION_ID/contexts/next-help", # Put the correct details here on setup
                        "lifespanCount": 5
                    }
                ]
        else:
            # Allow the student to apply for a loan
            response_text = "The best option for you would be a loan application. Would you like guidance on how to do this?"
            outputContexts = [
                {
                    "name": "projects/YOUR_PROJECT_ID/agent/sessions/SESSION_ID/contexts/loan-assistance", # Put the correct details here on setup
                    "lifespanCount": 5
                }
            ]

        return jsonify({"fulfillmentText": response_text, "outputContexts" : outputContexts})

    if intent_name == "User Provides Campaign Details":
        return handle_crowdfund_setup(req)

    if intent_name == "Loan Set up":
        return handle_loan_application(req)

    if intent_name == "user_guidance":
        response_text = handle_user_guidance(req.get("queryResult", {}).get("queryText", "").lower())
        return jsonify({"fulfillmentText": response_text})

    if intent_name == "Student-mentor":
        # Search db for a mentor
        response_text = "Here is a list of mentors who match your needs"
        return jsonify({"fulfillmentText": response_text})

    if intent_name == "Mentor-student":
        # Search db for a mentor
        response_text = "Here is a list of students who match you"
        return jsonify({"fulfillmentText": response_text})