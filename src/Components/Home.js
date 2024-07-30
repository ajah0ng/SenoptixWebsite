import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <header className="home-header">
        <img src={`${process.env.PUBLIC_URL}/cover-image.jpeg`} className="home-cover" alt="Cover" />
        <div className="home-logo-container">
          <img src={`${process.env.PUBLIC_URL}/logo-clear.png`} className="home-logo" alt="Senoptix Logo" />
        </div>
        <div className="home-text">
          <p className="intro-heading">INTRODUCING</p>
          <p className="intro-subheading">Rapid Multiplexing Sensing</p>
          <p className="intro-description">REVOLUTIONISING BIOSENSING CAPABILITIES</p>
          {/* <a href="#" className="learn-more">Learn more about Senoptix &gt;</a> */}
        </div>
      </header>
      <section className="programs-text">
        <h1>Senoptix's Accelerating Innovation: Developed and refined through esteemed Accelerator programs</h1>
      </section>
      <section className="programs-logos">
        <a href="https://research.csiro.au/onalumni/senoptix/" target="_blank" rel="noopener noreferrer">
          <img src={`${process.env.PUBLIC_URL}/csiro.png`} className="program-logo" alt="CSIRO logo" />
        </a>
        <a href="https://unswfounders.com/" target="_blank" rel="noopener noreferrer">
          <img src={`${process.env.PUBLIC_URL}/founders.png`} className="program-logo" alt="Founders logo" />
        </a> 
        <a href="https://medtechactuator.com/meet-the-medtech-actuator-origin-2023-cohort/" target="_blank" rel="noopener noreferrer">
          <img src={`${process.env.PUBLIC_URL}/medtech.png`} className="program-logo" alt="Medtech logo" />
        </a>  
      </section>
      <section className="info-section">
        <h1>Our Technology</h1>
        <p>
          At Senoptix, we are pioneering advancements in biosensing technology with our state-of-the-art high-density electrode arrays. 
          At the core of our development, we leverage the power of light-activated electrochemistry leading to our innovative solution to deliver unparalleled sensitivity, 
          selectivity, and multiplexing capabilities. 
          
          Our technology revolutionizes the way biosensing is performed, enabling rapid and precise detection of a wide range of biological and chemical substances.
          
          To learn more about our design, click Learn More, or watch the summary video below.
        </p>
        {/* <a href="#" className="learn-more">Learn more &gt;</a> */}
        <div className="video-container">
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/chNi279Ip3I" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>
        </div>
      </section>
      <section className="info-section">
        <h1>Our Team</h1>
        <p>Our dedicated team of experts drives the innovation and success at Senoptix. Comprised of industry-leading scientists, our team is committed to advancing biosensing technology through rigorous research and development.</p>
        {/* <a href="#" className="learn-more">Meet the Team &gt;</a> */}
      </section>
      <section className="info-section">
        <h1>Contact Us</h1>
        <p>
          For any questions and inquiries, email us at info@senoptix.com
        </p>
        {/* <a href="#" className="learn-more">For more details &gt;</a> */}
      </section>
    </div>
  );
}

export default Home;
