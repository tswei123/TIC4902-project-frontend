import React from 'react'
import { Modal, Button } from "react-bootstrap";
 
const CheckOutCompletion = ({ showModal, hideModal }) => {
    return (
        <Modal show={showModal} onHide={hideModal}>
        <Modal.Header closeButton>
          <Modal.Title>Thank you for your purchase!</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="primary" onClick={() => hideModal(false)}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    )
}
 
export default CheckOutCompletion;