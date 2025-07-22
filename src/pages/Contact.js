import React from 'react';
import Hero from '../components/Hero';
import heroImage from '../assets/home/homehero.jpg';

function GetQuote() {
  const [result, setResult] = React.useState("");
  const [success, setSuccess] = React.useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e10a6b01-08b6-4b19-8019-775c4f539a9c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      setSuccess(true);
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section>
      <Hero 
        title="Get a Quote"
        subtitle="Tell us about your project"
        backgroundImage={heroImage}
      />
      <div className="quote-form-container" style={{ textAlign: 'center', padding: '2rem', minHeight: '420px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {success ? (
          <div style={{ width: '100%' }}>
            <h2 style={{ color: 'green', marginBottom: '1rem' }}>Success</h2>
            <p>Your quote request has been submitted successfully. We'll get back to you soon!</p>
          </div>
        ) : (
          <form className="quote-form" onSubmit={onSubmit} style={{ width: '100%' }}>
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
                style={{ resize: 'none' }}
              ></textarea>
            </div>

            <input type="checkbox" name="botcheck" class="hidden" style="display: none;"></input>

            <button type="submit" className="submit-button">
              Submit Quote Request
            </button>
            <div style={{ marginTop: '1rem', color: result === 'Form Submitted Successfully' ? 'green' : 'red' }}>
              {result && result !== 'Sending....' && result !== 'Form Submitted Successfully' && result}
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

export default GetQuote;