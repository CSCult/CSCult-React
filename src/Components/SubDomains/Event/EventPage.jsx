import React from 'react';

import second from './EventPage.css';


class EventPage extends React.Component{
    render(){
        return (
          <section id="EventPage">
            <h1>Our Exciting Events !</h1>
            <div class="row">
              <div class="col-lg-3">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://discord.gg/k5pf4erckV"
                >
                  <img
                    src="https://media.discordapp.net/attachments/923793151477563422/923794426659237939/9.png"
                    alt=""
                  />
                </a>
              </div>
              <div class="col-lg-8 content1">
                <h3>Code Club</h3>
                <p>
                  This club is more about getting like-minded students together
                  to talk about and perhaps work on exciting coding projects
                  together. We have generalized our club into 4 major coding
                  domains:{" "}
                  <b>
                    Data and AI, Scripting, Development and Competitive
                    Programming.
                  </b>
                </p>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://chat.whatsapp.com/FdJZLJoKwAk9KHvw1Tfuma"
                >
                  <button class="btn btn-light btn-outline-dark">
                    Join Code Club
                  </button>
                </a>
              </div>
            </div>
          </section>
        );
    }
}

export default EventPage;
