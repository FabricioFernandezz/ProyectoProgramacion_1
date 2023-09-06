from flask import Blueprint, request, jsonify
from database import *
from models.User import User

auth = Blueprint('auth', __name__, url_prefix='/auth')

@auth.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    emailDb = User.query.filter_by(email=email).first()
    if emailDb and emailDb.password == password:
        response = {'Mensaje' : 'inicio sesion exitoso'}
        return jsonify(response), 200
    else:
        response = {'Mensaje' : 'email o password incorrecto'}
        return jsonify(response), 400
    
    
@auth.route('/register', methods=['POST'])
def register():
    data = request.get_json()

    email = data.get('email')
    password = data.get('password')

    
    user = User(email=email, password=password)
    db.session.add(user)
    db.session.commit()

    return jsonify({'message': 'Usuario registrado exitosamente'}), 201
    