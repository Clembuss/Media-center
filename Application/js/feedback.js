$(document).ready(function(){
  $('.feedback1').on({
    'click': function() {
      var src = ($(this).attr('src') === 'img/2-1.png')
      ? 'img/2.png'
      : 'img/2-1.png';
      $(this).attr('src', src);
    }
  });

Feedback2();

function Feedback2(){
  $('.feedback2').on({
    'click': function() {
      var src = ($(this).attr('src') === 'img/5-1.png')
      ? 'img/5.png'
      : 'img/5-1.png';
      $(this).attr('src', src);
    }
  });
}


});
