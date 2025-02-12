import React from 'react';

function Hero({ title, subtitle, buttons = false, primaryButton, secondaryButton, backgroundImage}) {
  const heroStyle = {
    height: '60vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    textAlign: 'left',
    padding: '0 15%',
    backgroundSize: 'cover',
    backgroundPosition: 'bottom',
    color: 'white',
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`
  };
  return (
    <div className={`hero`} style={heroStyle}>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      {buttons && (primaryButton || secondaryButton) && (
      <div className="hero-buttons">
        {primaryButton && (
          <a href={primaryButton.link} className="button button-blue">
            {primaryButton.text}
          </a>
        )}
        {secondaryButton && (
          <a href={secondaryButton.link} className="button button-white">
            {secondaryButton.text}
            </a>
          )}
        </div>
      )}
    </div>
  );
}

export default Hero;