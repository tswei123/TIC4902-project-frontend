import React from 'react'
import { Modal, Button } from "react-bootstrap";
 
const ItemAddedConfirmation = ({ showModal, hideModal }) => {
    return (
        <Modal show={showModal} onHide={hideModal}>
        <Modal.Header closeButton>
          <Modal.Title>Item Successfully added!</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="primary" onClick={() => hideModal(false)}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    )
}
 
export default ItemAddedConfirmation;