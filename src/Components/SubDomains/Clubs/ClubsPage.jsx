import React from "react";
import "./ClubsPage.css";
import DomainNavigation from "../DomainNavigation/DomainNavigation";
import Footer from "../../Landing/Footer/Footer";

class ClubsPage extends React.Component {
	componentDidMount() {
		document.title = "Join our Dasha-Clubs today!";
		window.scrollTo(0, 0);
	}
	render() {
		return (
			<main>
				<DomainNavigation />
				<section id="club-page">
					<h1>Join Our Clubs!</h1>

					<div class="row">
						<div class="col-lg-8 content1">
							<h3>Code Club</h3>
							<p>
								This club is more about getting like-minded
								students together to talk about and perhaps work
								on exciting coding projects together. We have
								generalized our club into 4 major coding
								domains:{" "}
								<b>
									Data and AI, Scripting, Development and
									Competitive Programming.
								</b>
							</p>
							<a
								target="_blank" rel='noreferrer'
								href="https://chat.whatsapp.com/FdJZLJoKwAk9KHvw1Tfuma"
							>
								<button class="btn btn-light btn-outline-dark">
									Join Code Club
								</button>
							</a>
						</div>
						<div class="col-lg-3">
							<a
								target="_blank" rel='noreferrer'
								href="https://discord.gg/k5pf4erckV"
							>
								<img
									src="https://media.discordapp.net/attachments/923793151477563422/923794426659237939/9.png"
									alt=""
								/>
							</a>
						</div>
					</div>

					<div class="row">
						<div class="col-lg-3">
							<a
								target="_blank" rel='noreferrer'
								href="https://discord.gg/k5pf4erckV"
							>
								<img
									src="https://cdn.discordapp.com/attachments/923793151477563422/923794425468026900/3.png"
									alt=""
								/>
							</a>
						</div>
						<div class="col-lg-8 content2">
							<h3>Finance Club</h3>
							<p>
								The objective of the club is to educate the
								participants about modern day finance, the stock
								market, corporate finance, money, fintech and
								the role of financial institutions. Ka-ching 🤑
								!
							</p>
							<a
								target="_blank" rel='noreferrer'
								href="https://chat.whatsapp.com/Lrl47Bss2AU5pJo7GCJP4j"
							>
								<button class="btn btn-light btn-outline-dark">
									Join Finance Club
								</button>
							</a>
						</div>
					</div>

					<hr />

					<div class="row">
						<div class="col-lg-8 content1">
							<h3>Design Club</h3>
							<p>
								Design Club is on a mission to get people
								involved in design thinking. Whether it's
								discussing Roman architecture, designing awesome
								UI renders for apps or designing fashion/tech
								products, we got you covered! 👛 👗📱
							</p>
							<a
								target="_blank" rel='noreferrer'
								href="https://chat.whatsapp.com/LF4h9VAAw4YLRHQMQZNPT2"
							>
								<button class="btn btn-light btn-outline-dark">
									Join Design Club
								</button>
							</a>
						</div>
						<div class="col-lg-3">
							<a
								target="_blank" rel='noreferrer'
								href="https://discord.gg/k5pf4erckV"
							>
								<img
									src="https://cdn.discordapp.com/attachments/923793151477563422/923794426160099338/6.png"
									alt=""
								/>
							</a>
						</div>
					</div>

					<div class="row">
						<div class="col-lg-3">
							<a
								target="_blank" rel='noreferrer'
								href="https://discord.gg/k5pf4erckV"
							>
								<img
									src="https://cdn.discordapp.com/attachments/923793151477563422/923794425036017735/2.png"
									alt=""
								/>
							</a>
						</div>
						<div class="col-lg-8 content2">
							<h3>Space Club</h3>
							<p>
								Space is for everybody. Our club is the entity
								devoted to fostering excellence in space
								activities. We also have included channels for
								space science and rocket science. To the Moon!
								🌕 🛸
							</p>
							<a
								target="_blank" rel='noreferrer'
								href="https://chat.whatsapp.com/Jw0wJLV9rgPItPkSB4V0BM"
							>
								<button class="btn btn-light btn-outline-dark">
									Join Space Club
								</button>
							</a>
						</div>
					</div>

					<hr />

					<div class="row">
						<div class="col-lg-8 content1">
							<h3>Crypto Club</h3>
							<p>
								This club aims to develop knowledge about the
								newest topics in the world of blockchain,
								cryptocurrencies, NFTs and the metaverse. 🟧🔗 |
								🐕💠 | 🐵 | 🔮
							</p>
							<a
								target="_blank" rel='noreferrer'
								href="https://chat.whatsapp.com/LlpUblBk1vt0UtRpkp40IU"
							>
								<button class="btn btn-light btn-outline-dark">
									Join Crypto Club
								</button>
							</a>
						</div>
						<div class="col-lg-3">
							<a
								target="_blank" rel='noreferrer'
								href="https://discord.gg/k5pf4erckV"
							>
								<img
									src="https://cdn.discordapp.com/attachments/923793151477563422/923794425719709756/4.png"
									alt=""
								/>
							</a>
						</div>
					</div>

					<div class="row">
						<div class="col-lg-3">
							<a
								target="_blank" rel='noreferrer'
								href="https://discord.gg/k5pf4erckV"
							>
								<img
									src="https://cdn.discordapp.com/attachments/923793151477563422/923794426420166656/7.png"
									alt=""
								/>
							</a>
						</div>
						<div class="col-lg-8 content2">
							<h3>Gaming Club</h3>
							<p>
								The club's purpose is to promote the culture of
								gaming & eSports and explore, play and discuss
								various game genres such as FPS, role-playing
								games or open-world games.
							</p>
							<a
								target="_blank" rel='noreferrer'
								href="https://chat.whatsapp.com/H4hHcIHGm6RFy99jk3LRS0"
							>
								<button class="btn btn-light btn-outline-dark">
									Join Gaming Club
								</button>
							</a>
						</div>
					</div>

					<hr />

					<div class="row">
						<div class="col-lg-8 content1">
							<h3>Book Club</h3>
							<p>
								Books are our true friends just like our club.
								Here you can express your opinions, likes
								dislikes about books and find many more
								bookworms like you 📖. We also do weekly book
								club meetups!
							</p>
							<a
								target="_blank" rel='noreferrer'
								href="https://chat.whatsapp.com/KBYoPsX57YlIhBdU8H9zCC"
							>
								<button class="btn btn-light btn-outline-dark">
									Join Book Club
								</button>
							</a>
						</div>
						<div class="col-lg-3">
							<a
								target="_blank" rel='noreferrer'
								href="https://discord.gg/k5pf4erckV"
							>
								<img
									src="https://cdn.discordapp.com/attachments/923793151477563422/923794425275121664/8.png"
									alt=""
								/>
							</a>
						</div>
					</div>

					<div class="row">
						<div class="col-lg-3">
							<a
								target="_blank" rel='noreferrer'
								href="https://discord.gg/k5pf4erckV"
							>
								<img
									src="https://cdn.discordapp.com/attachments/923793151477563422/923794425929404436/5.png"
									alt=""
								/>
							</a>
						</div>
						<div class="col-lg-8 content2">
							<h3>Bizniz Club</h3>
							<p>
								In this club we will learn all about business,
								marketing, startups, how to raise money, create
								and sell products & services, and manage their
								businesses. It's all about business!
							</p>
							<a
								target="_blank" rel='noreferrer'
								href="https://chat.whatsapp.com/Kf5REHOWFJm039ul3zVQAH"
							>
								<button class="btn btn-light btn-outline-dark">
									Join Bizniz Club
								</button>
							</a>
						</div>
					</div>

					<hr />

					<div class="row">
						<div class="col-lg-8 content1">
							<h3>RnD Club</h3>
							<p>
								This club is all about you tech products nerds!
								Let's discuss Apple, IBM, Intel, Samsung; or
								what's new in the world of Linux 🐧.
							</p>
							<a
								target="_blank" rel='noreferrer'
								href="https://chat.whatsapp.com/I0TRQC3VxUeLJIozvfjUBJ"
							>
								<button class="btn btn-light btn-outline-dark">
									Join RnD Club
								</button>
							</a>
						</div>
						<div class="col-lg-3">
							<a
								target="_blank" rel='noreferrer'
								href="https://discord.gg/k5pf4erckV"
							>
								<img
									src="https://cdn.discordapp.com/attachments/923793151477563422/923794427024138301/10-1.png"
									alt=""
								/>
							</a>
						</div>
					</div>

					<div class="row">
						<div class="col-lg-3">
							<a
								target="_blank" rel='noreferrer'
								href="https://discord.gg/k5pf4erckV"
							>
								<img
									src="https://cdn.discordapp.com/attachments/923793151477563422/923794427254804550/11-1.png"
									alt=""
								/>
							</a>
						</div>
						<div class="col-lg-8 content2">
							<h3>Engg Club</h3>
							<p>
								If you love physics and engineering, this club
								is for you. We got you covered in physics,
								automobiles, electronics, aviation and renewable
								energy. 🍎🏎️ ⚡ ✈️ ☀️
							</p>
							<a
								target="_blank" rel='noreferrer'
								href="https://chat.whatsapp.com/GAHRh6MKi1I35BY2CZCdeN"
							>
								<button class="btn btn-light btn-outline-dark">
									Join Engg Club
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

export default ClubsPage;
