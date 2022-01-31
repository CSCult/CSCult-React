import React from "react";
import { Routes, Route } from "react-router-dom";

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

class Main extends React.Component {
	componentDidMount() {
		window.scrollTo(0, 0);
	}

	render() {
		return (
			<div className="app">
				<Navigation />
				<Title />
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
			<Route path="/logo" element={<LogoPage/>} eaxct />
		</Routes>
	);
}

export default App;
