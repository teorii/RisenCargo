import React from 'react';
import Hero from '../components/Hero';
import technologyHeroImage from '../assets/1920x1080.svg';

function Technology() {
  return (
    <section>

      <Hero 
        title="Technology"
        subtitle="Webpage under construction."
        backgroundImage={technologyHeroImage}
      />


    </section>
  );
}

export default Technology;