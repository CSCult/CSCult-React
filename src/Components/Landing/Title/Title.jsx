import React from 'react';
import './Title.css';
import main from '../../../img/logo-main.png';
import { Link } from 'react-router-dom';

import Main from '../../../img/Main.svg';

function Title() {
  return (<>

    <section id="landing-navigation">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/"><img src={main} alt=''/> CSCult</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/events">Events</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/products">Products</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/clubs">Clubs</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/team">Team</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/logo">Logo</Link>
                    </li>
                </ul>
            </div>
        </nav>
    </section>

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

    {/* ------NOTE - isko hath na lagaye , naito niche ka content upar aa jaiga */}
    <div>
    <br/><br/><br/><br/><br/>
    </div> 
    <div className='organiser'>
    <br/><br/><br/><br/><br/>
    </div> 
    <div className='organiser'>
    <br/><br/><br/><br/><br/><br /><br />
    </div> 

    </>
  );
}

export default Title;