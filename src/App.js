import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Components/Home';
import SenoptixTechnology from './Components/Technology';
import OurApplications from './Components/OurApplications';
import OurTeam from './Components/OurTeam';
import ContactUs from './Components/ContactUs';
import LightActivatedElectrochemistry from './Components/LightActivatedElectrochemistry'; // Import the new component
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li>
              <Link to="/senoptix-technology">Senoptix Technology</Link>
              <ul>
                <li><Link to="/biosensors">What are Biosensors?</Link></li>
                <li><Link to="/types-of-biosensors">Types of Biosensors</Link></li>
                <li><Link to="/electrochemical-biosensors-advantages">Electrochemical Biosensors Advantages</Link></li>
                <li><Link to="/light-activated-electrochemistry">Senoptix Technology: Light-Activated Electrochemistry</Link></li>
                <li><Link to="/advantages-of-senoptix">Advantages of Senoptix</Link></li>
              </ul>
            </li>
            <li><Link to="/our-applications">Our Applications</Link></li>
            <li><Link to="/our-team">Our Team</Link></li>
            <li><Link to="/contact-us">Contact Us</Link></li>
          </ul>
        </nav>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/senoptix-technology" element={<SenoptixTechnology />} />
            <Route path="/biosensors" element={<div>What are Biosensors?</div>} />
            <Route path="/types-of-biosensors" element={<div>Types of Biosensors</div>} />
            <Route path="/electrochemical-biosensors-advantages" element={<div>Electrochemical Biosensors Advantages</div>} />
            <Route path="/light-activated-electrochemistry" element={<LightActivatedElectrochemistry />} />
            <Route path="/advantages-of-senoptix" element={<div>Advantages of Senoptix</div>} />
            <Route path="/our-applications" element={<OurApplications />} />
            <Route path="/our-team" element={<OurTeam />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </div>
        <footer>
          <p>&copy; 2024 Senoptix. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
