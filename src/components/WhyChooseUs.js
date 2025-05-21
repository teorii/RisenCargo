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

  const styles = {
    '@media (max-width: 1200px)': {
      gridTemplateColumns: 'repeat(4, 1fr)',
    },
    '@media (max-width: 768px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    '@media (max-width: 480px)': {
      gridTemplateColumns: '1fr',
    }
  };

  return (
    <div className="why-choose-us" style={{
      padding: '6rem 2rem',
      backgroundColor: '#ecedf2'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 2rem'
      }}>
        <h1 style={{
          textAlign: 'center',
          fontSize: '2.5rem',
          marginBottom: '4rem',
          color: '#003b6d',
          fontWeight: '600'
        }}>Why Choose Us?</h1>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(7, 1fr)',
          gap: '24px',
          marginBottom: '4rem'
        }}>
          {benefits.map((benefit, index) => (
            <div key={index} style={{
              padding: '2rem',
              backgroundColor: 'white',
              borderRadius: '12px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              transition: 'transform 0.2s ease',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start'
            }}>
              <h3 style={{
                fontSize: '1.1rem',
                color: '#003b6d',
                marginBottom: '1rem',
                fontWeight: '600'
              }}>{benefit.title}</h3>
              <p style={{
                color: '#555',
                lineHeight: '1.6',
                fontSize: '0.95rem'
              }}>{benefit.description}</p>
            </div>
          ))}
        </div>
        <div style={{
          textAlign: 'center',
          color: '#333',
          maxWidth: '800px',
          margin: '0 auto',
          lineHeight: '1.6',
          fontSize: '1.1rem'
        }}>
          Let Risen Logistics handle your logistics and warehousing challenges, so you can focus on growing your business.
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs; 