// list all avaliable games and tags

function load_filters() {
	const search_filters = document.getElementById("search-filters");

	for (const [tag, name] of Object.entries(window.game_tags)) {
		const filter_input = document.createElement("div");

		filter_input.innerHTML = `
			<span>${name}: </span>
			<input type="radio" id="${tag}-filter-enabled" name="${tag}" value="enabled">
			<label for="${tag}-filter-enabled"><small>Enabled</small></label>
			<input type="radio" id="${tag}-filter-any" name="${tag}" value="any" checked>
			<label for="${tag}-filter-any"><small>Any</small></label>
			<input type="radio" id="${tag}-filter-disabled" name="${tag}" value="disabled">
			<label for="${tag}-filter-disabled"><small>Disabled</small></label>
		`;

		search_filters.appendChild(filter_input);
	}
}

function load_games(disallowed_tags, forced_tags) {
	const fancy_select = document.getElementById("fancy-select");
	
	const games_list = document.getElementById("games-list");
	games_list.replaceChildren();

	for (const [id, game] of Object.entries(window.games)) {
		list_game = true;
		for (const tag of game["tags"]) {
			if (!Object.keys(window.game_tags).includes(tag)) {
				console.error("unknown tag", tag, "in game", id);
				return;
			}

			if (disallowed_tags.includes(tag)) {
				console.log(tag, "skipping game", id);
				list_game = false;
				break;
			}
		}

		for (const forcedtag of forced_tags) {
			if (!game["tags"].includes(forcedtag)) {
				console.log(forcedtag, "Skipping game", id);
				list_game = false;
				break;
			}
		}

		if (!list_game) { continue; }

		const link = document.createElement("article");

		link.classList.add("game");
		if (fancy_select.value == "enabled") {
			link.classList.add("glow_hover");
		}

		const thumbnail = game["thumbnail"] ?? "https://dummyimage.com/600x400/000/fff.png&text=[no+image]";

		let alt_links_html = "";
		for (const link of game["alt-links"]) {
			alt_links_html += "<li><a href=" + link + ">" + link + "</a></li>";
		}

		const external_hosted_message = game["external"] ? "externally hosted" : "internally hosted";
		let tags_str = "";
		for (const tag of game["tags"]) {
			if (tags_str != "") {
				tags_str += ", ";
			}
			tags_str += window.game_tags[tag];
		}

		link.innerHTML = `
			<div class="game-info">
				<hgroup>
					<h3 style="margin-bottom:0px">${game["name"]}</h3>
					<small>tags: ${tags_str}</small>
				</hgroup>
				<p>${game["description"]}</p>
				<small>
					<details>
						<summary>Alternate Links</summary>
						<ul>${alt_links_html}</ul>
					</details>
					<details>
						<summary>Additional Information</summary>
						<p>credits: ${game["credits"]}<br>iframe link: ${game["iframe"]}<br>id: ${id}<br>${external_hosted_message}</p>
					</details>
				</small>
			</div>
			<a href="./play.html?game=${id}"><img class="game_image" src="${thumbnail}"></a>
		`;

		games_list.appendChild(link);
	}
}

function reset_filters() {
	for (const tag of Object.keys(window.game_tags)) {
		document.getElementById(`${tag}-filter-any`).checked = true;
	}
}

function apply_filters() {
	let forced_tags = [];
	let disabled_tags = [];
	for (const tag of Object.keys(window.game_tags)) {
		const tag_status = document.querySelector(`input[name="${tag}"]:checked`)?.value;
		if (tag_status == "enabled") {
			forced_tags.push(tag);
		} else if (tag_status == "disabled") {
			disabled_tags.push(tag);
		}
	}

	load_games(disabled_tags, forced_tags);
}

load_filters();
load_games([], []);
