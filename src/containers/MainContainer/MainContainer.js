import React from 'react';
import AboutMe from '../../components/AboutMe/AboutMe';
import Header from '../../components/Header/Header';
import Education from '../../components/Education/Education';
import Experience from '../../components/Experience/Experience';
import Projects from '../../components/Projects/Projects';
import Skills from '../../components/Skills/skills';
import ContactMe from '../../components/ContactMe/ContactMe';
import Footer from '../../components/Footer/Footer';

const MainContainer = () => {
  return (
    <React.Fragment>
      <Header />
      <AboutMe />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <ContactMe />
      <Footer />
    </React.Fragment>
  );
};

export default MainContainer;
