import React from "react";
import ImageSourse from "../assets/images/hero.webp";
import LogoSourse from "../assets/images/trelloLogo.jfif";

export const Header = () => {
	return (
		<div className="header">
			<div className="navbar-menu" href="home">
				<div className="navbar-logo">
					<a href="#">
						<img
							className="navbar-logo-shape"
							src={LogoSourse}
						></img>
						<span className="navbar-logo-text">Trello</span>
					</a>
				</div>
				<div className="logIn-signUp">
					<a id="logIn" href="https://trello.com/login">
						Log in
					</a>
					<a className="button" href="https://trello.com/signup">
						Sign up
					</a>
				</div>
			</div>
			<div className="main-content">
				<div className="description">
					<h1>Trello helps teams move work forward.</h1>
					<p>
						Collaborate, manage projects, and reach new productivity
						peaks. From high rises to the home office, the way your
						team works is unique—accomplish it all with Trello.
					</p>
					<form action="https://trello.com/signup">
						<input type="email" placeholder="Email"></input>
						<button className="button" type="submit">
							Sign up - it’s free
						</button>
					</form>
				</div>
				<img src={ImageSourse} />
			</div>
		</div>
	);
};
