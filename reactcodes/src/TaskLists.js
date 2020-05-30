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
} from "semantic-ui-react";
export const Tasklists = (props) => {
  return (
    <div>
      <Sidebar
        as={Menu}
        animation="overlay"
        icon="labeled"
        inverted
        vertical
        visible={true}
        width="thin"
      >
        <Menu.Item as="a">
          <h2>2DOApp</h2>
        </Menu.Item>

        <Menu.Item as="a">
          <h2>TaskLists</h2>
        </Menu.Item>

        {
                props.list.map(function(list,index){
                    return(
                        <div>
                             <Menu.Item as="a" onClick={() => props.updatetask(list)}>{list.name}</Menu.Item>
                        </div>
                    )

                })
            }

    



        <br />

        <Modal trigger={<Button color="green">Add TaskList</Button>}>
          <Modal.Header>Select a Photo</Modal.Header>
          <Modal.Content image>
            <Modal.Description>
              <Header>Add Task List</Header>
              <Input name="newListName" fluid placeholder="Ex work , home , gym ......"  onChange={props.Updatetext}/>
              <br />
              <Button color="green" onClick={() => props.cretatenewValue('list')}>Add</Button>
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </Sidebar>
    </div>
  );
};
