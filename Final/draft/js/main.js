

function init() {
	U.addEvent(U.$("Songs"), 'click', changesong);
	var player = document.getElementById("MusicPlayer"); 
	player.volume = 0.5;
}

function changesong() {
	var player = document.getElementById("MusicPlayer"); 
	var heading = document.getElementById("song-title"); 
	var e = document.getElementById("Songs");
	var strUser = e.options[e.selectedIndex].value;
	player.src = strUser;
	heading.innerHTML = "Now Playing: " + e.options[e.selectedIndex].text;
}
init();