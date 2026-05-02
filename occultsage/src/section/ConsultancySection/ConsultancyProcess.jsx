import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardList, Map, Calculator, HeartHandshake } from 'lucide-react';
import './ConsultancyProcess.css';

const steps = [
  {
    icon: <ClipboardList size={28} />,
    title: "Discovery Call",
    desc: "A brief session to understand your concerns and collect basic property details."
  },
  {
    icon: <Map size={28} />,
    title: "Layout Analysis",
    desc: "Acharya Pankaj deeply studies your property maps and identifies energy blockages."
  },
  {
    icon: <Calculator size={28} />,
    title: "Vedic Syncing",
    desc: "Syncing your space with your personal birth chart (Astro-Vastu) for precise results."
  },
  {
    icon: <HeartHandshake size={28} />,
    title: "Remedial Report",
    desc: "Receiving practical, non-demolition remedies to align your space with abundance."
  }
];

const ConsultancyProcess = () => {
  return (
    <section className="process-section">
      <div className="process-container">
        <div className="process-header">
          <span className="process-kicker">Transparent & Logical</span>
          <h2>How it <span className="lime-text">Works?</span></h2>
          <p>Four simple steps to transform your environment's energy and unlock your hidden potential.</p>
        </div>

        <div className="steps-wrapper">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className="step-card-modern"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="step-number">0{index + 1}</div>
              <div className="step-icon-box">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
              {index < steps.length - 1 && <div className="step-connector"></div>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConsultancyProcess;