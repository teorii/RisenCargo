import React from 'react';

const SplitSection = ({ image, title, description, imageFirst = true, backgroundcolor = "#ecedf2", textcolor = "black" }) => (
  <div className="split-section" style={{ backgroundColor: backgroundcolor, color: textcolor }}>
    {imageFirst ? (
      <>
        <div className="split-image">
          <img src={image} alt={title} />
        </div>
        <div className="split-content">
          <h1>{title}</h1>
          <div>{description}</div>
        </div>
      </>
    ) : (
      <>
        <div className="split-content">
          <h1>{title}</h1>
          <div>{description}</div>
        </div>
        <div className="split-image">
          <img src={image} alt={title} />
        </div>
      </>
    )}
  </div>
);

export default SplitSection;