import logo from "./logo.svg";
import "./App.css";
import { Button } from "semantic-ui-react";
import React, { Component } from "react";
import{Tasklists} from "./TaskLists"
import{Tasks} from "./Tasks"
import axios from "axios";
 
class App extends Component   {

  state = {
    list : [],
    currentlist : {id:"",name:""},
    tasks : [] 
  }

  componentDidMount()  {
     const getTaskList = 'http://localhost:5000/tasklists'
     axios.get(getTaskList).then(res=>{
      this.setState({list: res.data.tasklist});
     }).catch(err=>alert(err));

  }


  updatetask =  list => {
      this.setState({currentlist : list })
      const  getTask = 'http://localhost:5000/tasks?task_list='+list.id;
      axios.get(getTask).then(res =>
          {
           
            this.setState({tasks : res.data.task})
          }
        ).catch(err=>alert(err));


  }

  Updatetext  = (e) =>{
    this.setState({[e.target.name]:e.target.value});
  }

  cretatenewValue = (type,list) =>{
    const PostTaskListUrl = 'http://localhost:5000/tasklists';
    const PostTaskUrl = 'http://localhost:5000/tasks' 
    const  getTask = 'http://localhost:5000/tasks?task_list='+list.id;

      if(type === 'list'){
        axios.post(PostTaskListUrl,{name:this.state.newListName}).then(res =>
          {
           axios.get(PostTaskUrl).then(res=>{
             this.setState({list: res.data.tasklist});
            }).catch(err=>alert(err));
          }
     
         ).catch(err =>alert(err));
      }else {

        axios.post(PostTaskUrl,{text:this.state.NewTaskName , list_id : list.id}
          ).then(res => {
            axios.get(getTask).then(res =>
              {
               
                this.setState({tasks : res.data.task})
              }
            ).catch(err=>alert(err));
            
          }).catch(err => alert(err));
         
      }
    
  }


  updateTaskstatus = (id,list) => {
    const putTaskUrl = 'http://127.0.0.1:5000/tasks/' +id ;
    const taskURL = 'http://127.0.0.1:5000/tasks?task_list=' +list.id ; 
    axios.put(putTaskUrl).then(res=>{
      axios.get(taskURL).then(res=>{
        this.setState({tasks : res.data.task})
      }).catch(err=>alert(err))
    }).catch(err=>alert(err))
  };


  
deleleTask = (id,list) => {
  alert('do You really want  to delet the task')
  const deleteTaskUrl = 'http://127.0.0.1:5000/tasks/' +id ;
  const taskURL = 'http://127.0.0.1:5000/tasks?task_list=' +   list.id ; 
  axios.delete(deleteTaskUrl).then(res=>
    {
      alert('task has been deleted sucessfully');
      axios.get(taskURL).then(res=>{
        this.setState({tasks : res.data.task})
      }).catch(err=>alert(err))
    }
  ).catch(err=>alert(err))
}






  render(){
    return (
      <div className="App">
        <Tasklists  list = {this.state.list}
           updatetask = {this.updatetask}
           Updatetext = {this.Updatetext}
           cretatenewValue = {this.cretatenewValue}
           />
        <Tasks
           currentlist = {this.state.currentlist}
           tasks = {this.state.tasks}
           Updatetext = {this.Updatetext}
           cretatenewValue = {this.cretatenewValue}
           updateTaskstatus= {this.updateTaskstatus}
           deleleTask = {this.deleleTask}

        />
      </div>
    );
  }
  
}

export default App;
