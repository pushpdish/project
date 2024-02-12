import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const AccountPage = ({ userDetails, onUpdateUserDetails }) => {
  const [user, setUser] = useState(userDetails);
  const [modal, setModal] = useState(false); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateUserDetails(user); 
    toggleModal(); 
  };

  
  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input type="text" name="name" id="name" placeholder="Enter your name" value={user.name} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" name="email" id="email" placeholder="Enter your email" value={user.email} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label for="Phone">Phone</Label>
          <Input type="Number" name="Phone" id="Phone" placeholder="Enter your Phone Number" value={user.Ph} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label for="address">Address</Label>
          <Input type="text" name="address" id="address" placeholder="Enter your address" value={user.address} onChange={handleChange} />
        </FormGroup>
        <Button type="submit" style={{ backgroundColor: '#351921', color: 'white', borderColor: '#351921' }}>Submit</Button>

      </Form>

      
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Order Completed</ModalHeader>
        <ModalBody>
          Your details have been successfully updated!
          <br />
          <strong>Name:</strong> {user.name}
          <br />
          <strong>Email:</strong> {user.email}
          <br />
          <strong>Phone:</strong> {user.Phone}
          <br />
          <strong>Address:</strong> {user.address}
        </ModalBody>
        <ModalFooter>
        <Button style={{ backgroundColor: '#351921', borderColor: '#351921', color: 'white' }} onClick={toggleModal}>Close</Button>

          
        </ModalFooter>
      </Modal>
    </>
  );
};

export default AccountPage;
