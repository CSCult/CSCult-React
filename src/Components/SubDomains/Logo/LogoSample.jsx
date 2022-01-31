import DomainNavigation from "../DomainNavigation/DomainNavigation";
import Footer from "../../Landing/Footer/Footer";
import "./LogoSample.css";

import HoneycombVideo from "../../../../src/Videos/honeycomb.mp4";
import MultiverseVideo from "../../../../src/Videos/multiverse.mp4";
import BubblesVideo from "../../../../src/Videos/bubbles.mp4";

export default function LogoSample() {
	return (
		<main>
			<DomainNavigation />
			<div id="video">
				<video src={HoneycombVideo} autoPlay muted loop />
				<div id="overlay">
					<h1>Honeycomb</h1>
				</div>
			</div>
			<div id="video">
				<video src={MultiverseVideo} autoPlay muted loop />
				<div id="overlay">
					<h1>Portals</h1>
				</div>
			</div>
            <div id="video">
				<video src={BubblesVideo} autoPlay muted loop />
				<div id="overlay">
					<h1>Bubbles</h1>
				</div>
			</div>
			<Footer/>
		</main>
	);
}
