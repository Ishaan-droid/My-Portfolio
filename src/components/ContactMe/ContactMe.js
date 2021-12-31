import React, { useState } from 'react';
import axios from 'axios';
import './ContactMe.css';
import { Container } from 'react-bootstrap';
import Modall from '../Modal/Modal';

const ContactMe = () => {
  const [formDetails, setFormDetails] = useState({
    email: '',
    message: '',
  });

  const [showModal, setShowModal] = useState(false);

  const handleModal = () => setShowModal(false);

  const { email, message } = formDetails;
  let disabledButton = email === '' || message === '' || !email.includes('@');

  const handleEmailChange = e => {
    setFormDetails(prevValue => {
      return {
        ...prevValue,
        email: e.target.value,
      };
    });
  };

  const handleMessageChange = e => {
    setFormDetails(prevValue => {
      return {
        ...prevValue,
        message: e.target.value,
      };
    });
  };

  const submitForm = async e => {
    e.preventDefault();
    await axios.post(
      'https://ishaan-thakur-default-rtdb.firebaseio.com/messages.json',
      formDetails
    );

    setFormDetails(prevValue => {
      return {
        ...prevValue,
        email: '',
        message: '',
      };
    });
    setShowModal(true);
  };

  return (
    <Container fluid className="p-0" className="contact-me" id="contactMe">
      <h3 className="text-center pt-4">GET IN TOUCH</h3>
      <div className="d-flex justify-content-center align-items-center">
        <form>
          <input
            onChange={handleEmailChange}
            type="email"
            placeholder="Your email"
            name="email"
            value={formDetails.email}
          />
          <textarea
            onChange={handleMessageChange}
            name="message"
            placeholder="Your message"
            value={formDetails.message}
          />
          <button disabled={disabledButton} onClick={submitForm}>
            SEND
          </button>
        </form>
      </div>
      {showModal && <Modall show={showModal} handleClose={handleModal} />}
    </Container>
  );
};

export default ContactMe;
