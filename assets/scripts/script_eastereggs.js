var musicEmbed      = document.getElementById("music-embed"),
    music           = document.getElementById("music")
    musicVisible    = false,
    modalShoe       = document.getElementsByClassName("modal")[0],
    shoes           = document.getElementById("shoes"),
    modalClose      = document.getElementsByClassName("modal-close")[0],
    kanaad          = document.getElementById("kanaad"),
    kanaadPic       = document.getElementById("kanaad-pic");
    and             = document.getElementById("and");

musicEmbed.style.visibility = "hidden";
kanaad.style.visibility = "hidden";
kanaadPic.style.visibility = "hidden";

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

and.addEventListener("click", function() {
    kanaad.style.visibility = "visible";
});

kanaad.addEventListener("click", function() {
    kanaadPic.style.visibility = "visible";
});

kanaadPic.addEventListener("click", function() {
    kanaadPic.style.visibility = "hidden";
    kanaad.style.visibility = "hidden";
});




