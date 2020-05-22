from flask import Flask , request
from flask_sqlalchemy import SQLAlchemy 
from flask_cors import CORS 
from flask import jsonify

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres+psycopg2://postgres:7898994162k@localhost:5432/toDoApp'
CORS(app)
db = SQLAlchemy(app)

class Tasklists(db.Model):
   __tablename__ = "tasklists"
   id = db.Column(db.Integer, primary_key = True)
   name = db.Column(db.String)    
   
#constructor function of  tasklits 
   def __init__(self, name):
    self.name = name
   
 
 
 
#to create tasks tabel in database 
class Tasks(db.Model):
   __tablename__ = "tasks"
   id = db.Column(db.Integer, primary_key = True)
   text = db.Column(db.String)
   Completed = db.Column(db.Boolean)
   list_id = db.Column(db.Integer)
 
   
#constructor function of  tasklits 
   def __init__(self, text ,list_id):
    self.text = text
    self.list_id = list_id
    self.Completed = False




@app.route('/tasklists')  
def get_taskList():  
      task_lists = Tasklists.query.all()
      task_lists_list =[] 
      for task_list in task_lists:
        t={}
        t["id"] = task_list.id
        t["name"] = task_list.name    
        task_lists_list.append(t)
 
      return jsonify(tasklist=task_lists_list) 

@app.route('/tasklists' ,  methods = ['POST']) 
def create_task_lists():
   data = request.get_json()
   name = data["name"]
   ts = Tasklists(name)   
   db.session.add(ts)
   db.session.commit() 
   return jsonify(message = " task list is created") ,201




@app.route('/')
def hello_alean():
    return 'alian is saying hi'


if __name__ == '__main__':
   db.create_all()
   app.run(debug=True)
