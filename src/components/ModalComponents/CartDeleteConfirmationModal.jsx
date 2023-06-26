import React from 'react'
import { Modal, Button } from "react-bootstrap";
 
const CartDeleteConfirmation = ({ showModal, hideModal, confirmModal }) => {
    return (
        <Modal show={showModal} onHide={hideModal}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body><div className="alert alert-danger">Are you sure you want to remove item from cart?</div></Modal.Body>
        <Modal.Footer>
          <Button variant="default" onClick={hideModal}>
            Cancel
          </Button>
          <Button variant="danger" onClick={() => confirmModal() }>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    )
}
 
export default CartDeleteConfirmation;