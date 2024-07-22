import React from 'react';
import './OurTeam.css';

const OurTeam = () => {
  return (
    <section id="our-team" className="our-team-section">
      <h1>Meet our Team</h1>
      <div className="summary-section">
        <p>At Senoptix, our team is comprised of innovative and dedicated professionals who are committed to advancing electrochemical sensing technology. Meet our leaders who drive our mission forward.</p>
      </div>
      <div className="team-members">
        <div className="team-member">
          <img src={`${process.env.PUBLIC_URL}/Mehran_Icon.jpeg`} alt="Dr Mehran Bolourian Kashi" className="team-photo" />
          <h3>Mehran Bolourian Kashi, PhD</h3>
          <p>Co-Founder</p>
          <p>
            Mehran is the Co-founder of Senoptix and an accomplished professional with a strong background in analytics, material science, and technology innovation. 
            With a PhD in Chemistry from the University of New South Wales specializing in photoelectrochemical Imaging, Si-AuNP electrodes, Mehran is dedicated to driving technological advancements and delivering impactful solutions.
          </p>
          <a href="https://www.linkedin.com/in/mehranbolouriankashi/" target="_blank" rel="noopener noreferrer" className="linkedin-link">
            LinkedIn
          </a>
        </div>
        <div className="team-member">
          <img src={`${process.env.PUBLIC_URL}/Parisa_icon.jpeg`} alt="Dr Parisa Sowti" className="team-photo" />
          <h3>Parisa Sowti, PhD</h3>
          <p>Co-Founder</p>
          <p>
            Parisa is the visionary and Co-founder of Senoptix. With a PhD in Chemistry from the University of New South Wales, Parisa brings extensive expertise in electrochemistry, biosensors, and nanotechnology through her publications on surface plasmon based biosensor. Her innovative leadership and commitment to advancing sensor technology drive Senoptix's mission to revolutionize the field of electrochemical sensing.
          </p>
          <a href="https://www.linkedin.com/in/psowti/" target="_blank" rel="noopener noreferrer" className="linkedin-link">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default OurTeam;
