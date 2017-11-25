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
					<NavLink className="navbar-item" activeClassName="is-active" to="/help"     >Help</NavLink>
				</div>
			</div>
		</nav>
	</div>
);

export default Header;
