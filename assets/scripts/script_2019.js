var programScrolling = false;

$(window).bind('scroll', function() {
  console.log('scroll ', programScrolling);
  if (programScrolling) {
    return;
  }
  var currentTop = $(window).scrollTop();
  var elems = $('.scrollspy');
  elems.each(function(index) {
    var elemTop 	= $(this).offset().top;
    var elemBottom 	= elemTop + $(this).height();
    if(currentTop >= elemTop && currentTop <= elemBottom) {
      var id 		= $(this).attr('id');
      // console.log(id);
      var navElem = $('a[href="#' + id+ '"]');

      var boxChangeToActive = navElem.children().children('.nav-menu-box');
      boxChangeToActive.addClass('box-active');
      $('.nav-menu-box').not(boxChangeToActive).removeClass('box-active');

      var wordChangeToActive = navElem.children().children('.nav-menu-word');
      wordChangeToActive.addClass('word-active');
      $('.nav-menu-word').not(wordChangeToActive).removeClass('word-active');
    }
  })
}); 

function scrollToAnchor(id) {
  programScrolling = true;
  var aTag = $("a[name='"+ id +"']");
  console.log('scrollToAnchor: ', programScrolling);
  $('html,body').animate({scrollTop: aTag.offset().top},'slow');
  // programScrolling = false;
  // window.location.hash = id;
}

function activateAnchor(id) {
  console.log(id);
  var navElem = $('a[href="#' + id+ '"]');
  console.log(navElem);

  var boxChangeToActive = navElem.children().children('.nav-menu-box');
  boxChangeToActive.addClass('box-active');
  $('.nav-menu-box').not(boxChangeToActive).removeClass('box-active');

  var wordChangeToActive = navElem.children().children('.nav-menu-word');
  console.log('wordChangeToActive: ', wordChangeToActive.addClass('word-active'));
  wordChangeToActive.addClass('word-active');
  $('.nav-menu-word').not(wordChangeToActive).removeClass('word-active');
}

function setUpHover() {
  // on hover each anchor, make anchor word visible
  $('.nav-menu-box').hover(function() {
    $(this).siblings().addClass('word-active');
  }, function() {
    $(this).siblings().removeClass('word-active');
  });
}

function setUpScroll() {
  $("#nav-home").click(function() {
    // scrollToAnchor('home');
    programScrolling = false;
    activateAnchor('home');
  });

  $("#nav-travel").click(function() {
  //  scrollToAnchor('travel');
   programScrolling = false;
   activateAnchor('travel');
  });
  
  $("#nav-relationships").click(function() {
    // scrollToAnchor('relationships');
    programScrolling = false;
    activateAnchor('relationships');
  });

  $("#nav-career").click(function() {
    // scrollToAnchor('career');
    programScrolling = false;
    activateAnchor('career');
  });

  $("#nav-passion").click(function() {
    // scrollToAnchor('passion');
    programScrolling = false;
    activateAnchor('passion');
  });

  $("#nav-music").click(function() {
    // scrollToAnchor('music');
    programScrolling = false;
    activateAnchor('music');
  });

  $("#nav-books").click(function() {
    // scrollToAnchor('books');
    programScrolling = false;
    activateAnchor('books');
  });

  // $("#nav-goals").click(function() {
  //   // scrollToAnchor('goals');
  //   programScrolling = false;
  //   activateAnchor('goals');
  // });
}

setUpScroll();
setUpHover();
