import React from 'react';
import manufacturing from '../assets/industries/manufacturing.jpg';
import retail from '../assets/industries/retail.jpg';
import automotive from '../assets/industries/automotive.jpg';
import agriculture from '../assets/industries/agriculture.jpg';
import aerospace from '../assets/industries/aerospace.jpg';
import consumer from '../assets/industries/consumer.jpg';
import biotech from '../assets/industries/biotech.jpg';

const IndustrySection = () => (
  <div className="industries-section">
      <h2 className="industries-title">Industries We Serve</h2>
      <div className="industries-grid">
        {[
          { name: 'Manufacturing', image: manufacturing },
          { name: 'Retail & E-commerce', image: retail },
          { name: 'Automotive', image: automotive },
          { name: 'Agriculture', image: agriculture },
          { name: 'Aerospace', image: aerospace },
          { name: 'Consumer Goods', image: consumer },
          { name: 'Biotech', image: biotech },
          { name: 'And More!', image: 'https://placehold.co/400x200' },
        ].map((industry, index) => (
          <div key={index} className="industry-card">
            <img src={industry.image} alt={industry.name} />
            <div className="industry-overlay">
              <p>{industry.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
);

export default IndustrySection;