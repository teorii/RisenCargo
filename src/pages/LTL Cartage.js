import React from 'react';
import Hero from '../components/Hero';
import SplitSection from '../components/SplitSection';
import IndustrySection from '../components/IndustrySection';
import ltlhero from '../assets/ltl/ltlhero.jpg';
import costsavings from '../assets/ltl/costsavings.jpg';
import flexibility from '../assets/ltl/flexibility.jpg';
import tailoredsolutions from '../assets/ltl/tailoredsolutions.jpg';
import realtimetracking from '../assets/ltl/realtimetracking.jpg';
import lessthantruckload from '../assets/ltl/lessthantruckload.jpg';

function LTLCartage() {
  return (
    <section>
      <Hero 
        title="LTL Cartage"
        subtitle="Empowering Supply Chains with Excellence."
        backgroundImage={ltlhero}
      />

      <SplitSection
        image={lessthantruckload}
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
              <img src={costsavings} className="grid-image" width="150" height="150" loading="lazy"></img>
              <h1>Cost Savings</h1>
              <p>Share truck space with other shipments and only pay for the portion you use, keeping your shipping costs low.</p>
            </div>
            <div>
              <img src={flexibility} className="grid-image" width="150" height="150" loading="lazy"></img>
              <h1>Flexibility</h1>
              <p>With frequent and reliable departures, you can count on timely deliveries that meet your deadlines.</p>
            </div>
            <div>
              <img src={tailoredsolutions} className="grid-image" width="150" height="150" loading="lazy"></img>
              <h1>Tailored Solutions</h1>
              <p>Our logistics experts work closely with you to create tailored solutions, including optimized routes and load consolidation for maximum efficiency.</p>
            </div>
            <div>
              <img src={realtimetracking} className="grid-image" width="150" height="150" loading="lazy"></img>
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