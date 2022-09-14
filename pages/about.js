import { Hero, Contact } from '../components';

const About = () => {
  return (
    <div>
      <Hero heading='Contact' message='Submit the form below for work and quotes.' />
      <Contact />
    </div>
  );
};

export default About;