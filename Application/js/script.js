$(document).ready(function() {

  // document.body.addEventListener('touchmove', function(event) {
  // event.preventDefault();
  // }, false);

  var dragging = false;
$(function() {
    var target = $('#mainTarget');
    var mainTarget = $('#mainTarget');
    var rad = mainTarget.width()/2;
    var elOfs = mainTarget.offset();
    var elPos = {
       x: elOfs.left,
       y: elOfs.top
    };
    target.on('touchstart', function() {
        dragging = true;
    });
    $(document).on('touchend', function() {
        dragging = false;
    });
    $(document).on('touchmove', function(e) {
      var mPos = {
        x: e.changedTouches[0].pageX-elPos.x,
        y: e.changedTouches[0].pageY-elPos.y
      };

      var getAtan = Math.atan2(mPos.x-rad, mPos.y-rad);
      var getDeg = -getAtan/(Math.PI/90) + 15;  //135 = (180deg-45deg)

      console.log(e.changedTouches[0]);

        if (dragging) {
            mainTarget.css({transform: 'rotate(' + getDeg + 'deg)'});
        }
    });
});

		});
$(document).ready(function() {
    $(function() {
        var target = $('#mainTarget2');
        var mainTarget = $('#mainTarget2');
        var rad = mainTarget.width()/2;
        var elOfs = mainTarget.offset();
        var elPos = {
           x: elOfs.left,
           y: elOfs.top
        };
        target.on('touchstart', function() {
            dragging = true;
        });
        $(document).on('touchend', function() {
            dragging = false;
        });
        $(document).on('touchmove', function(e) {
          var mPos = {
            x: e.changedTouches[0].pageX-elPos.x,
            y: e.changedTouches[0].pageY-elPos.y
          };

          var getAtan = Math.atan2(mPos.x-rad, mPos.y-rad);
          var getDeg = -getAtan/(Math.PI/90) - 60;  //135 = (180deg-45deg)

          console.log(e.changedTouches[0]);

            if (dragging) {
                mainTarget.css({transform: 'rotate(' + getDeg + 'deg)'});
            }
        });
    });});

$(document).ready(function() {
        $(function() {
            var target = $('#mainTarget3');
            var mainTarget = $('#mainTarget3');
            var rad = mainTarget.width()/2;
            var elOfs = mainTarget.offset();
            var elPos = {
               x: elOfs.left,
               y: elOfs.top
            };
            target.on('touchstart', function() {
                dragging = true;
            });
            $(document).on('touchend', function() {
                dragging = false;
            });
            $(document).on('touchmove', function(e) {
              var mPos = {
                x: e.changedTouches[0].pageX-elPos.x,
                y: e.changedTouches[0].pageY-elPos.x
              };

              var getAtan = Math.atan2(mPos.x-rad, mPos.y-rad);
              var getDeg = getAtan/(Math.PI/180) - 0;  //135 = (180deg-45deg)

              console.log(e.changedTouches[1]);

                if (dragging) {
                    mainTarget.css({transform: 'rotate(' + getDeg + 'deg)'});
                }
            });
        });
});
