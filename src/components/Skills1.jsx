import React from 'react';
import './Skills1.css';

const Skills = () => {
  return (
    <section className="skills-section">
      <h2>Tech Stack</h2>
      <div className="skills-grid">
        {/* Programming Languages and Frameworks */}
        <a href="https://reactjs.org/" target="_blank" rel="noreferrer" className="skill-item">
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
            alt="React.js"
          />
          <p>React.js</p>
        </a>
        <a href="https://nodejs.org" target="_blank" rel="noreferrer" className="skill-item">
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
            alt="Node.js"
          />
          <p>Node.js</p>
        </a>
        <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer" className="skill-item">
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
            alt="MongoDB"
          />
          <p>MongoDB</p>
        </a>
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer" className="skill-item">
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
            alt="JavaScript"
          />
          <p>JavaScript</p>
        </a>
        <a href="https://www.python.org" target="_blank" rel="noreferrer" className="skill-item">
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
            alt="Python"
          />
          <p>Python</p>
        </a>
        <a href="https://www.w3schools.com/cpp/" target="_blank" rel="noreferrer" className="skill-item">
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg"
            alt="C++"
          />
          <p>C++</p>
        </a>

        {/* Web Development */}
        <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer" className="skill-item">
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
            alt="HTML5"
          />
          <p>HTML5</p>
        </a>
        <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer" className="skill-item">
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
            alt="CSS3"
          />
          <p>CSS3</p>
        </a>
        <a href="https://git-scm.com/" target="_blank" rel="noreferrer" className="skill-item">
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original-wordmark.svg"
            alt="Git"
          />
          <p>Git</p>
        </a>

        {/* Cloud and Tools */}
        <a href="https://aws.amazon.com/" target="_blank" rel="noreferrer" className="skill-item">
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
            alt="AWS"
          />
          <p>AWS</p>
        </a>
        <a href="https://cloud.google.com/" target="_blank" rel="noreferrer" className="skill-item">
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/googlecloud/googlecloud-original-wordmark.svg"
            alt="Google Cloud"
          />
          <p>Google Cloud</p>
        </a>
        <a href="https://jupyter.org/" target="_blank" rel="noreferrer" className="skill-item">
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/jupyter/jupyter-original-wordmark.svg"
            alt="Jupyter Notebook"
          />
          <p>Jupyter Notebook</p>
        </a>
        <a href="https://www.linux.org/" target="_blank" rel="noreferrer" className="skill-item">
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg"
            alt="Linux"
          />
          <p>Linux</p>
        </a>

        {/* AI and Data Science */}
        <a href="https://www.tensorflow.org/" target="_blank" rel="noreferrer" className="skill-item">
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/tensorflow/tensorflow-original.svg"
            alt="TensorFlow"
          />
          <p>TensorFlow</p>
        </a>
        <a href="https://scikit-learn.org/" target="_blank" rel="noreferrer" className="skill-item">
          <img
            src="https://raw.githubusercontent.com/scikit-learn/scikit-learn/main/doc/logos/scikit-learn-logo.png"
            alt="Scikit-learn"
          />
          <p>Scikit-learn</p>
        </a>

        {/* Version Control */}
        <a href="https://github.com/" target="_blank" rel="noreferrer" className="skill-item">
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original-wordmark.svg"
            alt="GitHub"
          />
          <p>GitHub</p>
        </a>
      </div>
    </section>
  );
};

export default Skills;
