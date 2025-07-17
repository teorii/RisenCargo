import React from 'react';
import Hero from '../components/Hero';
import heroImage from '../assets/home/homehero.jpg';

function GetQuote() {
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Add your form submission logic here
  // };

  return (
    <section>
      <Hero 
        title="Get a Quote"
        subtitle="Tell us about your project"
        backgroundImage={heroImage}
      />
      <div className="quote-form-container" style={{ textAlign: 'center', padding: '2rem' }}>
        <form className="quote-form">
          <h2>Request a Quote</h2>
          <p className="form-description">Fill out the form below and we'll get back to you shortly.</p>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              placeholder="Enter your full name"
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              placeholder="Enter your email address"
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="projectDetails">Project Details</label>
            <textarea 
              id="projectDetails" 
              name="projectDetails" 
              rows="4"
              placeholder="Tell us about your project requirements..."
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">
            Submit Quote Request
          </button>
        </form>
      </div>
    </section>
  );
}

export default GetQuote;