import React from "react";

import "./EventPage.css";
import DomainNavigation from "../DomainNavigation/DomainNavigation";
import Footer from "../../Landing/Footer/Footer";
import OldEvents from "../../Landing/Event/Event";
import { Helmet } from "react-helmet";

class EventPage extends React.Component {
	componentDidMount() {
		window.scrollTo(0, 0);
	}
	render() {
		return (
			<div className="EventPage">
				<Helmet>
					<title>Our Exciting Events! | CSCult</title>
					<meta
						name="title"
						content="Our Exciting Events! | CSCult"
					/>
					<meta
						name="description"
						content="We at CSCult bring you events that NO ONE brings. We focus on quality of events, not quantity of events. Our events are short-spanned, well-planned and interactive!"
					/>
					{/* <!-- Open Graph / Facebook --> */}
					<meta property="og:type" content="website" />
					<meta property="og:url" content="https://cscult.in" />
					<meta
						property="og:title"
						content="Our Exciting Events! | CSCult"
					/>
					<meta
						property="og:description"
						content="We at CSCult bring you events that NO ONE brings. We focus on quality of events, not quantity of events. Our events are short-spanned, well-planned and interactive!"
					/>
					<meta
						property="og:image"
						content="https://media.discordapp.net/attachments/923793151477563422/937936822078701608/Space_Club_LinkedIn_Event_Poster.png"
					/>
				</Helmet>
				<DomainNavigation />
				<h1>Our Exciting Events !</h1>
				<div className="latest-event">
					<img
						src="https://cdn.discordapp.com/attachments/923793151477563422/937936822078701608/Space_Club_LinkedIn_Event_Poster.png"
						className="latest-img"
						alt=""
					/>
					<div
						id="latest-event-details"
						className="row latest-content"
					>
						<div className="col-lg-5 latest-sub-content">
							<p>
								✨ Civilization is like a thin layer of ice on a
								deep ocean of opportunities✨
							</p>
							<p>
								And if you wish to explore that ocean, we at 🛰️
								CSCult's Space Club have something for you
							</p>
							<p className="event-name">
								💫 Scales of Civilization💫
							</p>
							<p>
								Transcending from a type 0 to a type 1
								civilization{" "}
							</p>
							<p>
								A session on the future of spaceflight and
								becoming a multiplanetary species 🇲🇭
							</p>
						</div>
						<div className="col-lg-5 latest-join-content">
							<h4>JOIN US !</h4>
							<br />
							<p>
								🗓️ Date : 5 February 2022 <br />⏰ Time : 11:00
								AM <br />
								📍Venue : Zoom
							</p>
							<button className="btn btn-danger btn-lg btn-outline-light">Event Completed</button>
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
