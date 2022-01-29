import React from 'react';

import './Event.css';

function Event() {
  return (
    <section id="event">
      <h2>Events</h2>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row">
              <div className="col-lg-4">
                <img
                  src="https://cdn.discordapp.com/attachments/923793151477563422/924160035829985300/Untitled_design_2.png"
                  alt=""
                />
              </div>
              <div className="col-lg-6 event-content">
                <h3>Crypto Session</h3>
                <p>
                  This session-cum-workshop was hosted by Saud Hashmi, the
                  Founder of CSCult, in collaboration with MUACM, on the very
                  basics of cryptocurrencies.{" "}
                </p>
                <p>
                  The session not only covered what cryptocurrencies are, but it
                  discovered the history of currency in general, how traditional
                  fiat money has its own demerits; and how cryptocurrencies can
                  build a more safer and reliable currency system. We also
                  discussed how the power of hashing and nonces are unleashed by
                  cryptocurrencies!
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col-lg-4">
                <img
                  src="https://cdn.discordapp.com/attachments/923793151477563422/924160036220076083/Untitled_design_1.png"
                  alt=""
                />
              </div>
              <div className="col-lg-6 event-content">
                <h3>GitHub 101</h3>
                <p>
                  One of the most successful sessions organized by CSCult for
                  beginners and open-source developers.
                </p>
                <p>
                  {" "}
                  Yash Sehgal, the first ever Web Dev (see CSCult's brochure),
                  hosted this session, where he taught everyone the basics of
                  Git and GitHub. From creating repositories to managing
                  branches and version control, Yash covered it all.
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col-lg-4">
                <img
                  src="https://cdn.discordapp.com/attachments/923793151477563422/924160036618502194/Crypto_Session.png"
                  alt=""
                />
              </div>
              <div className="col-lg-6 event-content">
                <h3>Mobile Development Workshop</h3>
                <p>
                  Another popular event organized by CSCult, where Mihir
                  Pesswani, our first ever AI Div Head, took a Live Online
                  Workshop on Mobile Development.
                </p>
                <p>
                  He explained all kinds of mob dev, life cycles of an app,
                  Flutter v/s React Native and finally, an awesome 30-40 minute
                  live Flutter Sample App coding, where we all coded our own
                  sample portfolio in the Flutter Development IDE.
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col-lg-4">
                <img
                  src="https://cdn.discordapp.com/attachments/923793151477563422/924160037012783114/Mastering_Instagram_and_LinkedIn_for_Personal_and_Brand_Growth_1.png"
                  alt=""
                />
              </div>
              <div className="col-lg-6 event-content">
                <h3>
                  Mastering Instagram and Linkedin for Personal and Brand Growth
                </h3>
                <p>
                  A panel discussion on mastering personal and co-branding.
                  Learn to use the power of Instagram and LinkedIn to reach
                  organic growth.
                </p>
                <p>
                  - A panel discussion to master personal and co-branding - A
                  panel of entrepreneurs, marketing professionals & social media
                  managers.
                </p>
                <p>
                  The speakers were: Sidhant Sidana, Anjali Pawar and Purna
                  Jain.
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev btn-1"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next btn-2"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}

export default Event;
