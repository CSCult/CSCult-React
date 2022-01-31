import React from "react";
import DomainNavigation from "../DomainNavigation/DomainNavigation";
import Footer from "../../Landing/Footer/Footer";
import "./Team.css";

import email from "../../../img/social/email.svg";
import instagram from "../../../img/social/instagram.svg";
import linkedin from "../../../img/social/linkedin.svg";
import twitter from "../../../img/social/twitter.svg";

class Team extends React.Component {
	componentDidMount() {
		window.scrollTo(0, 0);
		document.title = "The Dream Team";
	}
	render() {
		return (
			<main>
				<DomainNavigation />
				<section id="team">
					<div>
						<h1>The team that makes it all possible!</h1>
					</div>
					<div className="row">
						<div className="col-lg-3 team-member">
							<img
								className="member-img"
								src="https://cdn.discordapp.com/attachments/877930443473846324/896782539140784148/mirrself.png"
								alt=""
							/>
							<h2>Saud Hashmi</h2>
							<h3>Founder & CEO</h3>
							<ul>
								<li>
									<a
										target="_blank"
										rel="noreferrer"
										href="mail:hashmisaud10@gmail.com"
									>
										<img
											className="social-icon"
											src={email}
											alt=""
										/>
									</a>
								</li>
								<li>
									<a
										target="_blank"
										rel="noreferrer"
										href="https://instagram.com/better.call.saud"
									>
										<img
											className="social-icon"
											src={instagram}
											alt=""
										/>
									</a>
								</li>
								<li>
									<a
										target="_blank"
										rel="noreferrer"
										href="https://linkedin.com/in/saud-hashmi"
									>
										<img
											className="social-icon"
											src={linkedin}
											alt=""
										/>
									</a>
								</li>
								<li>
									<a
										target="_blank"
										rel="noreferrer"
										href="https://twitter.com/Hash_Saud"
									>
										<img
											className="social-icon"
											src={twitter}
											alt=""
										/>
									</a>
								</li>
								{/* <li><a target="_blank" rel='noreferrer' href="https://github.com/SuperbSaud"><i className="fab fa-github fa-lg"></i></a></li> */}
							</ul>
						</div>
						<div className="col-lg-3 team-member">
							<img
								className="member-img"
								src="https://cdn.discordapp.com/attachments/877930443473846324/896782338405589012/29db847e-ada1-4f81-829c-f50295bddd11.png"
								alt=""
							/>
							<h2>Purna Jain</h2>
							<h3>MBA Lead</h3>
							<ul>
								<li>
									<a
										target="_blank"
										rel="noreferrer"
										href="mail:purnajain1977@gmail.com"
									>
										<img
											className="social-icon"
											src={email}
											alt=""
										/>
									</a>
								</li>
								<li>
									<a
										target="_blank"
										rel="noreferrer"
										href="https://instagram.com/purnaajain"
									>
										<img
											className="social-icon"
											src={instagram}
											alt=""
										/>
									</a>
								</li>
								<li>
									<a
										target="_blank"
										rel="noreferrer"
										href="https://linkedin.com/in/purna-jain-6987a0179"
									>
										<img
											className="social-icon"
											src={linkedin}
											alt=""
										/>
									</a>
								</li>
								{/* <li><a href=""><img className="social-icon" src={twitter} alt="" /></a></li>
                    <li><a href=""><i className="fab fa-github fa-lg"></i></a></li> */}
							</ul>
						</div>
						<div className="col-lg-3 team-member">
							<img
								className="member-img"
								src="https://cdn.discordapp.com/attachments/877930443473846324/918399450093854770/1611720940962.png"
								alt=""
							/>
							<h2>Ananya Lathi</h2>
							<h3>Podcast Lead</h3>
							<ul>
								<li>
									<a
										target="_blank"
										rel="noreferrer"
										href="mail:ananyalathi@gmail.com"
									>
										<img
											className="social-icon"
											src={email}
											alt=""
										/>
									</a>
								</li>
								<li>
									<a
										target="_blank"
										rel="noreferrer"
										href="https://instagram.com/ananyalathi19"
									>
										<img
											className="social-icon"
											src={instagram}
											alt=""
										/>
									</a>
								</li>
								<li>
									<a
										target="_blank"
										rel="noreferrer"
										href="https://www.linkedin.com/in/ananya-lathi-826778b3"
									>
										<img
											className="social-icon"
											src={linkedin}
											alt=""
										/>
									</a>
								</li>
								{/* <li><a href=""><img className="social-icon" src={twitter} alt="" /></a></li>
                    <li><a href=""><i className="fab fa-github fa-lg"></i></a></li> */}
							</ul>
						</div>
						<div className="col-lg-3 team-member">
							<img
								className="member-img"
								src="https://cdn.discordapp.com/attachments/861992095504924713/896777251549491232/Sujal_Samai.jpg"
								alt=""
							/>
							<h2>Sujal Samai</h2>
							<h3>Operations Lead</h3>
							<ul>
								<li>
									<a
										target="_blank"
										rel="noreferrer"
										href="mail:sujalsamai123@gmail.com"
									>
										<img
											className="social-icon"
											src={email}
											alt=""
										/>
									</a>
								</li>
								<li>
									<a
										target="_blank"
										rel="noreferrer"
										href="https://instagram.com/sujalsamai"
									>
										<img
											className="social-icon"
											src={instagram}
											alt=""
										/>
									</a>
								</li>
								<li>
									<a
										target="_blank"
										rel="noreferrer"
										href="https://linkedin.com/in/sujal-samai"
									>
										<img
											className="social-icon"
											src={linkedin}
											alt=""
										/>
									</a>
								</li>
								<li>
									<a
										target="_blank"
										rel="noreferrer"
										href="https://twitter.com/SujalSamai"
									>
										<img
											className="social-icon"
											src={twitter}
											alt=""
										/>
									</a>
								</li>
								{/* <li><a target="_blank" rel='noreferrer' href="https://github.com/SujalSamai"><i className="fab fa-github fa-lg"></i></a></li> */}
							</ul>
						</div>
					</div>

					<div className="row">
						<div className="col-lg-3 team-member">
							<img
								className="member-img"
								src="https://cdn.discordapp.com/attachments/877930443473846324/896808766736068608/39c44421-6ffe-4bce-9b69-c5a18ebf3e3c.png"
								alt=""
							/>
							<h2>Jaya Garg</h2>
							<h3>MBA Team</h3>
							<ul>
								<li>
									<a
										target="_blank"
										rel="noreferrer"
										href="mail:jayagarg310@gmail.com"
									>
										<img
											className="social-icon"
											src={email}
											alt=""
										/>
									</a>
								</li>
								<li>
									<a
										target="_blank"
										rel="noreferrer"
										href="https://instagram.com/jaya_garg"
									>
										<img
											className="social-icon"
											src={instagram}
											alt=""
										/>
									</a>
								</li>
								<li>
									<a
										target="_blank"
										rel="noreferrer"
										href="https://linkedin.com/in/jaya-garg-baa9501a0"
									>
										<img
											className="social-icon"
											src={linkedin}
											alt=""
										/>
									</a>
								</li>
								{/* <li><a href=""><img className="social-icon" src={twitter} alt="" /></a></li>
                    <li><a href=""><i className="fab fa-github fa-lg"></i></a></li> */}
							</ul>
						</div>
						<div className="col-lg-3 team-member">
							<img
								className="member-img"
								src="https://cdn.discordapp.com/attachments/877930443473846324/896782373117628436/362a04ba-3be1-4156-b0f6-33057fec21e4.png"
								alt=""
							/>
							<h2>Sandeep Sharma</h2>
							<h3>MBA Team</h3>
							<ul>
								<li>
									<a
										target="_blank"
										rel="noreferrer"
										href="mail:s16092000@gmail.com"
									>
										<img
											className="social-icon"
											src={email}
											alt=""
										/>
									</a>
								</li>
								<li>
									<a
										target="_blank"
										rel="noreferrer"
										href="https://instagram.com/lifeofsandeeps"
									>
										<img
											className="social-icon"
											src={instagram}
											alt=""
										/>
									</a>
								</li>
								<li>
									<a
										target="_blank"
										rel="noreferrer"
										href="https://linkedin.com/in/lifeofsandeeps"
									>
										<img
											className="social-icon"
											src={linkedin}
											alt=""
										/>
									</a>
								</li>
								<li>
									<a
										target="_blank"
										rel="noreferrer"
										href="https://twitter.com/lifeofsandeeps"
									>
										<img
											className="social-icon"
											src={twitter}
											alt=""
										/>
									</a>
								</li>
								{/* <li><a href=""><i className="fab fa-github fa-lg"></i></a></li> */}
							</ul>
						</div>
						<div className="col-lg-3 team-member">
							<img
								className="member-img"
								src="https://cdn.discordapp.com/attachments/877930443473846324/918399482381623316/1619958982808.png"
								alt=""
							/>
							<h2>Manan Soni</h2>
							<h3>Podcast Team</h3>
							<ul>
								<li>
									<a
										target="_blank"
										rel="noreferrer"
										href="mail:manansoni.soni77@gmail.com"
									>
										<img
											className="social-icon"
											src={email}
											alt=""
										/>
									</a>
								</li>
								<li>
									<a
										target="_blank"
										rel="noreferrer"
										href="https://instagram.com/manan.soni01"
									>
										<img
											className="social-icon"
											src={instagram}
											alt=""
										/>
									</a>
								</li>
								<li>
									<a
										target="_blank"
										rel="noreferrer"
										href="https://linkedin.com/in/manansoni77"
									>
										<img
											className="social-icon"
											src={linkedin}
											alt=""
										/>
									</a>
								</li>
								{/* <li><a href=""><img className="social-icon" src={twitter} alt="" /></a></li>
                    <li><a href="https://github.com/manansoni77"><i className="fab fa-github fa-lg"></i></a></li> */}
							</ul>
						</div>
						<div className="col-lg-3 team-member">
							<img
								className="member-img"
								src="https://cdn.discordapp.com/attachments/877930443473846324/901738296915398706/240702570_1265208573940408_7121647706504007991_n.png"
								alt=""
							/>
							<h2>Abhilasha Jairath</h2>
							<h3>Podcast Team</h3>
							<ul>
								<li>
									<a
										target="_blank"
										rel="noreferrer"
										href="mail:abhilashajairath7@gmail.com"
									>
										<img
											className="social-icon"
											src={email}
											alt=""
										/>
									</a>
								</li>
								<li>
									<a
										target="_blank"
										rel="noreferrer"
										href="https://instagram.com/abhilasha__jairath"
									>
										<img
											className="social-icon"
											src={instagram}
											alt=""
										/>
									</a>
								</li>
								<li>
									<a
										target="_blank"
										rel="noreferrer"
										href="https://linkedin.com/in/abhilasha-jairath"
									>
										<img
											className="social-icon"
											src={linkedin}
											alt=""
										/>
									</a>
								</li>
								<li>
									<a
										target="_blank"
										rel="noreferrer"
										href="https://twitter.com/Abhi_Jairath"
									>
										<img
											className="social-icon"
											src={twitter}
											alt=""
										/>
									</a>
								</li>
								{/* <li><a href=""><i className="fab fa-github fa-lg"></i></a></li> */}
							</ul>
						</div>
					</div>

					<div className="row">
						<div className="col-lg-3 team-member">
							<img
								className="member-img"
								src="https://media.discordapp.net/attachments/877930443473846324/917375966328815636/muskan.jpg"
								alt=""
							/>
							<h2>Muskan Jain</h2>
							<h3>Content Creator</h3>
							<ul>
								<li>
									<a
										target="_blank"
										rel="noreferrer"
										href="mail:muskanjain2113@gmail.com"
									>
										<img
											className="social-icon"
											src={email}
											alt=""
										/>
									</a>
								</li>
								<li>
									<a
										target="_blank"
										rel="noreferrer"
										href="https://instagram.com/muss2113"
									>
										<img
											className="social-icon"
											src={instagram}
											alt=""
										/>
									</a>
								</li>
								<li>
									<a
										target="_blank"
										rel="noreferrer"
										href="https://linkedin.com/in/muskan-jain-a6753a141"
									>
										<img
											className="social-icon"
											src={linkedin}
											alt=""
										/>
									</a>
								</li>
								{/* <li><a href=""><img className="social-icon" src={twitter} alt="" /></a></li>
                    <li><a href=""><i className="fab fa-github fa-lg"></i></a></li> */}
							</ul>
						</div>
						<div className="col-lg-3 team-member">
							<img
								className="member-img"
								src="https://media.discordapp.net/attachments/877930443473846324/917377851005730847/poorva.png"
								alt=""
							/>
							<h2>Poorva Jain</h2>
							<h3>Graphic Designer</h3>
							<ul>
								<li>
									<a
										target="_blank"
										rel="noreferrer"
										href="mail:poorvajain1208@gmail.com"
									>
										<img
											className="social-icon"
											src={email}
											alt=""
										/>
									</a>
								</li>
								<li>
									<a
										target="_blank"
										rel="noreferrer"
										href="https://instagram.com/poorva_jain1208"
									>
										<img
											className="social-icon"
											src={instagram}
											alt=""
										/>
									</a>
								</li>
								<li>
									<a
										target="_blank"
										rel="noreferrer"
										href="https://linkedin.com/in/poorvajain1208"
									>
										<img
											className="social-icon"
											src={linkedin}
											alt=""
										/>
									</a>
								</li>
								<li>
									<a
										target="_blank"
										rel="noreferrer"
										href="https://twitter.com/poorva_jain1208"
									>
										<img
											className="social-icon"
											src={twitter}
											alt=""
										/>
									</a>
								</li>
								{/* <li><a href=""><i className="fab fa-github fa-lg"></i></a></li> */}
							</ul>
						</div>
						<div className="col-lg-3 team-member">
							<img
								className="member-img"
								src="https://cdn.discordapp.com/attachments/879347528368287775/896777113120702534/ME.jpg"
								alt=""
							/>
							<h2>Shreytam Goyal</h2>
							<h3>UI Designer</h3>
							<ul>
								<li>
									<a
										target="_blank"
										rel="noreferrer"
										href="mail:shreytamgoyal@gmail.com"
									>
										<img
											className="social-icon"
											src={email}
											alt=""
										/>
									</a>
								</li>
								<li>
									<a
										target="_blank"
										rel="noreferrer"
										href="https://instagram.com/shreytamgoyall"
									>
										<img
											className="social-icon"
											src={instagram}
											alt=""
										/>
									</a>
								</li>
								<li>
									<a
										target="_blank"
										rel="noreferrer"
										href="https://linkedin.com/in/shreytam-goyal-19595b227"
									>
										<img
											className="social-icon"
											src={linkedin}
											alt=""
										/>
									</a>
								</li>
								{/* <li><a href=""><img className="social-icon" src={twitter} alt="" /></a></li>
                    <li><a href=""><i className="fab fa-github fa-lg"></i></a></li>  */}
							</ul>
						</div>
						<div className="col-lg-3 team-member">
							<img
								className="member-img"
								src="https://cdn.discordapp.com/attachments/877930443473846324/918398545403469864/ce7cb7e3-e96e-4cd7-8857-30577516a508.png"
								alt=""
							/>
							<h2>Mradul Gupta</h2>
							<h3>Web Developer</h3>
							<ul>
								<li>
									<a
										target="_blank"
										rel="noreferrer"
										href="mail:mradul.gpt1@gmail.com"
									>
										<img
											className="social-icon"
											src={email}
											alt=""
										/>
									</a>
								</li>
								<li>
									<a
										target="_blank"
										rel="noreferrer"
										href="https://www.instagram.com/mradul_gupta_/"
									>
										<img
											className="social-icon"
											src={instagram}
											alt=""
										/>
									</a>
								</li>
								<li>
									<a
										target="_blank"
										rel="noreferrer"
										href="https://www.linkedin.com/in/mradul-gupta-b5b33221b/"
									>
										<img
											className="social-icon"
											src={linkedin}
											alt=""
										/>
									</a>
								</li>
								<li>
									<a
										target="_blank"
										rel="noreferrer"
										href="https://twitter.com/_Mradul_Gupta"
									>
										<img
											className="social-icon"
											src={twitter}
											alt=""
										/>
									</a>
								</li>
								{/* <li><a target="_blank" rel='noreferrer' href="https://github.com/mradul-gpt"><i className="fab fa-github fa-lg"></i></a></li> */}
							</ul>
						</div>
					</div>
				</section>
				<Footer />
			</main>
		);
	}
}

export default Team;
