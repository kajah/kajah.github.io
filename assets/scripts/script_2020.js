var descriptionBox  = document.querySelector(".description-content-container"),
    photo           = document.querySelector("#character-photo"),
    nextButton      = document.querySelector("#next-button"),
    prevButton      = document.querySelector("#prev-button"),
    backButton      = document.querySelector("#back"),
    health          = document.querySelector("#health"),
    relationships   = document.querySelector("#relationships"),
    career          = document.querySelector("#career"),
    books           = document.querySelector("#books"),
    art             = document.querySelector("#art"),
    goals           = document.querySelector("#goals");

var photos = ['./assets/images/2020/maine-min.jpg', './assets/images/2020/1jan.jpeg', './assets/images/2020/2feb1-min.jpg', './assets/images/2020/2feb2-min.jpg', './assets/images/2020/3march.jpg', './assets/images/2020/4april-min.jpg', './assets/images/2020/5may-min.jpg', './assets/images/2020/6june-min.jpg', './assets/images/2020/7july-min.jpg', './assets/images/2020/8august-min.jpg', './assets/images/2020/9sept-min.jpg', './assets/images/2020/10oct-min.JPG','./assets/images/2020/fire-min.JPG', './assets/images/2020/11nov-min.jpg', './assets/images/2020/12dec-min.JPG'];
var currPhotoIndex = 0;


back.addEventListener("click", function() {
  window.location.href = "index.html"
})

health.addEventListener("click", function() {
  descriptionBox.innerHTML = '\<p\>This was a rough one. I\'ve never experienced the levels of stress \& anxiety as I did this year. Like so many others, I struggled with the unknown of the world, loneliness, and feeling of hopelessness when waking up and going to bed. I stopped working out and my sudden stationary lifestyle took a toll on my physical and mental health. I had difficulty falling asleep for the first time ever, breathing issues, and ongoing headaches stemmed from stress, overwork, and a concussion in March. I cried a lot.\</p\>\<p\>I still feel the effects of the sheer weight from stress that bore down on me for so many months. But I found solace in candles \& aromatherapy, yoga, reading, and art. I have put down multiple chapters of my life, freeing brain space and allowing me to focus on my next big chapter. This year was my wake up call, as my body urgently alerted me to pay attention to mental wellness. Stress is unavoidable, but we can be aware when we\'ve crossed a line, and take a breather to reset.\</p\>'
})

relationships.addEventListener("click", function() {
  descriptionBox.innerHTML = '\<p\>COVID normalized calls and video chats with everyone - old and far away friends, close friends, colleagues, acquaintances. \"Hanging out\" no longer meant absolutely getting together physically. In a way, I felt more connected than ever.\</p\>\<p\>On the other hand, I felt more trappeed than ever. In person connection matters. Personally, it matters a whole lot. It\'s strange when you spend all day chatting with people, but face your room alone as you close your laptop, feeling like you had\'t actually connected with anyone. I was trapped in my Zoom screen. The small things - bumping into a friend on BART, a casual smile in the micro kitchen, hanging out with no anxiety - left a gaping hole in my life. Making matters worse, I couldn\'t go home for the entire year.\</p\>\<p\>However, I am so grateful for the new relationships I made, from Twitter peeps to mutuals, to 16 strangers in Maine. I am also grateful for particular relationships that were strengthened. It has been a year full of learning and reflection and I thank the people who graced my life, if only briefly, for broadening my thoughts and glittering an otherwise grey year.\</p\>\<p\>Finally, the state of the world allowed me to defog parts of my relationship with myself. After an overwhelming, busy, and stressful year, I\'ve finally had some time to unjumble my brain a little. I thought more deeply about my upbringing, the different circles I mingle among and in between, and the special characteristics that define who I am. I\'ve learned that it\'s ok to be comfortable in the grey zone, and that the epitome of me can draw from infinite inspirations and spectrums. I\'ve learned to let go of rigid structure, and be a little more spontaneous in an ever-changing landscape. Instead of bearing the weight of my flaws, I own and accept them and continue to march on, always self-aware and working to become a better version of me, without losing myself.\</p\>'
})

career.addEventListener("click", function() {
  descriptionBox.innerHTML = '\<p\>How can my wellness bar be so low and this bar be so high? It\'s important to celebrate wins, and I somehow managed to have an incredibly rich and productive year in regards to my work. I became Chief of Staff of #MovingForward, and helped publish multiple large projects such as a website redesign and a 30 page guide for founders facing harassment during fundraising. I joined Polymath Capital Partner\'s investment team and also made my first angel investment. I joined a new team at Blend as the first engineer and was promoted in the Fall.\</p\>\<p\>Most exciting of all, I met my cofounder and started my founder journey full-time. I am proud of everything I was able to achieve this year, and am looking forward to an undoubtedly challenging but exciting 2021.\</p\>'
})

books.addEventListener("click", function() {
  descriptionBox.innerHTML = '\<p\>I managed to finish 12/12 books this year! In order:\</p\>\<p\>The Overstory by Richard Powers\</p\>\<p\>Quiet by Susan Cain\</p\>\<p\>Fried Green Tomatoes at the Whistle Stop Cafe by Fannie Flagg\</p\>\<p\>Drive Your Plow Over the Bones of the Dead by Olga Tokarczuk\</p\>\<p\>Calypso by David Sedaris\</p\>\<p\>Atomic Habits by James Clear\</p\>\<p\>Between the World and Me by Ta-Nehisi Coates\</p\>\<p\>Persepolis by Marjane Satrapi\</p\>\<p\>Till We Have Faces by C.S. Lewis\</p\>\<p\>Originals by Adam Grant\</p\>\<p\>The Culture Map by Erin Meyer\</p\>\<p\>Zero to One by Peter Thiel and Blake Masters\</p\>'
})

art.addEventListener("click", function() {
  descriptionBox.innerHTML = '\<p\>Ah, the stuff that saved me. To cope with the turmoil of 2020, I revived old and dear hobbies. Black \& White pencil sketching, painting, crafts, piano. It\'s been a wonderful dive back to after-Chinese-school extracurriculars. Art is a magical thing - its ability to melt away stress and seep creativity into all other parts of life.\</p\>\<p\>Some art that had particular meaning this year: classical piano music, candles, paint-by-numbers, Glass Animals, Miley, Romanza, TwosetViolin, Somnium.\</p\>'
})

goals.addEventListener("click", function() {
  descriptionBox.innerHTML = '\<p\>1. Consider broader sets of opinions\</p\>\<p\>2. Think deeply\</p\>\<p\>3. Focus\</p\>\<p\>A short, not-so-tangible list. I spent years dabbling in different hobbies, setting clear-cut goals that may or may not have been checked off. Why not change it up this year? &#127870\</p\>'
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

