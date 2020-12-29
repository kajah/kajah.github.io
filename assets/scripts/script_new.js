var begContainer    = document.getElementsByClassName("beg-container"),
    startContainer  = document.getElementsByClassName("start-container"),
    onBegPage       = true,
    start           = document.getElementById("start"),
    quit            = document.getElementById("quit"),
    cont            = document.getElementById("continue"),
    save1           = document.getElementById("save1"),
    save2           = document.getElementById("save2"),
    tutorial        = document.getElementById("tutorial"),
    about           = document.getElementById("about"),
    back            = document.getElementById("back"),
    menuDescription = document.getElementById("menu-description");
    aboutModal      = document.getElementById("about-modal");
    tutorialModal   = document.getElementById("tutorial-modal");
    nextdoorModal   = document.getElementById("nextdoor-modal");
    blendModal      = document.getElementById("blend-modal");
    contModal       = document.getElementById("cont-modal");
    quitModal       = document.getElementById("quit-modal");
    modalClose      = document.getElementsByClassName("modal-close");
    quitModalClose  = document.getElementById("quit-modal-close");
    modals          = document.getElementsByClassName("modal");

var urlParams = new URLSearchParams(window.location.search);
if (urlParams) {
    var fromProjectPage = urlParams.get('fromProjectPage');
    if (fromProjectPage) {
        onBegPage = false;
    }
}

start.addEventListener("click", function() {
    begContainer[0].style.visibility = "hidden";
    startContainer[0].style.visibility = "visible";
    onBegPage = false;
});

back.addEventListener("click", function() {
    begContainer[0].style.visibility = "visible";
    startContainer[0].style.visibility = "hidden";
    onBegPage = true;
    closeAllModals();
    // window.history.pushState({}, document.title, "/" + "index.html");
});

cont.addEventListener("click", function() {
    onBegPage = false;
    closeAllModals();
    contModal.classList.toggle("closed");
});

quit.addEventListener("click", function() {
    onBegPage = true;
    closeAllModals();
    quitModal.classList.toggle("closed");
});

save1.addEventListener("click", function() {
    onBegPage = false;
    closeAllModals();
    blendModal.classList.toggle("closed");
});

save2.addEventListener("click", function() {
    onBegPage = false;
    closeAllModals();
    nextdoorModal.classList.toggle("closed");
})

tutorial.addEventListener("click", function() {
    onBegPage = false;
    closeAllModals();
    tutorialModal.classList.toggle("closed");
});

about.addEventListener("click", function() {
    onBegPage = false;
    closeAllModals();
    aboutModal.classList.toggle("closed");
});

if (onBegPage) {
    begContainer[0].style.visibility = "visible";
    startContainer[0].style.visibility = "hidden";
} else {
    begContainer[0].style.visibility = "hidden";
    startContainer[0].style.visibility = "visible";
}

function closeAllModals() {
    for (const modal of modals) {
        modal.classList.add("closed");
    }
}

closeAllModals();
for (const button of modalClose) {
    button.addEventListener("click", function() {
        closeAllModals();
        window.location.href = "index.html?fromProjectPage=1";
    });
}

quitModalClose.addEventListener("click", closeAllModals);

