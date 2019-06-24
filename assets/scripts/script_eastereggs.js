var musicEmbed      = document.getElementById("music-embed"),
    music           = document.getElementById("music")
    musicVisible    = false,
    modalShoe       = document.getElementsByClassName("modal")[0],
    shoes           = document.getElementById("shoes"),
    modalClose      = document.getElementsByClassName("modal-close")[0],
    kanaad          = document.getElementById("kanaad"),
    kanaadPic       = document.getElementById("kanaad-pic");
    and             = document.getElementById("and"),
    hi              = document.getElementById("hi"),
    originalText    = document.getElementById("typedtext"),
    newText         = document.getElementById("typewriter-text");

var numClicksHi = 0;

musicEmbed.style.visibility = "hidden";
kanaad.style.visibility = "hidden";
kanaadPic.style.visibility = "hidden";
newText.style.visibility = "hidden";

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

hi.addEventListener("click", function() {
    numClicksHi += 1;
    if (numClicksHi > 2) {
        originalText.style.visibility = "hidden";
        newText.style.visibility = "visible";
        newText.innerHTML = "Hello World! Did you find the other easter eggs?";
    }
});

newText.addEventListener("click", function() {
    originalText.style.visibility = "visible";
    newText.innerHTML = "";
    newText.style.visibility = "hidden";
    numClicksHi = 0;
});


document.addEventListener("keypress", keyEvents);

function keyEvents(event) {
    var key = event.key;

    if (key == "a") {
        alert ("You pressed the 'backspace' key!");
    }
}








