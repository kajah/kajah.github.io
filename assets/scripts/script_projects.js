var backToStart = document.getElementsByClassName("back-to-start")[0];

backToStart.addEventListener("click", function() {
    window.location.href = "index.html?fromProjectPage=1";
});

window.addEventListener('popstate', function() {
    window.location.href = "index.html?fromProjectPage=1";
});
