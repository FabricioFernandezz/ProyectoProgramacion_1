from app import db

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(250))
    email = db.Column(db.String(250))
    password = db.Column(db.String(250))

    def __str__ (self):
        return(
            f'id: {self.id}, '
            f'name: {self.name}, '
            f'emal: {self.emal}, '
            f'password: {self.password}, '
        )
        
