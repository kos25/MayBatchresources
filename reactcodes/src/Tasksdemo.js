import React from 'react';
import { Checkbox , Modal , Button , Input , Header , Message } from 'semantic-ui-react'
export const TasksDemo = (props) => {
return (
       <div style={{marginLeft : "300px"}}>

          {
              props.currentList.name === "" && (
                  <div>
                      <Message info>
                          <Message.Header>
                          You haven't selsected list yet
                          </Message.Header>
                          <p>plase select the list  from left side pannel</p>
                      </Message>
                  </div>
              )
          }
          


            
            {
                props.currentList.name !== "" && (
                    <div>
                        <br/>
            <br/>
            <h1> Task Under {props.currentList.name} </h1>
         
               {
                   props.tasks.map(function(task){
                       return (
                           <div>

                             <Checkbox label= {task.text}  onClick = {() =>props.updateTaskstatus(task.id)}/><br/>
                             <Button color ="red" onClick = {()=> props.deleleTask(task.id)}>Delete</Button>
                            <br/><br/>

                           </div>
                       )


                   })
               }



               <Modal trigger={<Button color ="green">Add new Task</Button>}>
<Modal.Header>Add a new Task </Modal.Header>
<Modal.Content >
<Modal.Description>
<p>
   Type the name of the task  want to create
</p>
<Input name  = "newTask" fluid placeholder = "EX. Take a molly for walk " onChange={props.Updatetext}  /><br/>
<Button onClick = {()=> props.createnewEntity("text" , props.currentList.id)} fluid color = "green " >Add List</Button>
</Modal.Description>
</Modal.Content>
</Modal>


                    </div>
                )
            }
            
            

       </div>
);



}
