import React from 'react';

import './Navigation.css';

import logoblack from '../../../img/logo-black.png';

function Navigation(){
    return <section id="navigation">
        <nav className="navbar navbar-expand-lg navbar-dark">
            <a className="navbar-brand" href="/"><img src={logoblack} alt=''/></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link" href="#about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#community">Community</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#event">Events</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Products</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Clubs</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Team</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Logo</a>
                    </li>
                </ul>
            </div>
        </nav>
        </section>;
}

export default Navigation;
