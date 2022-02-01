import React from 'react';

import './EventPage.css';
import DomainNavigation from '../DomainNavigation/DomainNavigation';
import Footer from '../../Landing/Footer/Footer';
import OldEvents from '../../Landing/Event/Event';


class EventPage extends React.Component{
    render(){
        return (
          <div className="EventPage">
            <DomainNavigation />
            <h1>Our Exciting Events !</h1>
            <div className="latest-event">
              <img src="https://cdn.discordapp.com/attachments/923793151477563422/937936822078701608/Space_Club_LinkedIn_Event_Poster.png" className='latest-img' alt="" />
              <div className='row latest-content'>
                <div className="col-lg-5 latest-sub-content">
                  <p>✨ Civilization is like a thin layer of ice on a deep ocean of opportunities✨</p>
                  <p>And if you wish to explore that ocean, we at 🛰️ CSCult's Space Club have something for you</p>
                  <p className='event-name'>💫 Scales of Civilization💫</p>
                  <p>Transcending from a type 0 to a type 1 civilization </p>
                  <p>A session on the future of spaceflight and becoming a multiplanetary species 🇲🇭</p>
                </div>
                <div className="col-lg-5 latest-join-content">
                  <h4>JOIN US !</h4><br />
                  <p>🗓️ Date : 5 February 2022 <br />⏰ Time : 11:00 AM <br />📍Venue : Zoom</p>
                  <a target='_blank' rel='noreferrer' href="https://us05web.zoom.us/j/87048877691?pwd=SitaYXBtbkpFZGx2T0lYUEpOVmlUdz09"><button className='btn btn-lg btn-primary btn-outline-light'>Join Event</button></a>
                </div>
              </div>
            </div>
            <OldEvents />
            <Footer />
          </div>
        );
    }
}

export default EventPage;
