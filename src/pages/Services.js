import React from 'react';
import Hero from '../components/Hero';
import homeHeroImage from '../assets/home/homehero.jpg';
import { Link } from 'react-router-dom';
import tempImage from '../assets/1920x1080.svg';

function Services() {
  const services = [
    {
      title: 'Full Truckload (FTL) Cartage',
      description: 'Dedicated freight solutions for your large shipments',
      image: tempImage, // Replace with actual image path
      link: '/services/ftlcartage'
    },
    {
      title: 'Less Than Truckload (LTL) Cartage',
      description: 'Cost-effective shipping for smaller freight loads',
      image: tempImage, // Replace with actual image path
      link: '/services/ltlcartage'
    },
    {
      title: 'Warehousing & Logistics',
      description: 'Secure storage and distribution solutions',
      image: tempImage, // Replace with actual image path
      link: '/services/warehousing&logistics'
    }
  ];

  return (
    <section>
      <Hero 
        title="Services"
        subtitle="Empowering Supply Chains with Excellence."
        backgroundImage={homeHeroImage}
      />
      <div className="services-container">
        <div className="services-grid">
          {services.map((service, index) => (
            <Link to={service.link} key={index} className="service-card">
              <div className="service-card-inner">
                <img
                  src={service.image}
                  alt={service.title}
                  className="service-image"
                  loading="lazy"
                />
                <div className="service-overlay">
                  <div className="service-content">
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-description">{service.description}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;