import React from 'react';
import Hero from '../components/Hero';
import aboutHeroImage from '../assets/1920x1080.svg';
import SplitSection from '../components/SplitSection';
import tempImage from '../assets/1920x1080.svg';

function About() {
  return (
    <section>
      <Hero 
        title="About Us"
        subtitle="Over a Century of Expertise. A Future of Innovation."
        backgroundImage={aboutHeroImage}
      />

      <SplitSection
        image="https://placehold.co/1920x1080"
        title="Our Story"
        description="Built on a foundation of reliability, efficiency, and customer-first service, Risen Logistics was founded by industry veterans with over a century of hands-on experience in trucking, Warehousing, In Bonds, Transborder and supply chain management. Our leadership team has worked across every facet of transportation from transborder logistics to warehousing and everything between. This deep-rooted expertise allows us to anticipate challenges, adapt to industry changes, and provide innovative logistics solutions that keep businesses moving forward."
        imageFirst={false}
      />

      <SplitSection
        image="https://placehold.co/1920x1080"
        title="Our Mission"
        description="At Risen Logistics, we are committed to delivering smarter, faster, and more efficient transportation solutions tailored to the unique needs of our customers. By combining cutting-edge technology with our extensive industry knowledge, we provide seamless freight management that drives reliability, cost savings, and operational efficiency."
        imageFirst={true}
        backgroundcolor="#0e3760"
        textcolor="white"
      />

      <div className="blue" style={{backgroundColor: '#ecedf2', color: '#000'}}>
        <div id="blue-content" style={{backgroundColor: '#ecedf2'}}>
          <h1>Why Partner with Risen Logistics?</h1>
          <div class="four-grid">
            <div>
              <img src={tempImage} className="grid-image" width="150" height="150" loading="lazy"></img>
              <h1>Industry Expertise</h1>
              <p>Years of experience ensure we meet the highest standards of efficiency and reliability.</p>
            </div>

            <div>
              <img src={tempImage} className="grid-image" width="150" height="150" loading="lazy"></img>
              <h1>Custom Solutions</h1>
              <p>We design logistics strategies that align with your mission and goals.</p>

            </div>
            <div>
              <img src={tempImage} className="grid-image" width="150" height="150" loading="lazy"></img>
              <h1>Commitment to Diversity</h1>
              <p>As a minority women-owned company, we are proud to contribute to the diversification and empowerment of supply chains nationwide.</p>

            </div>
            <div>
              <img src={tempImage} className="grid-image" width="150" height="150" loading="lazy"></img>
              <h1>Unmatched Service</h1>
              <p>From the first mile to the last, we deliver exceptional service that exceeds expectations.</p>

            </div>
          </div>
        </div>
      </div>

      <SplitSection
        image="https://placehold.co/1920x1080"
        title="Our Promise"
        description="Logistics is more than just moving goods from point A to point B it’s about trust, reliability, and delivering on promises. At Risen Logistics, we take pride in being the backbone of your supply chain, ensuring that every shipment arrives safely, on schedule, and with the highest level of service."
        imageFirst={true}
        backgroundcolor="#0e3760"
        textcolor="white"
      />

      <SplitSection
        image="https://placehold.co/1920x1080"
        title="Let’s Move Forward, Together."
        description="Experience the difference that over a century of expertise can make. Whether you need full-service logistics, freight brokerage, or dedicated trucking solutions, Risen Logistics is here to help."
        imageFirst={false}
      />
    </section>
  );
}

export default About;