// list of all games on the site

// "external: true" means the iframe loads someone elses webpage
// "external: false" means the iframe loads a webpage inside this repo. these mightn't work using file://...

window.games = {
	"slope": {
		"name": "Slope",
		"tags": ["3d", "classic", "infinite"],
		"credits": "Y8 games (hosted by slopenexus on github)",
		"alt-links": ["https://harshulgoon.github.io/iframes/slope.html", "https://slope2-game.com/slope-unblocked", "https://mathplayzone.com/slope/", "https://www.y8.com/games/slope", "https://slope-play.github.io/"],
		"description": "this is like the default unblocked game. roll down a hill and try not to die.",
		"iframe": "https://slopenexus.github.io/games/19-04v2.1/index.html",
		"external": true,
		"thumbnail": "thumbnails/slope.png"
	},

	"run3": {
		"name": "Run 3",
		"tags": ["3d", "classic", "infinite", "story_basic"],
		"credits": "player_03 (hosted by lekug on github)",
		"alt-links": ["https://dnrweqffuwjtx.cloudfront.net/run-3/", "https://lekug.github.io/tn6pS9dCf37xAhkJv/", "https://run3-unblock.github.io/", "https://player03.com/run/3/beta/", "https://www.hoodamath.com/games/run3.html", "https://run-3.bitbucket.io/", "https://run3free.github.io/"],
		"description": "you're an alien running through space tunnels. i think it has a story? idk though.",
		"iframe": "https://lekug.github.io/tn6pS9dCf37xAhkJv/",
		"external": true,
		"thumbnail": "thumbnails/run3.png"
	},

	"stickmanhook": {
		"name": "Stickman Hook",
		"tags": ["2d", "classic", "infinite"],
		"credits": "Madbox (hosted by stickmanhook on gitlab)",
		"alt-links": ["https://harshulgoon.github.io/iframes/stickman.html", "https://stickman-hook.bitbucket.io/", "https://stickmanhook.bitbucket.io/", "https://stickmanhook-unblocked.github.io/", "https://poki.com/en/g/stickman-hook", "https://www.zgames.io/game/stickman-hook-unblocked-free-browser-game", "https://mathplayzone.com/stickman-hook/"],
		"description": "swing through (technically) infinite levels, you can go stupidly fast if you spam",
		"iframe": "https://stickmanhook.gitlab.io/file/",
		"external": true,
		"thumbnail": "thumbnails/stickmanhook.png"
	},

	"cookieclicker": {
		"name": "Cookie Clicker",
		"tags": ["quality", "idle", "classic", "story_basic"],
		"credits": "Orteil",
		"alt-links": ["https://orteil.dashnet.org/cookieclicker/", "https://stormyskitten.github.io/CookieClickerUnblocked/", "https://cookieclickernew.com/", "https://cookieclicker.eu/cookieclicker/", "https://cookieclickerunblocked.site/"],
		"description": "probably the most well known idle game, build a (very ethical) cookie empire, and generate septendecillions of cookies in the background.",
		"iframe": "./iframes/cookieclicker/index.html",
		"external": false,
		"thumbnail": "thumbnails/cookieclicker.png"
	},

	"balatro": {
		"name": "Balatro",
		"tags": ["quality", "2d", "port"],
		"credits": "localthunk (port by harshulsilverspoon on github)",
		"alt-links": ["https://harshulgoon.github.io/iframes/balatro.html"],
		"description": "weirdly addicting poker-based roguelike. play poker hands to gain absurd amounts of points.",
		"iframe": "./iframes/balatro/index.html",
		"external": false,
		"thumbnail": "thumbnails/balatro.png"
	}
}
