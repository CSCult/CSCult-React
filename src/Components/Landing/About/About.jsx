import React from 'react';

import './About.css';

import logoMain from '../../../img/logo-main.png';

function About() {
  return (
    <section id="about">
      <div className="row">
        <div className="about-content col-lg-8">
          <h2>About</h2>
          <p>
            CSCult is a community of individuals and learners from different
            backgrounds, who want to spend their time learning, innovating &
            working on new ideas.
          </p>
          <p>
            If you are a part of CSCult, you spend your time doing better things
            than just studying for interviews and exams & doing numerous
            internships.
          </p>
          <p>
            We have a healthy culture of engaging in meaningful discussions and
            helping each other out in achieving coherence and harmony in the
            community.
          </p>
        </div>
        <div className="col-lg-4">
          <a href="logo.html">
            <img src={logoMain} alt="" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
