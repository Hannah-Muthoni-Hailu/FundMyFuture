# This file will handle the API endpoints

from flask import Blueprint, request, jsonify
from app import db
from app.models import User, Application, Contribution
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