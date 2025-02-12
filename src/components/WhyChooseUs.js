import React from 'react';

const WhyChooseUs = () => {
  const benefits = [
    {
      title: "Technology at Your Fingertips",
      description: "Stay ahead with our cutting-edge, web-based WMS."
    },
    {
      title: "Enhanced Accuracy",
      description: "Leverage unique license plate tracking for precise inventory management."
    },
    {
      title: "FIFO Compliance",
      description: "Trust our ability to manage your inventory for efficient stock rotation."
    },
    {
      title: "Compliance and Security",
      description: "Depend on our bonded facilities for seamless customs management."
    },
    {
      title: "24/7 Monitoring",
      description: "Benefit from continuous surveillance and top-tier security measures."
    },
    {
      title: "Unmatched Agility",
      description: "Experience the difference with our quick and flexible services."
    },
    {
      title: "Full Fleet Support",
      description: "Ability to leverage our fleet to fulfill all orders."
    }
  ];

  return (
    <div className="why-choose-us" style={{
      padding: '4rem 2rem',
      backgroundColor: '#ecedf2'
    }}>
      <div style={{
        maxWidth: '70vw',
        margin: '0 auto'
      }}>
        <h1 style={{
          textAlign: 'center',
          fontSize: '2rem',
          marginBottom: '3rem',
          color: '#003b6d'
        }}>Why Choose Us?</h1>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '0px',
          marginBottom: '3rem'
        }}>
          {benefits.map((benefit, index) => (
            <div key={index} style={{
              padding: '2rem',
              backgroundColor: 'white',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            }}>
              <h3 style={{
                fontSize: '1.25rem',
                color: '#003b6d',
                marginBottom: '1rem'
              }}>{benefit.title}</h3>
              <p style={{
                color: '#666',
                lineHeight: '1.5'
              }}>{benefit.description}</p>
            </div>
          ))}
        </div>
        <div style={{
          textAlign: 'center',
          color: '#333',
          maxWidth: '70vw',
          margin: '0 auto',
          lineHeight: '1.6'
        }}>
          Let Risen Logistics handle your logistics and warehousing challenges, so you can focus on growing your business.
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs; 