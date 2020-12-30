var description     = document.querySelector("#description-content"),
    photo           = document.querySelector("#character-photo"),
    nextButton      = document.querySelector("#next-button"),
    prevButton      = document.querySelector("#prev-button"),
    backButton      = document.querySelector("#back"),
    health          = document.querySelector("#health");

var photos = ['./assets/images/2020/maine-min.jpg', './assets/images/2020/1jan.jpeg', './assets/images/2020/2feb1-min.jpg', './assets/images/2020/2feb2-min.jpg', './assets/images/2020/3march.jpg', './assets/images/2020/4april-min.jpg', './assets/images/2020/5may-min.jpg', './assets/images/2020/6june-min.jpg', './assets/images/2020/7july-min.jpg', './assets/images/2020/8august-min.jpg', './assets/images/2020/9sept-min.jpg', './assets/images/2020/10oct-min.JPG','./assets/images/2020/fire-min.JPG', './assets/images/2020/11nov-min.jpg', './assets/images/2020/12dec-min.JPG'];
var currPhotoIndex = 0;


back.addEventListener("click", function() {
  window.location.href = "index.html"
})

health.addEventListener("click", function() {
  description.innerText = "Hello world";
})

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

