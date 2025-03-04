import React from 'react';
import Hero from '../components/Hero';
import ftlhero from '../assets/ftl/ftlhero.jpg';
import SplitSection from '../components/SplitSection';
import IndustrySection from '../components/IndustrySection';
import exclusiveuse from '../assets/ftl/exclusiveuse.jpg';
import fastertransit from '../assets/ftl/fastertransit.jpg';
import tailoredsolutions from '../assets/ftl/tailoredsolutions.jpg';
import realtimetracking from '../assets/ftl/realtimetracking.png';
import ftlcartage from '../assets/ftl/ftlcartage.jpg';

function FTLCartage() {
  return (
    <section>
      <Hero 
        title="FTL Cartage"
        subtitle="Empowering Supply Chains with Excellence."
        backgroundImage={ftlhero}
      />

      <SplitSection
        image={ftlcartage}
        title="Full Truck Load (FTL) Cartage Services"
        description="At Risen Logistics, we specialize in 
        efficient and reliable Full Truck Load (FTL) cartage services 
        designed to move your large shipments seamlessly. Our dedicated 
        fleet and expert team ensure your cargo arrives on time and in perfect condition."
        imageFirst={false}
      />

      <div className="blue">
        <div id="blue-content">
          <h1>Why Choose Our FTL Cartage Services?</h1>
          <div class="four-grid">
            <div>
              <img src={exclusiveuse} className="grid-image" width="150" height="150" loading="lazy"></img>
              <h1>Exclusive Use</h1>
              <p>Your shipment is the sole cargo on our truck, guaranteeing direct transit with no intermediate stops, reducing handling and risk of damage.</p>
            </div>
            <div>
              <img src={fastertransit} className="grid-image" width="150" height="150" loading="lazy"></img>
              <h1>Faster Transit Times</h1>
              <p>With a direct route and no delays from additional pickups or deliveries, we offer some of the fastest transit times in the industry.</p>
            </div>
            <div>
              <img src={tailoredsolutions} className="grid-image" width="150" height="150" loading="lazy"></img>
              <h1>Tailored Solutions</h1>
              <p>We understand that each shipment is unique. Our logistics experts work closely with you to tailor FTL solutions that match your specific requirements, including specialized equipment and route optimization.</p>
            </div>
            <div>
              <img src={realtimetracking} className="grid-image" width="150" height="150" loading="lazy"></img>
              <h1>Real-Time Tracking</h1>
              <p>Stay informed with our 24/7/365 team and our tracking systems, giving you complete visibility over your shipment’s journey from start to finish.</p>
            </div>
          </div>
        </div>
      </div>

      <IndustrySection />
      </section>
  );
}

export default FTLCartage;