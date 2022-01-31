import React from "react";
import { Link } from "react-router-dom";

import "./Product.css";

function Product() {
	return (
		<div id="product">
			<h2>Products</h2>
			<div className="row">
				<div className="col-lg-4">
					<img
						src="https://cdn.discordapp.com/attachments/923793151477563422/924672001925349427/CSCult_Divs_Programme_Logo.png"
						alt=""
					/>
				</div>
				<div className="col-lg-8 content1">
					<h3>Divs Programme</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco
					</p>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco
					</p>
					<Link to="/products">
						<button className="btn btn-light btn-outline-dark">
							Explore
						</button>
					</Link>
				</div>
			</div>
			<div className="row">
				<div className="col-lg-8 content2">
					<h3>Cult Speaks</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco
					</p>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco
					</p>
					<Link to="/products">
						<button className="btn btn-light btn-outline-dark">
							Explore
						</button>
					</Link>
				</div>
				<div className="col-lg-4">
					<img
						src="https://cdn.discordapp.com/attachments/923793151477563422/924672065754238986/Cult_Speaks.png"
						alt=""
					/>
				</div>
			</div>
		</div>
	);
}

export default Product;
