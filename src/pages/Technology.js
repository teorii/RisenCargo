import React from 'react';
import Hero from '../components/Hero';
import SplitSection from '../components/SplitSection';
// Image imports
import technologyHeroImage from '../assets/technology/technologyhero.jpg';
import SplitSection from '../components/SplitSection';
import technologydrives from '../assets/technology/technologydrives.jpg'
import realtime from '../assets/technology/realtime.jpg'
import wms from '../assets/technology/wms.jpg'  
import future from '../assets/technology/future.jpg'

function Technology() {
  return (
    <section>
      <Hero 
        title="Technology"
        subtitle="Ready to optimize your logistics with smart technology?"
        backgroundImage={technologyHeroImage}
      />

      <SplitSection
        image={technologydrives}
        title="Technology That Drives Logistics Forward"
        description="At Risen Logistics, we leverage cutting-edge technology to optimize every aspect of the supply chain, ensuring efficiency, transparency, and cost savings for our customers. From real-time tracking to AI-driven analytics, our tech solutions keep freight moving smarter and faster."
        imageFirst={false}
      />

      <SplitSection
        image={realtime}
        title="Real-Time Tracking"
        description="Our advanced tracking system provides real-time visibility into your shipment's location and status, ensuring timely delivery and improved customer satisfaction."
        imageFirst={true}
        backgroundcolor="#003b6d"
        textcolor="white"
      />

      <SplitSection
        image={wms}
        title="WMS/TMS - Integration"
        description="We integrate seamlessly with your existing systems via API & EDI connections, ensuring smooth data flow between your business and our logistics platform. Plus, our dedicated tech support team is available around the clock to assist with any system inquiries."
        imageFirst={false}
      />

      <SplitSection
        image={future}
        title="Experience the Future of Logistics Today"
        description="At Risen Logistics technology isn't just an add-on it’s the backbone of our operations. We’re committed to driving innovation and efficiency across every shipment, ensuring your cargo arrives safely, on time, and at the best possible cost."
        imageFirst={true}
        backgroundcolor="#003b6d"
        textcolor="white"
      />

    </section>
  );
}

export default Technology;