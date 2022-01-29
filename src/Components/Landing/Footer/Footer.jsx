import React from 'react';

import './Footer.css';

import FooterImg from '../../../img/connect-footer.png';

function Footer(){
    return <section id="footer">
    <div className="row">
        <div className="col-lg-1"><h4>CSCult</h4></div>
        <div className="col-lg-1"><a href="logo.html"><img className="footer-logo" src="img/logo-main.png" alt="" /></a></div>
    </div>

    <div className=" content-box">
        <div className="content">
            <ul>
                <h5>EXPLORE</h5>
                <li><a href="#about"><button className="btn btn-none btn-outline-light">About</button></a></li>
                <li><a href="#event"><button className="btn btn-none btn-outline-light">Events</button></a></li>
                <li><a href="product.html"><button className="btn btn-none btn-outline-light">Products</button></a></li>
                <li><a href="clubs.html"><button className="btn btn-none btn-outline-light">Clubs</button></a></li>
                <li><a href="team.html"><button className="btn btn-none btn-outline-light">Team</button></a></li>
            </ul>
        </div>
    
        <div className="content">
            <ul>
                <h5>SOCIAL MEDIA</h5>
                <li><a target="_blank" rel='noreferrer' href="https://instagram.com/cscult.in"><i className="fab fa-instagram-square fa-2x"></i></a></li>
                <li><a target="_blank" rel='noreferrer' href="https://www.linkedin.com/company/cscult"><i className="fab fa-linkedin fa-2x"></i></a></li>
                <li><a target="_blank" rel='noreferrer' href="https://twitter.com/CSCultOfficial"><i className="fab fa-twitter fa-2x"></i></a></li>
                <li><a target="_blank" rel='noreferrer' href="https://www.youtube.com/channel/UCn2bhZWnwi51vGFVr3bqR8w"><i className="fab fa-youtube fa-2x"></i></a></li>
                <li><a target="_blank" rel='noreferrer' href="https://discord.gg/fjkauFJ3jB"><i className="fab fa-discord fa-2x"></i></a></li>
                <li><a target="_blank" rel='noreferrer' href="https://github.com/CSCult"><i className="fab fa-github fa-2x"></i></a></li>
                <li><a target="_blank" rel='noreferrer' href="https://open.spotify.com/show/7cPdUTgXDhYvM26YrM3QV2"><i className="fab fa-spotify fa-2x"></i></a></li>
            </ul>
        </div>

        <div className="content">
            <ul>
                <h5>CONNECT !</h5>
                <a target="_blank" rel='noreferrer' href="https://discord.gg/fjkauFJ3jB"><button className="btn btn-light btn-outline-dark">DISCORD BRO</button></a>
                <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/company/cscult"><button className="btn btn-light btn-outline-dark">LET'S TALK</button></a>
            </ul>
        </div>

        <div>
            <img className="footer-img1" src={FooterImg} alt="" />
        </div>
    </div>        
</section>
}

export default Footer;
