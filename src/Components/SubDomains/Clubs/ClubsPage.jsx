import React from "react";
import "./ClubsPage.css";
import DomainNavigation from '../DomainNavigation/DomainNavigation';
import Footer from '../../Landing/Footer/Footer';

class ClubsPage extends React.Component {
	componentDidMount() {
		document.title = "Join our Dasha-Clubs today!";
        window.scrollTo(0, 0);
	}
	render() {
		return (
			<main>
				<DomainNavigation/>
				<section id="club-page">
					<h1>Join Our Clubs!</h1>

					<div class="row">
						<div class="col-lg-8 content1">
							<h3>Code Club</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Perferendis velit in,
								architecto excepturivoluptas.
							</p>
							<p>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Ipsum voluptas numquam
								voluptate quibusdam aspernatur laborum nam,
								recusandae animi. Eaque.
							</p>
							<p>
								Lorem, ipsum dolor sit amet consectetur
								adipisicing elit. Natus, unde libero blanditiis
								ratione minus voluptate facilis eius
								accusantium! .
							</p>
							<a
								target="_blank"
								href="https://discord.gg/k5pf4erckV"
							>
								<button class="btn btn-light btn-outline-dark">
									Join Code Club
								</button>
							</a>
						</div>
						<div class="col-lg-3">
							<a
								target="_blank"
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
								target="_blank"
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
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Perferendis velit in,
								architecto excepturivoluptas.
							</p>
							<p>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Ipsum voluptas numquam
								voluptate quibusdam aspernatur laborum nam,
								recusandae animi. Eaque.
							</p>
							<p>
								Lorem, ipsum dolor sit amet consectetur
								adipisicing elit. Natus, unde libero blanditiis
								ratione minus voluptate facilis eius
								accusantium! .
							</p>
							<a
								target="_blank"
								href="https://discord.gg/k5pf4erckV"
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
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Perferendis velit in,
								architecto excepturivoluptas.
							</p>
							<p>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Ipsum voluptas numquam
								voluptate quibusdam aspernatur laborum nam,
								recusandae animi. Eaque.
							</p>
							<p>
								Lorem, ipsum dolor sit amet consectetur
								adipisicing elit. Natus, unde libero blanditiis
								ratione minus voluptate facilis eius
								accusantium! .
							</p>
							<a
								target="_blank"
								href="https://discord.gg/k5pf4erckV"
							>
								<button class="btn btn-light btn-outline-dark">
									Join Design Club
								</button>
							</a>
						</div>
						<div class="col-lg-3">
							<a
								target="_blank"
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
								target="_blank"
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
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Perferendis velit in,
								architecto excepturivoluptas.
							</p>
							<p>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Ipsum voluptas numquam
								voluptate quibusdam aspernatur laborum nam,
								recusandae animi. Eaque.
							</p>
							<p>
								Lorem, ipsum dolor sit amet consectetur
								adipisicing elit. Natus, unde libero blanditiis
								ratione minus voluptate facilis eius
								accusantium! .
							</p>
							<a
								target="_blank"
								href="https://discord.gg/k5pf4erckV"
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
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Perferendis velit in,
								architecto excepturivoluptas.
							</p>
							<p>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Ipsum voluptas numquam
								voluptate quibusdam aspernatur laborum nam,
								recusandae animi. Eaque.
							</p>
							<p>
								Lorem, ipsum dolor sit amet consectetur
								adipisicing elit. Natus, unde libero blanditiis
								ratione minus voluptate facilis eius
								accusantium! .
							</p>
							<a
								target="_blank"
								href="https://discord.gg/k5pf4erckV"
							>
								<button class="btn btn-light btn-outline-dark">
									Join Crypto Club
								</button>
							</a>
						</div>
						<div class="col-lg-3">
							<a
								target="_blank"
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
								target="_blank"
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
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Perferendis velit in,
								architecto excepturivoluptas.
							</p>
							<p>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Ipsum voluptas numquam
								voluptate quibusdam aspernatur laborum nam,
								recusandae animi. Eaque.
							</p>
							<p>
								Lorem, ipsum dolor sit amet consectetur
								adipisicing elit. Natus, unde libero blanditiis
								ratione minus voluptate facilis eius
								accusantium! .
							</p>
							<a
								target="_blank"
								href="https://discord.gg/k5pf4erckV"
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
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Perferendis velit in,
								architecto excepturivoluptas.
							</p>
							<p>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Ipsum voluptas numquam
								voluptate quibusdam aspernatur laborum nam,
								recusandae animi. Eaque.
							</p>
							<p>
								Lorem, ipsum dolor sit amet consectetur
								adipisicing elit. Natus, unde libero blanditiis
								ratione minus voluptate facilis eius
								accusantium! .
							</p>
							<a
								target="_blank"
								href="https://discord.gg/k5pf4erckV"
							>
								<button class="btn btn-light btn-outline-dark">
									Join Book Club
								</button>
							</a>
						</div>
						<div class="col-lg-3">
							<a
								target="_blank"
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
								target="_blank"
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
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Perferendis velit in,
								architecto excepturivoluptas.
							</p>
							<p>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Ipsum voluptas numquam
								voluptate quibusdam aspernatur laborum nam,
								recusandae animi. Eaque.
							</p>
							<p>
								Lorem, ipsum dolor sit amet consectetur
								adipisicing elit. Natus, unde libero blanditiis
								ratione minus voluptate facilis eius
								accusantium! .
							</p>
							<a
								target="_blank"
								href="https://discord.gg/k5pf4erckV"
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
							<h3>RND Club</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Perferendis velit in,
								architecto excepturivoluptas.
							</p>
							<p>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Ipsum voluptas numquam
								voluptate quibusdam aspernatur laborum nam,
								recusandae animi. Eaque.
							</p>
							<p>
								Lorem, ipsum dolor sit amet consectetur
								adipisicing elit. Natus, unde libero blanditiis
								ratione minus voluptate facilis eius
								accusantium! .
							</p>
							<a
								target="_blank"
								href="https://discord.gg/k5pf4erckV"
							>
								<button class="btn btn-light btn-outline-dark">
									Join RND Club
								</button>
							</a>
						</div>
						<div class="col-lg-3">
							<a
								target="_blank"
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
								target="_blank"
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
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Perferendis velit in,
								architecto excepturivoluptas.
							</p>
							<p>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Ipsum voluptas numquam
								voluptate quibusdam aspernatur laborum nam,
								recusandae animi. Eaque.
							</p>
							<p>
								Lorem, ipsum dolor sit amet consectetur
								adipisicing elit. Natus, unde libero blanditiis
								ratione minus voluptate facilis eius
								accusantium! .
							</p>
							<a
								target="_blank"
								href="https://discord.gg/k5pf4erckV"
							>
								<button class="btn btn-light btn-outline-dark">
									Join Engg Club
								</button>
							</a>
						</div>
					</div>
				</section>
				<Footer/>
			</main>
		);
	}
}

export default ClubsPage;