import React from 'react';
import './AboutMe.css';
import profilePhoto from '../../images/profilePhoto.JPG';
import { Container, Row, Col } from 'react-bootstrap';
import aboutMePara from './intro';
import { AiOutlineMail, AiOutlineMobile } from 'react-icons/ai';

const AboutMe = () => {
  return (
    <section>
      <Container id="aboutMe" fluid className="p-0">
        <div className="about-me-div">
          <Row className="g-0">
            <Col lg={6} md={6} sm={12}>
              <div className="profile-photo d-flex flex-column justify-content-evenly align-items-center">
                <h4>About Me</h4>
                <img src={profilePhoto} alt="Ishaan_profile_pic}" />
              </div>
            </Col>
            <Col lg={6} md={6} sm={12} className=" d-flex flex-column justify-content-evenly">
              <div className="intro-details">
                <div className="mb-3">
                  <h4 className="mb-4 about">About Me</h4>
                  <p>{aboutMePara}</p>
                </div>
                <div className="mt-5 mb-3">
                  <h4 className="contact-me">Contact Details</h4>
                  <a className="me-4" href="tel:+1902-318-3034">
                    <AiOutlineMobile className="contact-icons me-1" /> +1-902-318-3034
                  </a>
                  <a href="mailto:Ishaant99@gmail.com">
                    <AiOutlineMail className="contact-icons me-1" /> Ishaant99@gmail.com
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default AboutMe;
