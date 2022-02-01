import React from "react";
import { Routes, Route, Link } from "react-router-dom";
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
import EventPage from './Components/SubDomains/Event/EventPage';


function Popup(){
	return (
    <Link to="/events">
      <button className="btn btn-lg btn-success btn-outline-light Popup">
        <div>
          <h1><span>🚀</span>UPCOMING EVENT !</h1>
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
			<Route path="/" element={<Main/>} exact />
			<Route path="/products" element={<ProductPage/>} exact />
			<Route path="/team" element={<TeamPage/>} exact />
			<Route path="/clubs" element={<ClubsPage/>} exact />
			<Route path="/logo" element={<LogoPage/>} exact />
			<Route path="/logo2" element={<LogoSample/>} exact />
			<Route path="/discord" element={<DiscordComponent/>} exact />
			<Route path="/events" element={<EventPage/>} exact />
		</Routes>
	);
}

export default App;
