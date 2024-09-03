import React from 'react';
import './Technology.css';

function SenoptixTechnology() {
  return (
    <div>
      <div className="banner">
        <img src={`${process.env.PUBLIC_URL}/cover-image.jpeg`} className="home-cover" alt="Cover" />
        <div className="banner-text">
          <h2>Sensor Technnology</h2>
        </div>
      </div>

      <div className="container">
        <div className="header">
          <h1>At Senoptix, our Light-Activated Electrochemical-Sensor</h1>
          <p>redefines sensing across all applications. Our highly adaptable sensor integrates cutting-edge light-activated technology to deliver unparalleled sensitivity, selectivity, and versatility, transforming how we detect and measure chemical and biological phenomena.</p>
        </div>

        <div className="gif-container">
        <img 
          src={`${process.env.PUBLIC_URL}/diagram.gif`} 
          alt="Technology GIF" 
          className="small-image" 
        />
        </div>
        
        <div className="section">
          <div className="card">
            <h2><i className="check-icon">&#10003;</i>Simultaneous Multi-Analyte Detection (Multiplexing)</h2>
            <p>Our sensor can detect multiple analytes at the same time, providing comprehensive data in a single test.</p>
          </div>
          
          <div className="card">
            <h2><i className="check-icon">&#10003;</i>Enhanced Sensitivity and Selectivity</h2>
            <p>Light activated electrochemistry allows for precise control over the reaction environment.</p>
          </div>
          
          <div className="card">
            <h2><i className="check-icon">&#10003;</i>Enhanced Signal Resolution</h2>
            <p>The ability to selectively activate specific areas of an electrode surface can improve the resolution and specificity of the signals obtained. This is critical for applications that require detailed spatial information, such as imaging and localized sensing​.</p>
          </div>
          
          <div className="card">
            <h2><i className="check-icon">&#10003;</i>Real-Time Monitoring</h2>
            <p>Light-activated electrochemistry enables real-time monitoring and rapid response to changes in the environment. This is critical for applications requiring immediate feedback and action.</p>
          </div>
          
          <div className="card">
            <h2><i className="check-icon">&#10003;</i>Reduced Complexity in Device Architecture</h2>
            <p>By using light to activate electrochemical reactions, the need for multiple physical connections (wires) to each electrode is eliminated. This reduces the complexity and space requirements of the device, allowing for higher density of electrodes and more flexible device designs.</p>
          </div>
          
          <div className="card">
            <h2><i className="check-icon">&#10003;</i>Spatial and Temporal Control</h2>
            <p>Light activation provides exceptional control over where and when reactions occur. This spatial and temporal precision can improve the efficiency and effectiveness of various electrochemical processes.</p>
          </div>
          
          <div className="card">
            <h2><i className="check-icon">&#10003;</i>Miniaturization and Integration</h2>
            <p>The technology supports the development of miniaturized devices and can be easily integrated into existing systems. This is particularly beneficial for portable and wearable sensor technologies.</p>
          </div>
        </div>
      </div>

      <div className="banner">
        <img src={`${process.env.PUBLIC_URL}/germs.jpg`} className="home-cover" alt="Cover" />
        <div className="banner-text">
          <h2>Diagnosing complex diseases</h2>
          <h1>and SAVING LIVES</h1>
        </div>
      </div>

      <div className="container">
        <div className="text-layout">
          <div className="text-left">
          <h2>Revolutionizing Sepsis Diagnosis</h2>
          </div>
          <div className="text-right">
          <ul>
            <li><strong>Rapid Detection:</strong> Aptamer-based biosensors can provide real-time results, significantly reducing the time required for diagnosis compared to conventional laboratory tests.</li>
            <li><strong>High Sensitivity and Specificity:</strong> Aptamers can be designed to bind to specific sepsis-related biomarkers, such as procalcitonin, C-reactive protein, or specific cytokines, ensuring high sensitivity and specificity in detecting sepsis.</li>
            <li><strong>Stability and Reusability:</strong> Aptamers are more stable than antibodies and can be reused multiple times, making them cost-effective for continuous monitoring.</li>
            <li><strong>Versatility:</strong> Aptamers can be integrated into various types of biosensors, including electrochemical, optical, and acoustic sensors, providing flexibility in designing diagnostic devices.</li>
          </ul>
            <p><a href="#more-info">See more</a></p>
          </div>
        </div>
      </div>
    </div>

  );
}

export default SenoptixTechnology;
