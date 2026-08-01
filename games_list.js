// list all avaliable games

const games_list = document.getElementById("games-list");

for (const [id, game] of Object.entries(window.games)) {
	const link = document.createElement("article");

	link.classList.add("game");

	const thumbnail = game["thumbnail"] ?? "https://dummyimage.com/600x400/000/fff.png&text=[no+image]";

	let alt_links_html = "";
	for (const link of game["alt-links"]) {
		alt_links_html += "<li><a href=" + link + ">" + link + "</a></li>";
	}
	link.innerHTML = `
		<div class="game-info">
			<h3>${game["name"]}</h3>
			<p>${game["description"]}</p>
			<small>
				<details>
					<summary>Alternate Links</summary>
					<ul>${alt_links_html}</ul>
				</details>
				<details>
					<summary>Additional Information</summary>
					<p>credits: ${game["credits"]}<br>iframe link: ${game["iframe"]}<br>id: ${id}</p>
				</details>
			</small>
		</div>
		<a href="./play.html?game=${id}"><img class="game_image" src="${thumbnail}"></a>
	`;

	games_list.appendChild(link);
}
