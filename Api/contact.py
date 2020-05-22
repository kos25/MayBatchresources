from flask import Flask , request
from flask_sqlalchemy import SQLAlchemy 
from flask_cors import CORS 
from flask import jsonify

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres+psycopg2://postgres:7898994162k@localhost:5432/Sample'
CORS(app)
db = SQLAlchemy(app)




class ContactInfo(db.Model):
    __tablename__ = 'ContactInfo'
    id = db.Column(db.Integer,primary_key=True)
    FirstName = db.Column(db.String)
    LastName = db.Column(db.String)
    DOB = db.Column(db.String)
    Email = db.Column(db.String)
    Gender = db.Column(db.String)
    PhoneNumber = db.Column(db.String)



    def __init__(self,FirstName,LastName,DOB ,Email,Gender,PhoneNumber):
      self.FirstName = FirstName 
      self.LastName = LastName
      self.DOB = DOB
      self.Email = Email
      self.Gender = Gender
      self.PhoneNumber = PhoneNumber




@app.route('/contact', methods=['POST'])
def post_contactinfo():
  data = request.get_json()
  FirstName = data["FirstName"]
  LastName = data["LastName"]
  DOB = data["DOB"]
  Email = data["Email"]
  Gender = data["Gender"]
  PhoneNumber = data["PhoneNumber"]
  cs =  ContactInfo(FirstName,LastName,DOB ,Email,Gender,PhoneNumber)
  db.session.add(cs)
  db.session.commit()
  return jsonify(msg="Data is created") , 201


@app.route('/contact')
def get_ConatctInfo():
 contact_info = ContactInfo.query.all()
 conList = [] 
 for con in contact_info:
    c={} 
    c["FirstName"]   = con.FirstName
    c["LastName"]  = con.LastName
    c["DOB"] = con.DOB
    c["Email"] = con.Email
    c["Gender"] = con.Gender
    c["PhoneNumber"] = con.PhoneNumber   
    conList.append(c)
 return jsonify(list=conList)









@app.route('/test')
def hello_world():
 return 'Hello World'

  

@app.route('/alean')
def hello_alean():
    return 'alian is saying hi'


if __name__ == '__main__':
   db.create_all()
   app.run(debug=True)