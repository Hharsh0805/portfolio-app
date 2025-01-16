import React, { useState } from 'react';
import './Resume.css';

const Resume = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className="resume-section">
      <h2>Resume</h2>
      <button onClick={openModal} className="view-resume-btn">View My Resume</button>
      
      {isModalOpen && (
        <div className="resume-modal">
          <div className="resume-modal-content">
            <button onClick={closeModal} className="close-modal">&times;</button>
            <iframe src="/assets/harsh-resume.pdf" title="Resume" />
            <a href="/assets/harsh-resume.pdf" download className="download-resume-btn">
              Download Resume
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default Resume;
