var begContainer    = document.getElementsByClassName("beg-container"),
    startContainer  = document.getElementsByClassName("start-container"),
    onBegPage       = true,
    start           = document.getElementById("start"),
    quit            = document.getElementById("quit"),
    cont            = document.getElementById("continue"),
    save1           = document.getElementById("save1"),
    tutorial        = document.getElementById("tutorial"),
    about           = document.getElementById("about"),
    back            = document.getElementById("back"),
    menuDescription = document.getElementById("menu-description");

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
    // window.history.pushState({}, document.title, "/" + "index.html");
});

cont.addEventListener("click", function() {
    // window.location.assign("http://www.blend.com");
    window.open("http://www.blend.com", '_blank');
});

quit.addEventListener("click", function() {
    window.location.assign("http://www.google.com");
});

save1.addEventListener("click", function() {
    onBegPage = false;
    window.location.href = "nextdoor.html";
});

tutorial.addEventListener("click", function() {
    onBegPage = false;
    window.location.href = "berkeley.html";
});

about.addEventListener("click", function() {
    onBegPage = false;
    window.location.href = "about.html";
});

if (window.screen.availWidth >= 768) {
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
    
    about.addEventListener("mouseover", function() {
        menuDescription.innerText = "Hi my name is Katharine...";
    });
    
    about.addEventListener("mouseleave", function() {
        menuDescription.innerText = "";
    });
}



if (onBegPage) {
    begContainer[0].style.visibility = "visible";
    startContainer[0].style.visibility = "hidden";
} else {
    begContainer[0].style.visibility = "hidden";
    startContainer[0].style.visibility = "visible";
}


