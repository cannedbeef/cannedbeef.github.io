// manage the settings menu, and apply settings
// will run to apply even when there is no menu

const THEMES = [["light", "Light theme"], ["dark", "Dark theme"]];
const TITLES = [
	["default", "Unmasked", "cannedbeef's game collection", "icons/default.png"],
	["compass_home", "Compass Homepage", "Home | Compass", "icons/compass.png"],
	["google_drive", "Google Drive", "My Drive - Google Drive", "icons/google_drive.png"]
]

const theme_select = document.getElementById("theme-select");
const title_select = document.getElementById("title-select");

const is_menu = (document.getElementById("settings-menu") != null)

if (is_menu) {
	for (const theme of THEMES) {
		const theme_option = document.createElement("option");
		theme_option.setAttribute("value", theme[0]);
		theme_option.setAttribute("label", theme[1]);
		theme_select.appendChild(theme_option);
	}

	for (const title of TITLES) {
		const title_option = document.createElement("option");
		title_option.setAttribute("value", title[0]);
		title_option.setAttribute("label", title[1]);
		title_select.appendChild(title_option);
	}
}

function set_theme(theme_name) {
	if (theme_name == "default") {
		const prefers_dark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
		console.log("prefers_dark:", prefers_dark);
		theme_name = prefers_dark ? "dark" : "light";
	}

	let found_theme = false;
	for (theme of THEMES) {
		found_theme = (theme[0] == theme_name)
		if (found_theme) { break; }
	}
	if (!found_theme) {
		console.warn("unknown theme", theme_name);
		return;
	}

	console.log("setting theme", theme_name);
	document.documentElement.setAttribute("data-theme", theme_name);
}

function set_title(title_name) {
	let found_title = false;
	let title_id = -1;
	for (title of TITLES) {
		found_title = (title[0] == title_name)
		title_id++;
		if (found_title) { break; }
	}
	if (!found_title) {
		console.warn("unknown theme", title_name);
		return;
	}

	console.log("setting title", title_name);
	document.title = TITLES[title_id][2];

	let icon_link = document.getElementById("icon-link");
	if (!icon_link) {
		icon_link = document.createElement("link");
		icon_link.setAttribute("rel", "icon");
		icon_link.setAttribute("type", "image/png");
		icon_link.id = "icon-link";
		document.head.appendChild(icon_link);
	}
	icon_link.setAttribute("href", TITLES[title_id][3]);
}

const default_theme = localStorage.getItem("theme") ?? "default";
console.log("default theme", default_theme);
set_theme(default_theme);
if (is_menu) {
	theme_select.value = default_theme;

	theme_select.addEventListener("change", (e) => {
		const value = e.target.value;
		localStorage.setItem("theme", value);
		set_theme(value);
	});
}

const default_title = localStorage.getItem("title") ?? "default";
console.log("default title", default_title);
set_title(default_title);
if (is_menu) {
	title_select.value = default_title;

	title_select.addEventListener("change", (e) => {
		const value = e.target.value;
		localStorage.setItem("title", value);
		set_title(value);
	});
}

