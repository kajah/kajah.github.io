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
    newText         = document.getElementById("typewriter-text"),
    easterMusic     = document.getElementById("beats"),
    katharine       = document.getElementById("katharine"),
    contact         = document.getElementById("contact");

var numClicksHi = 0;
var numClicksName = 0;

musicEmbed.style.visibility = "hidden";
kanaad.style.visibility = "hidden";
kanaadPic.style.visibility = "hidden";
newText.style.visibility = "hidden";
easterMusic.style.visibility = "hidden";

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

katharine.addEventListener("click", function() {
    numClicksName += 1;
    if (numClicksName > 3) {
        contact.innerHTML = "Contact me at katharine.jiang9@gmail.com";
    }
});

document.addEventListener("keypress", keyEvents);

var name = '';

function keyEvents(event) {
    var key = event.key;

    if (key == 'k') {
        if (name.length == 0) {
            name += 'k';
        }
    }

    if (key == 'a') {
        if (name.substr(-1) == 'k' || name.substr(-1) == 'h') {
            name += 'a';
        } else {
            name = '';
        }
    }

    if (key == 't') {
        if (name.substr(-1) == 'a') {
            name += 't';
        } else {
            name = '';
        }
    }

    if (key == 'h') {
        if (name.substr(-1) == 't') {
            name += 'h';
        } else {
            name = '';
        }
    }

    if (key == 'r') {
        if (name.substr(-1) == 'a') {
            name += 'r';
        } else {
            name = '';
        }
    }

    if (key == 'i') {
        if (name.substr(-1) == 'r') {
            name += 'i';
        } else {
            name = '';
        }
    }

    if (key == 'n') {
        if (name.substr(-1) == 'i') {
            name += 'n';
        } else {
            name = '';
        }
    }

    if (key == 'e') {
        name += 'e';
        if (name == 'katharine') {
            easterMusic.style.visibility = "visible";
        }
    }
}
