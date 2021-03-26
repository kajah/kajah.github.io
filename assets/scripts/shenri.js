var photo           = document.querySelector("#character-photo"),
    nextButton      = document.querySelector("#next-button"),
    prevButton      = document.querySelector("#prev-button");


var photos = ['./assets/images/shenri/piano.jpg', './assets/images/shenri/puzzle.jpg', './assets/images/shenri/puzzle2.jpg', './assets/images/shenri/stairs.jpg'];
var currPhotoIndex = 0;    

nextButton.addEventListener("click", function() {
  currPhotoIndex += 1;
  if (currPhotoIndex > photos.length - 1) {
    currPhotoIndex = 0;
  }
  photo.src = photos[currPhotoIndex];
})

prevButton.addEventListener("click", function() {
  currPhotoIndex -= 1;
  if (currPhotoIndex < 0) {
    currPhotoIndex = photos.length - 1;
  }
  photo.src = photos[currPhotoIndex]
})
    