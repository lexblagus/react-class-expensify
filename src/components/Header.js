import React from 'react';
import {NavLink} from 'react-router-dom'



// Bulma header
document.addEventListener('DOMContentLoaded', function () {
	// Get all "navbar-burger" elements
	var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
	// Check if there are any navbar burgers
	if ($navbarBurgers.length > 0) {
		// Add a click event on each of them
		$navbarBurgers.forEach(function ($el) {
			$el.addEventListener('click', function () {
				// Get the target from the "data-target" attribute
				var target = $el.dataset.target;
				var $target = document.getElementById(target);
				// Toggle the class on both the "navbar-burger" and the "navbar-menu"
				$el.classList.toggle('is-active');
				$target.classList.toggle('is-active');
			});
		});
	}
});




const Header = () => (
	<div className="">
		<nav className="navbar is-dark">
			<div className="navbar-brand has-text-grey-light">
				<NavLink className="navbar-item" activeClassName="is-active" to="/"         exact={true}>Todos</NavLink>
				<NavLink className="navbar-item" activeClassName="is-active" to="/create"   >Create</NavLink>
				<NavLink className="navbar-item" activeClassName="is-active" to="/help"     >Help</NavLink>
				<div className="navbar-burger burger" data-target="navMainMenu">
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>
			<div id="navMainMenu" className="navbar-menu">
				<div className="navbar-start">
					<NavLink className="navbar-item" activeClassName="is-active" to="/404"      >Not found</NavLink>
					<NavLink className="navbar-item" activeClassName="is-active" to="/edit/___" >Edit a page</NavLink>
				</div>
				{/*
				<div className="navbar-end">
					<div className="navbar-item">
						<div className="field is-grouped">
							<p className="control">
								<a
									className="bd-tw-button button"
									data-social-network="Twitter"
									data-social-action="tweet"
									data-social-target="http://localhost:4000"
									target="_blank"
									rel="noopener noreferrer"
									href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=http://localhost:4000&amp;via=jgthms"
								>
									<span className="icon">
										<i className="fa fa-twitter"></i>
									</span>
									<span>
										Tweet
									</span>
								</a>
							</p>
							<p className="control">
								<a className="button is-primary" href="https://github.com/jgthms/bulma/archive/0.5.1.zip">
									<span className="icon">
										<i className="fa fa-download"></i>
									</span>
									<span>Download</span>
								</a>
							</p>
						</div>
					</div>
				</div>
				*/}
			</div>
		</nav>


		{/*
		<br/><br/>
		*/}















		{/*
		<nav className="navbar is-dark">
			<div className="container">
				<div className="navbar-brand">
					<h1 className="title is-1 is-text-white">Todos</h1>
					<button className="button navbar-burger is-primary is-small">≡</button>
				</div>

				<div className="navbar-menu">
					<div className="navbar-start">
						<a className="navbar-item" href="https://bulma.io/expo/">
							Item
						</a>
					</div>

					<div className="navbar-end">
						<a className="navbar-item" href="https://bulma.io/expo/">
							Item
						</a>
					</div>
				</div>
			</div>
		</nav>
		<br/><br/>
		*/}
		
		
		{/*
		<div className="hero is-dark">
			<h1 className="title is-1">Expensify</h1>
			<header className="hero is-info">
				<nav className="">
					<NavLink className="menu-item" activeClassName="has-text-grey-darker is-active" to="/"         exact={true}>home</NavLink>
					&nbsp;&nbsp;&nbsp;
					<NavLink className="menu-item" activeClassName="has-text-grey-darker is-active" to="/create"   >create</NavLink>
					&nbsp;&nbsp;&nbsp;
					<NavLink className="menu-item" activeClassName="has-text-grey-darker is-active" to="/help"     >help</NavLink>
					&nbsp;&nbsp;&nbsp;
					&nbsp;&nbsp;&nbsp;
					&nbsp;&nbsp;&nbsp;
					<NavLink className="menu-item" activeClassName="has-text-grey-darker is-active" to="/404"      >404</NavLink>
					&nbsp;&nbsp;&nbsp;
					<NavLink className="menu-item" activeClassName="has-text-grey-darker is-active" to="/edit/___" >edit</NavLink>
				</nav>
			</header>
		</div>
		*/}
	</div>
);

export default Header;
