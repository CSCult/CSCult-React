import React from "react";
import DomainNavigation from "../DomainNavigation/DomainNavigation";
import Footer from "../../Landing/Footer/Footer";
import GreenLogo from "../../../img/logo-green.png";
import CSCultLogo from "../../../img/logo-main.png";
import "./LogoPage.css";

class LogoPage extends React.Component {
	componentDidMount() {
		document.title = "What Our Logo Represents";
		window.scrollTo(0, 0);
	}
	render() {
		return (
			<main>
				<DomainNavigation />
				<section id="logo-page">
					<h1>One Logo , Multiple Meanings</h1>
					<div class="row">
						<div class="col-lg-7 content1">
							<h3>Why the hexagon?</h3>
							<p>
								Hexagon is nature{"’"}s most preferred shape.
								And if you are a Marvel fan, you do know the
								relevance of hexagons in the grandeur of the
								multiverse.
							</p>
							<p>
								We find hexagons in all kinds of places.
								Honeycomb, soap bubbles, cactus, hyperspeed
								portals in the Marvel multiverse. The hexagon is
								the strongest and the best-packed structure in
								all shapes.
							</p>
							<p>
								Our logo represents strength and uniformity. Our
								idea and the team behind it all is strong,
								stable and uniform just like the hexagon.
							</p>
						</div>
						<div class="col-lg-4">
							<img
								src={GreenLogo}
								class="logo1"
								alt=""
							/>
						</div>
					</div>

					<div class="row">
						<div class="col-lg-7 content2">
							<h3>The colors of our logo</h3>
							<p>
								Our logo ranges from blue to pink. The whole
								gradient represents our mainstream community
								platforms, the likes of Twitter, LinkedIn,
								Discord and Instagram.
							</p>
							<p>
								The gradient also represents that our community
								comes in all colors. We accept people of all
								genders and sexualities.
							</p>
							<p>
								And the logo also covers the fact that we accept
								people of all disciplines. Science, technology
								and the other fields, the likes of finance,
								philosophy, arts, et cetera.
							</p>
						</div>
						<div class="col-lg-4">
							<img src={CSCultLogo} class="logo2" alt="" />
						</div>
					</div>
				</section>
				<Footer />
			</main>
		);
	}
}

export default LogoPage;