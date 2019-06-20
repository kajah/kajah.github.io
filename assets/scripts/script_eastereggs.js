var musicEmbed      = document.getElementById("music-embed"),
    music           = document.getElementById("music")
    musicVisible    = false,
    modalShoe       = document.getElementsByClassName("modal")[0],
    shoes           = document.getElementById("shoes"),
    modalClose      = document.getElementsByClassName("modal-close")[0];

musicEmbed.style.visibility = "hidden";

music.addEventListener("click", function() {
    if (!musicVisible) {
        musicEmbed.style.visibility = "visible";
        musicVisible = true;
    } else {
        musicEmbed.style.visibility = "hidden";
        musicVisible = false;
    }
    
});

shoes.addEventListener("click", function() {
    modalShoe.style.visibility = "visible";
});

modalClose.addEventListener("click", function() {
    modalShoe.style.visibility = "hidden";
});

