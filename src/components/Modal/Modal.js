import React from 'react';
import Modal from 'react-bootstrap/Modal';

const Modall = props => {
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Message Sent</Modal.Title>
      </Modal.Header>
      <Modal.Body>Thank you for contacting me. I will respond shortly.</Modal.Body>
      <Modal.Footer>
        <button onClick={props.handleClose}>Close</button>
      </Modal.Footer>
    </Modal>
  );
};

export default Modall;
