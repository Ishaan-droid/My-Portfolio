import educationDetails from './educationDetails';
import { Col, Container, Row, OverlayTrigger, Popover } from 'react-bootstrap';
import './Education.css';

const Education = () => {
  const popover = (data1, data2, data3, data4) => (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Brief</Popover.Header>
      <Popover.Body>
        <ul>
          <li>{data1}</li>
          <li>{data2}</li>
          {data3 && <li>{data3}</li>}
          {data4 && <li>{data4}</li>}
        </ul>
      </Popover.Body>
    </Popover>
  );

  return (
    <section>
      <Container fluid className="p-0" id="education">
        <div className="education">
          <Row className="d-flex justify-content-between g-0">
            <Col lg={4} md={4} sm={12} className="education-heading">
              <h3>EDUCATION</h3>
            </Col>
            <Col lg={6} md={8} sm={12}>
              {educationDetails.map(cur => (
                <Row key={cur.id} className="g-0">
                  <div className="amity-university">
                    <h4>{cur.university}</h4>
                    <h6>
                      <em>{cur.course}</em>
                    </h6>
                    <ul>
                      <li>
                        <h6>{cur.duration}</h6>
                      </li>
                      {/* <li>
                        <h6>{cur.id === 0 ? cur.CGPA : 'In Progress'}</h6>
                      </li> */}
                    </ul>
                    <OverlayTrigger
                      trigger={['hover', 'focus']}
                      placement="top"
                      overlay={popover(cur.data1, cur.data2, cur.data3, cur.data4)}
                    >
                      <button className={cur.id === 1 ? 'mb-5' : ''}>Hover to know more</button>
                    </OverlayTrigger>
                  </div>
                </Row>
              ))}
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Education;
