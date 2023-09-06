from flask_sqlalchemy import SQLAlchemy
db = SQLAlchemy()

USER_DB = 'postgres'
PASS_DB = 'fabricio'
URL_DB = 'localhost'
NAME_DB = 'prueba'
FULL_URL_DB = f'postgresql://{USER_DB}:{PASS_DB}@{URL_DB}/{NAME_DB}'
