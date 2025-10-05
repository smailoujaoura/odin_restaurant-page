import "./styles.css"
import { homeView, menuView, aboutView } from "./views.js"

const viewsDiv = document.querySelector(".views");

function render(view, path = "/") {
	viewsDiv.innerHTML = view;
	history.pushState({ path }, "", path);

	const homeBtn = viewsDiv.querySelector(".gohome")
		.addEventListener("click", () => render(homeView, "/"));

	const menuBtn = viewsDiv.querySelector(".gomenu")
		.addEventListener("click", () => render(menuView, "/menu"));
	
	const aboutBtn = viewsDiv.querySelector(".goabout")
		.addEventListener("click", () => render(aboutView, "/about"));
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

