import React from 'react'
import { Modal, Button, Form } from "react-bootstrap";
import { useState } from 'react';
 
const UpdateProfile = ({ showModal, hideModal, confirmModal, profile }) => {
  const [updateProfileInfo, setUpdateProfileInfo] = useState({
    email: profile?.email,
    username: profile?.username,
    address: profile?.address,
    contact: profile?.contact,
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUpdateProfileInfo(values => ({ ...values, [name]: value }))
  }
    return (
        <Modal show={showModal} onHide={hideModal}>
        <Modal.Header closeButton>
          <Modal.Title>Update Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                name="email"
                type="email"
                value={updateProfileInfo.email}
                onChange= {handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                name="username"
                type="text"
                value={updateProfileInfo.username}
                onChange= {handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="address">
              <Form.Label>Shipping Address</Form.Label>
              <Form.Control
                name="address"
                type="text"
                value={updateProfileInfo.address}
                onChange= {handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="contact">
              <Form.Label>Contact Number</Form.Label>
              <Form.Control
                name="contact"
                type="tel"
                value={updateProfileInfo.contact}
                onChange= {handleChange}
              />
            </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="default" onClick={hideModal}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => confirmModal(updateProfileInfo) }>
            Confirm Changes
          </Button>
        </Modal.Footer>
      </Modal>
    )
}
 
export default UpdateProfile;