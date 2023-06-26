import React from 'react'
import { Modal, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Login from "../AuthComponents/Login";

const LoginRequired = ({ showModal, hideModal, modalMsg }) => {
  return (
    <Modal show={showModal} onHide={hideModal}>
      <Modal.Header closeButton>
        <Modal.Title>Login Required</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='container'>
          <div className='row'>
            <div className='col text-center'>
              We are sorry. You are required to login to proceed.
              <hr/>
              <Link to="/login">
                <Button className='m-1'> Login </Button>
              </Link>
              <br/>
              <Link to="/sign_up">
                <Button className='m-1'> Sign Up </Button>
              </Link>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default LoginRequired;