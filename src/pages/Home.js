import React from 'react';
import Hero from '../components/Hero';
import SplitSection from '../components/SplitSection';
// Add new image imports
import homeHeroImage from '../assets/home/homehero.jpg';
import van16 from '../assets/home/van16.jpg';
import truck24 from '../assets/home/truck24.jpg';
import flatbed48 from '../assets/home/flatbed48.jpg';
import dryvan53 from '../assets/home/dryvan53.jpg';
import missionImage from '../assets/home/mission.jpg';
import logisticsImage from '../assets/home/logistics.jpg';
import expertiseImage from '../assets/home/expertise.jpg';
import solutionsImage from '../assets/home/solutions.jpg';
import diversityImage from '../assets/home/diversity.jpg';
import serviceImage from '../assets/home/service.jpg';

function Home() {
  return (
    <section>
      <Hero 
        title="Welcome to Risen Logistics"
        subtitle="Empowering Supply Chains with Excellence."
        buttons={true}
        primaryButton={{ link: "services", text: "Services" }}
        secondaryButton={{ link: "about", text: "Learn More" }}
        backgroundImage={homeHeroImage}
      />

      <SplitSection
        image={missionImage}
        title="Our Mission"
        description="At Risen Logistics, we are dedicated to delivering exceptional freight 
        solutions rooted in integrity, excellence, and unparalleled expertise. As a minority women-owned 
        business, we strive to uplift our clients, partners, and communities by embodying servant leadership 
        and honoring the values of trust, resilience, and compassion."
        imageFirst={false}

      />
      
      <div className="blue">
        <div id="blue-content">
          <h1>Our Fleet.</h1>
          <p>With a versatile range of assets, Risen Logistics ensures your freight reaches 
            its destination on time, every time. Our fleet includes:</p>
          <div class="four-grid">
            <div>
              <img src={van16} className="grid-image" width="150" height="150" loading="lazy"/>
              <h1>16' Vans</h1>
              <p>Agile and quick deliveries.</p>
            </div>

            <div>
              <img src={truck24} className="grid-image" width="150" height="150" loading="lazy"></img>
              <h1>24' Straight Trucks</h1>
              <p>Versatile medium-load solutions.</p>

            </div>
            <div>
              <img src={flatbed48} className="grid-image" width="150" height="150" loading="lazy"></img>
              <h1>48' Flatbeds</h1>
              <p>Oversized and specialized cargo.</p>
            </div>
            <div>

              <img src={dryvan53} className="grid-image" width="150" height="150" loading="lazy"></img>
              <h1>53' Dry Vans</h1>
              <p>High-capacity and secure transportation.</p>
            </div>

          </div>
        </div>
      </div>

      <SplitSection
        image={logisticsImage}
        title="Mission-Driven Logistics."
        description="Risen Logistics isn’t just a freight company—we are a trusted partner 
        dedicated to strengthening supply chains that keep businesses running and communities thriving. 
        When you choose Risen Logistics, you choose a partner who prioritizes 
        integrity, accountability, and impact."

      />

      <div className="blue">
        <div id="blue-content">
          <h1>Why Partner with Risen Logistics?</h1>
          <div class="four-grid">
            <div>
              <img src={expertiseImage} className="grid-image" width="150" height="150" loading="lazy"></img>
              <h1>Industry Expertise</h1>
              <p>Years of experience ensure we meet the highest standards of efficiency and reliability.</p>
            </div>

            <div>
              <img src={solutionsImage} className="grid-image" width="150" height="150" loading="lazy"></img>
              <h1>Custom Solutions</h1>
              <p>We design logistics strategies that align with your mission and goals.</p>

            </div>
            <div>
              <img src={diversityImage} className="grid-image" width="150" height="150" loading="lazy"></img>
              <h1>Commitment to Diversity</h1>
              <p>As a minority women-owned company, we are proud to contribute to the diversification and empowerment of supply chains nationwide.</p>

            </div>
            <div>
              <img src={serviceImage} className="grid-image" width="150" height="150" loading="lazy"></img>
              <h1>Unmatched Service</h1>
              <p>From the first mile to the last, we deliver exceptional service that exceeds expectations.</p>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;