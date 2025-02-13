# This file handles the interactions with the chatbot and models
import joblib
import numpy as np

def funding_predictor(age, gender, education, income, loan_amount):
    """
    Function to preprocess input and make a prediction using the trained model.

    Parameters:
        gender (str): e.g., "Male" or "Female"
        education (str): e.g., "Bachelor", "Master", etc.
        age (int): Age of the person
        income (float): Monthly income
    
    Returns:
        int: Predicted class (e.g., 0 or 1)
    """

    # Load the model, encoders and scaler
    LR = joblib.load("../aiModel/logistic_regression_model.pkl")
    gender_encoder = joblib.load("../aiModel/gender_encoder.pkl")
    education_encoder = joblib.load("../aiModel/education_encoder.pkl")
    scaler = joblib.load("../aiModel/scaler.pkl")

    # Encode categorical variables
    gender = gender.lower()
    gender = gender_encoder.transform([gender])[0]
    education = education_encoder.transform([education])[0]

    input_data = np.array([[age, gender, education, income, loan_amount]], dtype=np.float32)

    input_data = scaler.transform(input_data)  

    prediction = LR.predict(input_data)

    return "Approved" if prediction[0] == 1 else "Denied"

def handle_user_guidance(req):
    if "signup" in req:
        return "You can sign up [here](https://example.com)"

    if "learning" in req:
        return "You can find learning resources [here](https://example.com)"
    
    if "repayment" in req:
        return "You can make loan repayments [here](https://example.com)"
    
    if any(sub in req for sub in ["settings", "account", "delete", "change settings"]):
        return "You can access user settings [here](https://example.com)"
    
    if "scholarship" in req:
        return "You can find scholarships [here](https://example.com)"
    
    if any(sub in req for sub in ["student is faring"]):
        return "You can see how your sponsored students are faring [here](https://example.com)"

def handle_crowdfund_setup(req):
    pass

def handle_loan_application(req):
    pass