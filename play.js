// runs inside the game page

const params = new URLSearchParams(window.location.search);

const game_id = params.get("game");
console.log("playing game", game_id);

if (game_id) {
	const iframe = document.getElementById("game-frame");
	iframe.setAttribute("src", window.games[game_id]["iframe"]);
} else {
	document.getElementById("no-game-warning").hidden = false;
}
