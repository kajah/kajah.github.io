var description     = document.querySelector("#description-content"),
    descriptionBox  = document.querySelector(".description-content-container"),
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
  // description.innerText = "Hello world";
  descriptionBox.innerHTML = '\<p\>This was a rough one. I\'ve never experienced the levels of stress \& anxiety as I did this year. Like so many others, I struggled with the unknown of the world, loneliness, and feeling of hopelessness when waking up and going to bed. I stopped working out and my sudden stationary lifestyle took a toll on my physical and mental health. I had difficulty falling asleep for the first time ever, breathing issues, and ongoing headaches stemmed from stress, overwork, and a concussion in March. I cried a lot.\</p\>\<p\>I still feel the effects of the sheer weight from stress that bore down on me for so many months. But I found solace in candles \& aromatherapy, yoga, reading, and art. I have put down multiple chapters of my life, freeing brain space and allowing me to focus on my next big chapter. This year was my wake up call, as my body urgently alerted me to pay attention to mental wellness. Stress is unavoidable, but we can be aware when we\'ve crossed a line, and take a breather to reset.\</p\>'
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

