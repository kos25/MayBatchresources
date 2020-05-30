import React from "react";
import {
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
  Modal,
  Button,
  Input,
  Checkbox,
  Message
} from "semantic-ui-react";
export const Tasks = (props) => {
  return (
    <div style={{ marginLeft: "250px" }}>
        <br/>
        <br/>

         {
             props.currentlist.name === "" &&(
             
                     <div>
                        <Message  color = "info">
            <Message.Header >
            You haven't selsected list yet
            </Message.Header>
            <p>plase select the list  from left side pannel</p>
        </Message>
                     </div>
             )
         }





       {
           props.currentlist.name !== "" &&(
               <div>
                        <br />
     <h1>Task Under {props.currentlist.name}</h1>
      <br /> <br />
      {
                props.tasks.map(function(task,index){
                    return(
                        <div>
                              <Checkbox label={task.text}  checked  ={task.Completed}  onClick ={()=>props.updateTaskstatus(task.id , props.currentlist)} />
                                  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; <Button color="red" onClick = {()  => props.deleleTask(task.id , props.currentlist)} >Det</Button> 
                        </div>
                    )

                })
            }
      <Modal trigger={<Button color="green">Add Tasks</Button>}>
        <Modal.Content>
          <Modal.Description>
            <Header>Add Tasks</Header>
            <Input name= "NewTaskName" fluid placeholder="Ex need to work on project ...." onChange={props.Updatetext} />
            <br />
            <Button onClick={()=>props.cretatenewValue('task', props.currentlist)} color="green">Add</Button>
          </Modal.Description>
        </Modal.Content>
      </Modal>
               </div>
           )
       }




      
    </div>
  );
};
