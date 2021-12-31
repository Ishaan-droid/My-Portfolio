import { Col, Container, Row } from 'react-bootstrap';
import './projects.css';
import greenKiwiDiets from '../../images/greenKiwiDiets.png';
import clientTracker from '../../images/clientTracker.png';
import mernCart from '../../images/mernCart.png';

const Projects = () => {
  return (
    <section id="projects">
      <Container fluid className="p-0">
        <div className="projects">
          <h3 className="pt-4">SOME OF MY WORK</h3>
          <Row className="projects-row pb-5 g-0">
            <Col className="d-flex justify-content-center" lg={4} md={4} sm={12}>
              <a href="https://greenkiwidiets.com/" target="_blank" rel="noopener noreferrer">
                <img src={greenKiwiDiets} alt="Ishaan_GreenKiwiDiets" />
              </a>
            </Col>
            <Col className="d-flex justify-content-center" lg={4} md={4} sm={12}>
              <a
                href="https://client-tracker-628ad.web.app/login"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={clientTracker} alt="Ishaan Client-Tracker" />
              </a>
            </Col>
            <Col className="d-flex justify-content-center" lg={4} md={4} sm={12}>
              <a
                href="https://lit-wave-64353.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={mernCart} alt="Ishaan MERN-Cart" />
              </a>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Projects;
