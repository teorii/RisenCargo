import React from 'react';
import Hero from '../components/Hero';
import technologyHeroImage from '../assets/technology/technologyhero.jpg';

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