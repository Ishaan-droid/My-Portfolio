import './skills.css';
import { Container } from 'react-bootstrap';

const Skills = () => {
  return (
    <Container fluid className="p-0">
      <h3 className="pt-4 text-center">SKILLS</h3>
      <div className="skills d-flex justify-content-center align-items-center">
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Bootstrap</li>
          <li>React JS</li>
          <li>Node JS</li>
          <li>Express JS</li>
          <li>SQL</li>
          <li>Mongo DB</li>
          <li>Firebase</li>
          <li>Python</li>
          <li>Unix</li>
          <li>Visual Studio Code</li>
          <li>Atom</li>
        </ul>
      </div>
    </Container>
  );
};

export default Skills;
