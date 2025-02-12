import React from 'react';
import Hero from '../components/Hero';
import aboutHeroImage from '../assets/1920x1080.svg';

function About() {
  return (
    <section>
      <Hero 
        title="About Us"
        subtitle="Webpage under construction."
        backgroundImage={aboutHeroImage}
      />
    </section>
  );
}

export default About;