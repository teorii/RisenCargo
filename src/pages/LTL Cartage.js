import React from 'react';
import Hero from '../components/Hero';
import homeHeroImage from '../assets/home/homehero.jpg';
import SplitSection from '../components/SplitSection';
import IndustrySection from '../components/IndustrySection';

function LTLCartage() {
  return (
    <section>
      <Hero 
        title="LTL Cartage"
        subtitle="Empowering Supply Chains with Excellence."
        backgroundImage={homeHeroImage}
      />

      <SplitSection
        image="https://placehold.co/1920x1080"
        title="Less Than Truckload (LTL) Cartage Services"
        description="At Risen Logistics, we provide flexible and cost-effective 
        Less Than Truck Load (LTL) cartage services for businesses with smaller 
        shipment needs. Whether you're shipping a single pallet or multiple smaller loads, 
        our LTL solutions are designed to ensure your goods are delivered efficiently, securely, and on time."
        imageFirst={false}
      />

      <div className="blue">
        <div id="blue-content">
          <h1>Why Choose Our LTL Cartage Services?</h1>
          <div class="four-grid">
            <div>
              <img src='https://placehold.co/1920x1080' id="grid-image"></img>
              <h1>Cost Savings</h1>
              <p>Share truck space with other shipments and only pay for the portion you use, keeping your shipping costs low.</p>
            </div>
            <div>
              <img src='https://placehold.co/1920x1080' id="grid-image"></img>
              <h1>Flexibility</h1>
              <p>With frequent and reliable departures, you can count on timely deliveries that meet your deadlines.</p>
            </div>
            <div>
              <img src='https://placehold.co/1920x1080' id="grid-image"></img>
              <h1>Tailored Solutions</h1>
              <p>Our logistics experts work closely with you to create tailored solutions, including optimized routes and load consolidation for maximum efficiency.</p>
            </div>
            <div>
              <img src='https://placehold.co/1920x1080' id="grid-image"></img>
              <h1>Real-Time Tracking</h1>
              <p>Stay informed with our advanced tracking systems, giving you complete visibility over your shipment’s journey from start to finish.</p>
            </div>
          </div>
        </div>
      </div>

      <IndustrySection />
      </section>
  );
}

export default LTLCartage;