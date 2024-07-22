import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    console.log('Form Data Submitted:');
    formData.forEach((value, key) => {
      console.log(`${key}: ${value}`);
    });

    // Implement form submission logic, e.g., sending data to a server
  };

  return (
    <section className="contact-us-section">
      <h1>Contact Us</h1>
      <p className="intro-text">We'd love to hear from you! Please reach out with any questions or inquiries.</p>
      <p className="email-text">Email us directly at <a href="mailto:info@senoptix.com">info@senoptix.com</a></p>
      <form id="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Your Email</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="to">To</label>
        <input type="email" id="to" name="to" value="info@senoptix.com" readOnly />

        <label htmlFor="user-type">I am a</label>
        <select id="user-type" name="user-type" required>
          <option value="" disabled selected>Select one</option>
          <option value="Researcher">Researcher</option>
          <option value="Investor">Investor</option>
          <option value="Medical Professional">Medical Professional</option>
          <option value="Other">Other</option>
        </select>

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="5" required></textarea>

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactUs;
