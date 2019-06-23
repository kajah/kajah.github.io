var backToStart = document.getElementsByClassName("back-to-start")[0];

backToStart.addEventListener("click", function() {
    window.location.href = "index.html?fromProjectPage=1";
});

window.addEventListener('popstate', function() {
    window.location.href = "index.html?fromProjectPage=1";
});

// document.addEventListener("keypress", keyEvents);

// function keyEvents(event) {
//     var x = event.key;

//     if (x == "a") {
//         alert ("You pressed the 'backspace' key!");
//     }
// }


// // When the user scrolls the page, execute myFunction 
// window.onscroll = function() {myFunction()};

// // Get the header
// var header = document.getElementById("myHeader");

// // Get the offset position of the navbar
// var sticky = header.offsetTop;

// // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }
