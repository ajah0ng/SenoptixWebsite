import React from 'react';
import './OurApplications.css';

function OurApplications() {
  return (
    <div>
      <div className="banner">
        <img src={`${process.env.PUBLIC_URL}/germs.jpg`} className="home-cover" alt="Cover" />
        <div className="banner-text">
          <h2>The Clinical challenge</h2>
          <h2>of Sepsis Identification</h2>
        </div>
      </div>

      <div className="sepsis-container">
        <div className="sepsis-stats">
          <h1>"48.9 million cases and 11 million sepsis-related deaths worldwide, representing 20% of all global deaths"</h1>
          <p>2020 World Health Organisation (WHO)</p>
          <h1>"An estimated 18,000 Australian adults are treated in intensive care units for sepsis annually, of which almost 5,000 will die"</h1>
          <p>2021 Clinical Excellence Queensland Health</p>
          <h1>"The death rate increases 4-9% every hour treatment is delayed."</h1>
          <p>2020 World Health Organisation (WHO)</p>
        </div>

        <div className="sepsis-title">
          <h2>Our technnology improves patient outcomes with fast diagnosis</h2>
        </div>
        <div className="sepsis-info">
          <p>Sepsis is a life-threatening medical condition that arises when the body's response to an infection causes widespread inflammation. This inflammation can lead to tissue damage, organ failure, and potentially death if not promptly and effectively treated. Sepsis is a significant global health concern, affecting millions of people each year and leading to high mortality rates.</p>
          <p>Caused by infections, most commonly bacterial and viral, sepsis can also result from fungal or parasitic infections. Despite advances in medical care, one of the major challenges in managing sepsis is the lack of fast and accurate diagnostic methods. Early and precise diagnosis is crucial to improving outcomes, but current diagnostic techniques are often slow and can delay the initiation of appropriate treatment.</p>
        </div>

        <div className="sepsis-diagnosis">
          <h2>Changing Diagnostic Practices</h2>
          <ul>
            <li><strong>Time-Consuming Laboratory Tests:</strong> Traditional methods for diagnosing sepsis involve blood cultures and other laboratory tests that can take several hours to days to yield results. This delay can be critical, as the patient's condition can deteriorate rapidly.</li>
            <li><strong>Non-Specific Symptoms:</strong> The symptoms of sepsis, such as fever, rapid heart rate, and confusion, are non-specific and can be similar to those of other medical conditions, making clinical diagnosis challenging without supportive laboratory data.</li>
            <li><strong>Complex Pathophysiology:</strong> Sepsis involves a complex interplay of inflammatory and immune responses, which can vary widely among patients. This variability makes it difficult to rely on a single biomarker or test for a definitive diagnosis.</li>
          </ul>
          <p>Recent advancements in biosensor technology offer promising solutions for the rapid and accurate diagnosis of sepsis. Biosensors are analytical devices that convert a biological response into an electrical signal, providing real-time data on the presence of specific biomarkers.</p>
          <p>The mortality was 79.5% among the patients aged over 60 years who succumbed to severe sepsis (mortality group), whereas it was 52.5% among the patients aged under 60 years who survived.</p>
        </div>
      </div>
    </div>
  );
}

export default OurApplications;
