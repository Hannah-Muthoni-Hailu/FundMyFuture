# Define the User model

from app import db, bcrypt
from sqlalchemy.ext.hybrid import hybrid_property

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    fullName = db.Column(db.String(80), unique=True, nullable=False)
    _password = db.Column(db.String(128), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    role = db.Column(db.String(50), nullable=False)  # 'student', 'sponsor', or 'admin'
    
    @hybrid_property
    def password(self):
        return self._password
    
    @password.setter
    def password(self, plaintext_password):
        self._password = bcrypt.generate_password_hash(plaintext_password).decode('utf-8')
    
    def check_password(self, password):
        return bcrypt.check_password_hash(self._password, password)
