# Define the User model

from app import db, bcrypt
from sqlalchemy.ext.hybrid import hybrid_property
from datetime import datetime

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    fullName = db.Column(db.String(80), unique=True, nullable=False)
    _password = db.Column(db.String(128), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    role = db.Column(db.String(50), nullable=False)  # 'student', 'sponsor', or 'admin'

    # Relationship for student's applications
    applications = db.relationship('Application', backref='student', lazy=True)

    # Relationship for sponsor's contributions
    contributions = db.relationship('Contribution', backref='sponsor', lazy=True)

    @hybrid_property
    def password(self):
        return self._password

    @password.setter
    def password(self, plaintext_password):
        self._password = bcrypt.generate_password_hash(plaintext_password).decode('utf-8')

    def check_password(self, password):
        return bcrypt.check_password_hash(self._password, password)


class Application(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    student_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)  # FK to User (student)
    amount = db.Column(db.Float, nullable=False)
    reason = db.Column(db.String(255), nullable=False)
    date_submitted = db.Column(db.DateTime, default=datetime.utcnow)

    # Relationship for contributions made to this application
    contributions = db.relationship('Contribution', backref='application', lazy=True)


class Contribution(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    sponsor_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)  # FK to User (sponsor)
    application_id = db.Column(db.Integer, db.ForeignKey('application.id'), nullable=False)  # FK to Application
    amount = db.Column(db.Float, nullable=False)
    date_contributed = db.Column(db.DateTime, default=datetime.utcnow)
