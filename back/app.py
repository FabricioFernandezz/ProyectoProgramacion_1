from flask import Flask, jsonify , request
from flask_cors import CORS
from flask_migrate import Migrate
from database import *
from resources.auth.routes import auth
from flask_restful import Api
from resources.Product import Product_list



app = Flask(__name__) 
api = Api(app)
CORS(app)  

app.config['SQLALCHEMY_DATABASE_URI'] = FULL_URL_DB
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

#inicializar db
db.init_app(app)


# configurar flask migrate 
migrate= Migrate()
migrate.init_app(app, db)

app.register_blueprint(auth) # Blueprint

api.add_resource(Product_list, '/product') #Resource




if __name__ == '__main__':
    app.run(debug=True)