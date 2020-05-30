import React from "react";
import { Header, Icon, Image, Menu, Segment, Sidebar , Modal , Input ,  Button} from 'semantic-ui-react'

export const  TasklistsDemo = (props) => {
return (  
    <div>
    <Sidebar as={Menu}  inverted vertical visible = {true}>
      <Menu.Item as='a'>
          <h2>2 DO App  </h2>
      </Menu.Item>
      <Menu.Item as='a'>
          <h3> TaskList  </h3>
      </Menu.Item>
        {
                props.lists.map(function(list,index){
                    return (
                        <Menu.Item  onClick = {() =>props.Updatetask(list)} 
                           active  = {props.currentList.name === list.name }
                        >      
                            {list.name}
                        </Menu.Item>
                    )

                })
            }
        <br/>

    <Modal trigger={<Button fluid color="green">Add TaskLis</Button>}>
           <Modal.Header>Select a Photo</Modal.Header>
             <Modal.Content >
            <Modal.Description>
            <Header>Add TaskList here</Header>
            <Input name = "NewTaskList" fluid placeholder='Add TaskList here ...' onChange = {props.Updatetext}/><br/>

            <Button onClick= {()=> props.createnewEntity("list")} color="green">Click to add</Button>


           </Modal.Description>
          </Modal.Content>
</Modal>





      </Sidebar>
    
    </div>
);
}   