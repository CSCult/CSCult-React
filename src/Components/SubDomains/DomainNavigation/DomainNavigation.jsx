import React from 'react';
import './DomainNavigation.css';
import main from '../../../img/logo-main.png';
import { Link } from 'react-router-dom';

class DomainNavigation extends React.Component{
    render(){
        return <section id="navigation-branch">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/"><img src={main} /> CSCult</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
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
    }
}

export default DomainNavigation;
