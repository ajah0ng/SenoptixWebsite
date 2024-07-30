import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Components/Home';
import SenoptixTechnology from './Components/Technology';
import OurApplications from './Components/OurApplications';
import OurTeam from './Components/OurTeam';
import ContactUs from './Components/ContactUs';
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
