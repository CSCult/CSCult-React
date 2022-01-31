import React from "react";
import DomainNavigation from "../DomainNavigation/DomainNavigation";
import Footer from "../../Landing/Footer/Footer";
import "./Product.css";

class Product extends React.Component {
	componentDidMount() {
		window.scrollTo(0, 0);
		document.title = "We build consumer-centric products";
	}

	render() {
		return (
			<main>
				<DomainNavigation />
				<section id="product-page">
					<h1>We are building the Future.</h1>
					<div className="row product1">
						<div className="col-lg-4">
							<img
								className="product-img"
								src="https://cdn.discordapp.com/attachments/923793151477563422/924672001925349427/CSCult_Divs_Programme_Logo.png"
								alt=""
							/>
						</div>
						<div className="col-lg-8">
							<h2>Divs Programme</h2>
							<p>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Laboriosam sequi nesciunt
								alias voluptas corrupti atque, veniam officia
								dolor aliquid voluptate numquam earum laborum
								vel placeat ratione esse fugit? Numquam, quidem!
							</p>
							<p>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Voluptatem dolorem nihil
								magnam voluptas sed et rem, eaque, numquam eius,
								at aspernatur doloribus vitae reiciendis non
								expedita voluptate adipisci officia enim.
							</p>
							<a
								target="_blank"
								rel="noreferrer"
								href="https://docs.google.com/forms/d/e/1FAIpQLSeD-tEkDJsI2t3s1Z3NpJxT2ascG5h7jxaLyRpLEQ-XcpfH8g/viewform"
							>
								<button className="btn btn-lg btn-light btn-outline-dark">
									Register Now
								</button>
							</a>
						</div>
					</div>
					<div className="row divs">
						<div className="col-lg-3 col-sm-6">
							<img
								className="div-img"
								src="https://cdn.discordapp.com/attachments/923793151477563422/926719648848838696/mi.png"
								alt=""
							/>
							<h3>Mission Improbable</h3>
							<h4>Data Science</h4>
						</div>
						<div className="col-lg-3 col-sm-6">
							<img
								className="div-img"
								src="https://cdn.discordapp.com/attachments/923793151477563422/926719648223875102/game_of_clones.png"
								alt=""
							/>
							<h3>Game of Clones</h3>
							<h4>Web Development</h4>
						</div>
						<div className="col-lg-3 col-sm-6">
							<img
								className="div-img"
								src="https://cdn.discordapp.com/attachments/923793151477563422/926719648022540288/django.png"
								alt=""
							/>
							<h3>django Blockchained</h3>
							<h4>Blockchain Development</h4>
						</div>
						<div className="col-lg-3 col-sm-6">
							<img
								className="div-img"
								src="https://cdn.discordapp.com/attachments/923793151477563422/926719649138241586/pott.png"
								alt=""
							/>
							<h3>Pirates of the Trojan</h3>
							<h4>Cybersecurity</h4>
						</div>
					</div>
					<div className="row divs">
						<div className="col-lg-3 col-sm-6">
							<img
								className="div-img"
								src="https://cdn.discordapp.com/attachments/923793151477563422/926719648500678746/lorp.png"
								alt=""
							/>
							<h3>Life of Raspberry Pi</h3>
							<h4>Internet of Things</h4>
						</div>
						<div className="col-lg-3 col-sm-6">
							<img
								className="div-img"
								src="https://cdn.discordapp.com/attachments/923793151477563422/926719649326968842/squad_game.png"
								alt=""
							/>
							<h3>Squad Game</h3>
							<h4>Game Development</h4>
						</div>
						<div className="col-lg-3 col-sm-6">
							<img
								className="div-img"
								src="https://cdn.discordapp.com/attachments/923793151477563422/926719649557647381/tbbt.png"
								alt=""
							/>
							<h3>The Big Beta Theory</h3>
							<h4>Mobile Development</h4>
						</div>
						<div className="col-lg-3 col-sm-6">
							<img
								className="div-img"
								src="https://cdn.discordapp.com/attachments/923793151477563422/926719649771552838/tdwf.png"
								alt=""
							/>
							<h3>Devil Wears Figma</h3>
							<h4>UI/UX Design</h4>
						</div>
					</div>

					<hr />

					<div className="row product2">
						<div className="col-lg-4">
							<img
								className="product-img"
								src="https://cdn.discordapp.com/attachments/923793151477563422/924672065754238986/Cult_Speaks.png"
								alt=""
							/>
						</div>
						<div className="col-lg-8">
							<h2>Cult Speaks</h2>
							<p>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Laboriosam sequi nesciunt
								alias voluptas corrupti atque, veniam officia
								dolor aliquid voluptate numquam earum laborum
								vel placeat ratione esse fugit? Numquam, quidem!
							</p>
							<p>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Voluptatem dolorem nihil
								magnam voluptas sed et rem, eaque, numquam eius,
								at aspernatur doloribus vitae reiciendis non
								expedita voluptate adipisci officia enim.
							</p>
							<a
								target="_blank"
								rel="noreferrer"
								href="https://open.spotify.com/show/7cPdUTgXDhYvM26YrM3QV2"
							>
								<button className="btn btn-lg btn-light btn-outline-dark">
									Explore Now
								</button>
							</a>
						</div>
					</div>
				</section>
				<Footer />
			</main>
		);
	}
}

export default Product;
