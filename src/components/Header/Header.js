import React from 'react';
import './header.css';
import header from '../../images/header.jpg';
import { Container, Navbar, Nav } from 'react-bootstrap';
import TypeWriterEffect from 'react-typewriter-effect';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { AiFillDownCircle } from 'react-icons/ai';

const Header = () => {
  const gotoSocialSite = link => window.location.assign(link);

  const goToAboutMe = () => {
    const aboutMeCoords = document.querySelector('#aboutMe').getBoundingClientRect();
    const { top } = aboutMeCoords;
    window.scrollTo({
      top: window.scrollY + top,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <section>
      <Container fluid id="header" className="p-0">
        <Navbar collapseOnSelect expand="md" variant="dark">
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="m-auto">
                <Nav.Link href="#header">Home</Nav.Link>
                <Nav.Link href="#aboutMe">About Me</Nav.Link>
                <Nav.Link href="#education">Education</Nav.Link>
                <Nav.Link href="#experience">Experience</Nav.Link>
                <Nav.Link href="#projects">Projects</Nav.Link>
                <Nav.Link href="#contactMe">Contact Me</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <img className="header_image" src={header} alt="header_ishaan" />
        <div className="header-heading d-flex justify-content-center align-items-center">
          <div className="header-content d-flex flex-column align-items-center">
            <TypeWriterEffect
              startDelay={100}
              text="I'm Ishaan Thakur."
              typeSpeed={100}
              cursorColor="white"
              hideCursorAfterText={true}
            />
            <h4 className="pt-3 pb-3">Software Engineer based in Canada. Javascript enthusiast.</h4>
            <div className="header_icons d-flex justify-content-around">
              <BsLinkedin
                onClick={() => gotoSocialSite('https://in.linkedin.com/in/ishaan-thakur-766513111')}
                className="header_cursor"
              />
              <BsGithub
                onClick={() => gotoSocialSite('https://github.com/Ishaan-droid')}
                className="header_cursor"
              />
            </div>
          </div>
          <div className="header_down">
            <AiFillDownCircle onClick={goToAboutMe} className="bounce" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Header;
