import React from 'react';

import './Title.css';

import Main from '../../../img/Main.svg';

function Title() {
  return (
    <section id="title">
      <div className="title-img">
        <img className="main-img" src={Main} alt='' />
      </div>
      <div className="title-content">
        <h1>
          <span>We are building</span>
          <span> Indore's largest</span>
          <span> Internet community</span>
        </h1>
        <p>Exploring the Future</p>
        <button className="btn btn-lg btn-dark" onclick="openNav()">
          Explore
        </button>
      </div>
    </section>
  );
}

export default Title;