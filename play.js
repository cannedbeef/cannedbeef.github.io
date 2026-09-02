// runs inside the game page

function load_game(game_id) {
	const iframe = document.getElementById("game-frame");
	iframe.setAttribute("src", window.games[game_id]["iframe"]);
}

const params = new URLSearchParams(window.location.search);

const game_id = params.get("game");
if (!game_id || window.games[game_id] == undefined) {
	document.getElementById("no-game-warning").hidden = false;
	throw new Error("quitting...");
}
console.log("playing game", game_id);

if (game_id == "polytrack") {
	message = document.getElementById("game-specific");
	message.innerHTML = `
		<h1>Polytrack Disclaimer</h1>
		<p>Due to technical reasons, and security systems on the server's side, polytrack leaderboards do not work by default on non-official sites. THIS IS POSSIBLE TO BYPASS, yet if you don't care, simply press "Done".</p>
		<small>sadly, if <i>kodub.com</i> is blocked, leaderboards will not work even if you do this, however if you open the game where it's NOT blocked, all your scores will update, so if you care about leaderboards i still reccomend doing this.</small>
		<br><br>
		<details>
			<summary>I do care</summary>
			<h3>Installation</h3>
			<p>The bypass requires installing and configuring the "Requestly Interceptor" browser extension. <a href="https://chromewebstore.google.com/detail/requestly-intercept-modif/mdnleldcmiljblolnjhpnblkcekpdkpa">Chrome Install</a> / <a href=https://requestly.com/downloads/firefox/>Firefox Install</a></p>
			<details>
				<summary>If your browser's link is blocked</summary>
				<p>If for whatever reason you can't install using the provided links (for example, if the chrome web store is blocked), it is possible to install without it. It might look scary if you don't know what you're doing, but if you follow the steps exactly there should be no issue.</p>
				<ul>
					<li>Step 1: Download the extension
						<ul>
							<li>If you know how to use <i>git</i>, simply clone <i>https://github.com/requestly/interceptor</i></li>
							<li>Otherwise, go to <i>https://github.com/requestly/interceptor</i>, find the big green "<> Code" button, press it, and press <i>Download ZIP</i>. Once the ZIP is downloaded, extract it.</li>
						</ul>
					</li>
					<li>Step 2: Install the extension
						<ul>
							<li>For Chrome: Go to <i>chrome://extensions</i>, and enable the <i>Developer Mode</i> switch in the top-right corner. Some new buttons should appear, but you should ignore those. Instead, open your file manager, and find the extracted ZIP (or git clone), navigate to <i>browser-extension</i>, <i>mv3</i>, <i>builds</i>, <i>chrome</i>, and you should see a group of several ZIP files with dates in the name. Drag the one with the most recent date into the extensions menu, and it should be installed.</li>
							<li>For Firefox: Go to <i>about:addons</i>, click on the <i>Extensions</i> menu, click the small cog icon, and click <i>Install Add-on From File</i>. When prompted to find a file, go to the extracted ZIP (or git clone), navigate to <i>browser-extension</i>, <i>mv3</i>, <i>builds</i>, <i>firefox</i>, and you should see a group of several ".xpi" files with dates in the name. Select the one with the most recent date, and firefox should install the exension.</li>
						</ul
					</li>
					<li>After this, you can delete the extracted folder.</li>
				</ul>
			</details>
			<h3>Configuration</h3>
			<p>Once the extension is installed, you need to set it up to work with polytrack.</p>
			<p>Regardless of if you're on chrome or firefox, you can open the extension's menu by clicking the puzzle piece icon to the right of your url bar, clicking <i>Requestly</i>, and then <i>Open App</i>.</p>
			<p>Once in the configuration, click on the <i>Rules</i> menu on the left of the screen, and click <i>New Rule</i>, and <i>Modify Headers</i></p>
			<p>Change the name of the rule from <i>headers-[some numbers]</i> to <i>polytrack</i>, change the <i>"URL"</i> dropdown to <i>"Host"</i>, and change <i>"Contains"</i> to <i>"Equals"</i>. In the "enter url here" field, type <i>vps.kodub.com</i>.</p>
			<p>Press <i>Add Request Header</i>, change <i>"ADD"</i> to <i>"OVERRIDE"</i>, type <i>Origin</i> in <i>Header Name</i>, and <i>https://app-polytrack.kodub.com</i> in <i>Header Value</i></p>
			<p>Click on <i>Response Headers</i>, press <i>Add Response Header</i>, change <i>"ADD"</i> to <i>"OVERRIDE"</i>, type <i>Access-Control-Allow-Origin</i> in <i>Header Name</i>, and <i>*</i> in <i>Header Value</i></p>
			<p>Save with Ctrl+S (or press the <i>+Save rule</i> button)</p>
			<p>Once alllllllll of that is done, polytrack should be tricked into thinking it's running on the official site, and will actually load leaderboards, and save your own scores to them.</p>
		</details>
		<br>
		<button type="button" onclick="document.getElementById('game-specific').hidden=true;load_game('polytrack')">Done</button>
	`;
	message.hidden = false;
} else {
	load_game(game_id);
}
