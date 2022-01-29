import React from 'react';

import './Community.css';

import CommunityDiss from '../../../img/CommunityDiss.svg';
import DisBtn from '../../../img/discord-btn.png';



function Community() {
  return (
    <section id="community">
      <div className="community-content">
        <h2>Community</h2>
        <p>
          The CSCult community is not just like any other community. We don't
          plan events just for the sake of making them happen. We believe in
          hearing out our end consumers, i.e. our Community Members and giving
          them the events they require.
        </p>
        <p>
          We avoid going the traditional marketing path that every community
          tries to do. We believe that people would love to join our Community
          by looking at our efforts and believing in our vision.
        </p>
        <p>What we do believe is in personal, digital and co-branding!</p>
        <p>
          Join our Discord server to get access to resources, event
          announcements, fun activities and everything we have in store for our
          lovely community!
        </p>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <img src={CommunityDiss} alt="" className="img1" />
        </div>
        <div className="col-lg-4 join-discord">
          <h3>Join the CSCult Discord Server today !</h3>
          <a target="_blank" rel='noreferrer' href="https://discord.gg/fjkauFJ3jB">
            <img src={DisBtn} alt="" className="img2" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Community;
