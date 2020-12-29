var description     = document.querySelector("#description-content"),
    photo           = document.querySelector("#character-photo"),
    nextButton      = document.querySelector("#next-button"),
    prevButton      = document.querySelector("#prev-button"),
    health          = document.querySelector("#health");

var photos = ['./assets/images/2019/graduation.jpg', './assets/images/2019/vegas.jpeg']
var currPhotoIndex = 0;


health.addEventListener("click", function() {
  description.innerText = "Hello world";
})

nextButton.addEventListener("click", function() {
  currPhotoIndex += 1;
  if (currPhotoIndex > photos.length - 1) {
    currPhotoIndex = 0;
  }
  photo.src = photos[currPhotoIndex]
})

prevButton.addEventListener("click", function() {
  currPhotoIndex -= 1;
  if (currPhotoIndex < 0) {
    currPhotoIndex = photos.length - 1;
  }
  photo.src = photos[currPhotoIndex]
})

