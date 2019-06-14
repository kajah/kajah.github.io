var begContainer    = document.getElementsByClassName("beg-container"),
    startContainer  = document.getElementsByClassName("start-container"),
    onStartPage     = true,
    start           = document.getElementById("start"),
    quit           = document.getElementById("quit"),
    cont            = document.getElementById("continue"),
    save1           = document.getElementById("save1"),
    tutorial        = document.getElementById("tutorial"),
    about           = document.getElementById("about"),
    back            = document.getElementById("back"),
    menuDescription = document.getElementById("menu-description");



start.addEventListener("click", function() {
    begContainer[0].style.visibility = "hidden";
    startContainer[0].style.visibility = "visible";
    onStartPage = false;
});

back.addEventListener("click", function() {
    begContainer[0].style.visibility = "visible";
    startContainer[0].style.visibility = "hidden";
    onStartPage = true;
});

cont.addEventListener("click", function() {
    // window.location.assign("http://www.blend.com");
    window.open("http://www.blend.com", '_blank');
});

quit.addEventListener("click", function() {
    window.location.assign("http://www.google.com");
});

cont.addEventListener("mouseover", function() {
    menuDescription.innerText = "Current Employer: Blend";
});

cont.addEventListener("mouseleave", function() {
    menuDescription.innerText = "";
});

save1.addEventListener("mouseover", function() {
    menuDescription.innerText = "Previous Employer: Nextdoor";
});

save1.addEventListener("mouseleave", function() {
    menuDescription.innerText = "";
});

tutorial.addEventListener("mouseover", function() {
    menuDescription.innerText = "Education: University of California, Berkeley '19";
});

tutorial.addEventListener("mouseleave", function() {
    menuDescription.innerText = "";
});

if (onStartPage) {
    startContainer[0].style.visibility = "hidden";
}


