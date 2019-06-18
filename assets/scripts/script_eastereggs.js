var musicEmbed  = document.getElementById("music-embed"),
    music       = document.getElementById("music");

musicEmbed.style.visibility = "hidden";

music.addEventListener("click", function() {
    musicEmbed.style.visibility = "visible";
});