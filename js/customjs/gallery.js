$(document).ready(function(){
  $('.arrow-right').on('click',function(){
    var currentImg = $('.active');
    var nextImg = currentImg.next();
console.log("s")

    if(nextImg.length){
      currentImg.removeClass('active').css('z-index', -10);
      nextImg.addClass('active').css('z-index', 10);
    }
  });

// left arrows

$('.arrow-left').on('click',function(){
  var currentImg = $('.active');
  var prevImg = currentImg.prev();
console.log("s")

  if(prevImg.length){
    currentImg.removeClass('active').css('z-index', -10);
    prevImg.addClass('active').css('z-index', 10);
  }
});

});
