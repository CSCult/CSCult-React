import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import DiscordComponent from "./Components/DiscordComponent";

import Navigation from "./Components/Landing/Navigation/Navigation";
import Title from "./Components/Landing/Title/Title";
import About from "./Components/Landing/About/About";
import Community from "./Components/Landing/Community/Community";
import Event from "./Components/Landing/Event/Event";
import Product from "./Components/Landing/Product/Product";
import Footer from "./Components/Landing/Footer/Footer";

import ProductPage from "./Components/SubDomains/Product/ProductPage";
import TeamPage from "./Components/SubDomains/Team/TeamPage";
import ClubsPage from "./Components/SubDomains/Clubs/ClubsPage";
import LogoPage from "./Components/SubDomains/Logo/LogoPage";
import LogoSample from "./Components/SubDomains/Logo/LogoSample";
import EventPage from "./Components/SubDomains/Event/EventPage";

let MainEmbedURL = "https://media.discordapp.net/attachments/923793151477563422/938387671804432394/embed-main.png";

function Popup() {
	return (
		<Link to="/events">
			<button className="btn btn-lg btn-success btn-outline-light Popup">
				<div>
					<h1>
						<span>🚀</span>UPCOMING EVENT !
					</h1>
					<p>Learn More</p>
				</div>
			</button>
		</Link>
	);
}

class Main extends React.Component {
	componentDidMount() {
		window.scrollTo(0, 0);
	}

	render() {
		return (
			<div className="app">
				<Helmet>
					<title>
						CSCult - We are building Indore's largest Internet
						community!
					</title>
					<meta
						name="keywords"
						content="cscult, cscult community, saud hashmi, cs cult, cs-cult, indore's largest community, indore communities, indore community, edtech startup, indore edtech, indore startup, gamification"
					/>
					<meta
						name="title"
						content="CSCult - We are building Indore's largest Internet community!"
					/>
					<meta
						name="description"
						content="CSCult is a community of individuals and learners from different backgrounds, who want to spend their time learning, innovating & working on new ideas."
					/>

					<meta property="og:type" content="website" />
					<meta property="og:url" content="https://cscult.in" />
					<meta
						property="og:title"
						content="CSCult - We are building Indore's largest Internet community!"
					/>
					<meta
						property="og:description"
						content="CSCult is a community of individuals and learners from different backgrounds, who want to spend their time learning, innovating & working on new ideas."
					/>
					<meta
						property="og:image"
						itemProp="image"
						content={MainEmbedURL}
					/>

					<meta
						property="twitter:card"
						content="summary_large_image"
					/>
					<meta property="twitter:url" content="https://cscult.in" />
					<meta
						property="twitter:title"
						content="CSCult - We are building Indore's largest Internet community!"
					/>
					<meta
						property="twitter:description"
						content="CSCult is a community of individuals and learners from different backgrounds, who want to spend their time learning, innovating & working on new ideas."
					/>
					<meta
						property="twitter:image"
						itemProp="image"
						content={MainEmbedURL}
					/>
				</Helmet>
				<Navigation />
				<Title />
				<Popup />
				<About />
				<Community />
				<Event />
				<Product />
				<Footer />
			</div>
		);
	}
}

function App() {
	return (
		<Routes>
			<Route path="/" element={<Main />} exact />
			<Route path="/products" element={<ProductPage />} exact />
			<Route path="/team" element={<TeamPage />} exact />
			<Route path="/clubs" element={<ClubsPage />} exact />
			<Route path="/logo" element={<LogoPage />} exact />
			<Route path="/logo2" element={<LogoSample />} exact />
			<Route path="/discord" element={<DiscordComponent />} exact />
			<Route path="/events" element={<EventPage />} exact />
		</Routes>
	);
}

export default App;
