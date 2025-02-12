import React from 'react';
import Hero from '../components/Hero';
import homeHeroImage from '../assets/home/homehero.jpg';
import SplitSection from '../components/SplitSection';
import tempImage from '../assets/1920x1080.svg';
import WhyChooseUs from '../components/WhyChooseUs';

function WarehousingAndLogistics() {
  return (
    <section>
      <Hero 
        title="Warehousing and Logistics"
        subtitle="Empowering Supply Chains with Excellence."
        backgroundImage={homeHeroImage}
      />
      
      <SplitSection
        image={tempImage}
        title="Technology-Driven Solutions"
        description={
          <>
            <p>At Risen Logistics, we believe that innovation drives efficiency. Our advanced web-based warehouse management system (WMS) empowers clients with full control and visibility over their operations. With our WMS, you can:</p>
            
            <ul style={{ 
              marginTop: '1rem',
              marginLeft: '2rem',
              marginBottom: '1rem',
              listStyleType: 'disc'
            }}>
              <li style={{ marginBottom: '0.75rem' }}>Initiate orders seamlessly.</li>
              <li style={{ marginBottom: '0.75rem' }}>Run comprehensive reports.</li>
              <li style={{ marginBottom: '0.75rem' }}>View your inventory in real-time, from anywhere, at any time.</li>
            </ul>

            <p>Each piece in our warehouse is assigned a unique license plate number (LPN), acting as a precise record locator to ensure accuracy and transparency. Know where your inventory is in our warehouse at all times using this LPN and our web based WMS. Our system is designed to support FIFO (First In, First Out) processes, guaranteeing that your inventory moves efficiently and according to your operational requirements.</p>
          </>
        }
        imageFirst={true}
      />

      <SplitSection
        image={tempImage}
        title="Bonded Warehousing"
        description={
          <p>Secure, compliant, and strategically located, our bonded warehouse facilities provide an optimal solution for managing bonded goods. Risen Logistics delivers peace of mind with end-to-end compliance and security as a Department of Homeland Security (TSA,CTPA) approved facility.</p>
        }
        imageFirst={false}
        backgroundcolor="#003b6d"
        textcolor="white"
      />

      <SplitSection
        image={tempImage}
        title="Quick and Nimble Service"
        description={
          <p>In today's fast-paced business environment, responsiveness is everything. Our team is committed to delivering agile solutions tailored to your unique needs. Whether it's same-day pick-and-pack services, last-minute adjustments, or expedited shipping, Risen Logistics is here to keep your operations running smoothly.</p>
        }
        imageFirst={true}
      />

      <SplitSection
        image={tempImage}
        title="Facility Security and Compliance"
        description={
          <p>Your goods are in safe hands with Risen Logistics. Our facility is equipped with 18 high-definition cameras, ensuring 24/7 surveillance and monitoring. Additionally, we are regulated by the Department of Homeland Security, meeting rigorous TSA and US Customs standards as a CTPAT and TSA secure facility. This guarantees that your inventory is stored in a secure, compliant environment.</p>
        }
        imageFirst={false}
        backgroundcolor="#003b6d"
        textcolor="white"
      />

      <WhyChooseUs />
    </section>
  );
}

export default WarehousingAndLogistics;