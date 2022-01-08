import './experience.css';
import { Col, Container, Row } from 'react-bootstrap';
import experienceDetails from './experienceDetails';

const Experience = () => {
  return (
    <section>
      <Container fluid className="p-0" id="experience">
        <div className="experience">
          <h3 className="mt-5">EXPERIENCE</h3>
          <div className="companies">
            <Row className="g-0">
              {experienceDetails.map(cur => (
                <Col lg={6} md={6} sm={12} className="d-flex justify-content-center" key={cur.id}>
                  <div className="flip-card">
                    <div className="flip-card-inner">
                      <div className="flip-card-front">
                        <img src={cur.image} alt={cur.alt} />
                        <h6 className="mt-4 ps-4">
                          {<cur.position_icon />} {cur.position}
                        </h6>
                        <hr />
                        <h6 className=" mb-5 ps-4">
                          {' '}
                          {<cur.tech_icon />} {cur.technologies}
                        </h6>
                      </div>
                      <div className="flip-card-back p-5">
                        <ul>
                          {cur.work.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Experience;
