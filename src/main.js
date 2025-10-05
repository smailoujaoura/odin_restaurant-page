import "./styles.css"
import { homeView, menuView, aboutView } from "./views.js"

const GITHUB_BASE = "/odin_restaurant-page";

const viewsDiv = document.querySelector(".views");

function render(view, path = "/") {
	viewsDiv.innerHTML = view;
	history.pushState({ path }, "", BASE + path);

	viewsDiv.querySelector(".gohome").addEventListener("click", () => render(homeView, "/"));

	viewsDiv.querySelector(".gomenu").addEventListener("click", () => render(menuView, "/menu"));
	
	viewsDiv.querySelector(".goabout").addEventListener("click", () => render(aboutView, "/about"));
}

window.addEventListener("popstate", (e) => {
	if (!e.state)
		return;
	switch (e.state.path) {
		case "/": render(homeView, "/"); break;
		case "/home": render(homeView, "/home"); break;
		case "/about": render(aboutView, "/about"); break;
	}
});

document.addEventListener("DOMContentLoaded", () => {
	render(homeView, "/");
});

