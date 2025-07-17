import React from 'react';
import { Link } from 'react-router-dom';

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
    backgroundPosition: 'center',
    color: 'white',
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`
  };

  return (
    <div className="hero-wrapper">
      <picture>
        <source srcSet={backgroundImage.replace('.jpg', '.webp')} type="image/webp" />
        <source srcSet={backgroundImage} type="image/jpeg" />
        <div className="hero" style={heroStyle}>
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
          {buttons && (primaryButton || secondaryButton) && (
          <div className="hero-buttons">
            {primaryButton && (
              <Link to={`/${primaryButton.link}`} className="button button-blue">
                {primaryButton.text}
              </Link>
            )}
            {secondaryButton && (
              <Link to={`/${secondaryButton.link}`} className="button button-white">
                {secondaryButton.text}
              </Link>
            )}
            </div>
          )}
        </div>
      </picture>
    </div>
  );
}

export default Hero;