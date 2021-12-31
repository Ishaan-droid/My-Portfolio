import './Footer.css';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <Container fluid className="p-0">
      <div className="footer d-flex flex-column justify-content-center align-items-center">
        <div className="pb-3">
          <a className="pe-3" href="https://in.linkedin.com/in/ishaan-thakur-766513111">
            <BsLinkedin />
          </a>
          <a href="https://github.com/Ishaan-droid">
            <BsGithub />
          </a>
        </div>
        <h6>Made By Ishaan Thakur</h6>
      </div>
    </Container>
  );
};

export default Footer;
