import React from 'react'
import { Modal, Button } from "react-bootstrap";
 
const ShipmentCompletion = ({ showModal, hideModal, confirmModal, orderNumber }) => {
    return (
        <Modal show={showModal} onHide={hideModal}>
        <Modal.Header closeButton>
          <Modal.Title>Change shipment for {orderNumber} to completed?</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="primary" onClick={confirmModal}>
            Confirm
          </Button>
          <Button variant="default" onClick={hideModal}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    )
}
 
export default ShipmentCompletion;