/* jQuery */
$(document).ready(function() {
// fermeture spash
  $('#splash span').on('click',function(){
    $('#splash').addClass('fadeout');
  });

  $('#tuto').ready(function(){
    $('#li2').hide();
    $('#li3').hide();
  });
  // slide left  SWIPE LEFT NE FONCTIONNE PAS?
    $('#swipe').on("click",function(){
      $('#swipe').addClass('slide');
      $('#swipe2').addClass('slide2');
      $('#li1').hide();
      $('#li2').show();
      $('#li3').hide();
    });

    $('#swipe2').on('click',function(){
      $('#swipe2').removeClass('slide2').addClass('slide');
      $('#swipe3').addClass('slide2');
      $('#li1').hide();
      $('#li2').hide();
      $('#li1').hide();
      $('#li3').show();
    });

    $('#swipe3').on('click',function(){
      $('#tuto').fadeOut();
    });

//Clic sur serveur iphone Hugo
  $('#center').on('click',function(){
    $('#listeservers').hide();
    $('#serveur-cercle').hide();
    $('#hide-server').hide();
    $('#renderers').hide();
    $('#serveur-cercle2').hide();
    $('#center').hide();
    $('#roue-player').hide();
    $('#servers #plex1niv1').removeClass('hidden').show();
  });

  // apparition des filtres
    $('#music').on('click',function(){
      $('#disparu').fadeOut("slow")
      $('#filters').removeClass('hidden').show("slow");
    });


  // click sur songs
  $('#plex1songs').on('click',function(){
    $('#filters').hide();
    $('#plex1niv1').hide();
    $('#plex1niv2').removeClass('hidden').fadeIn('slow');
  });

  // click sur Fakear
  $('#plex1niv2 #fakearsong').on('click',function(){
    $('#plex1niv2').hide();
    $('#lecteur').removeClass('hidden').fadeIn('slow');
  });


//Retour serveur//
$('#back-serveur').on('click',function(){
  $('#plex1niv1').hide();
  $('#filters').hide();
  $('#listeservers').removeClass('hidden').show();
  $('#serveur-cercle').removeClass('hidden').show();
  $('#hide-server').removeClass('hidden').show();
  $('#renderers').removeClass('hidden').show();
  $('#serveur-cercle2').removeClass('hidden').show();
  $('#disparu').removeClass('hidden').show();
  $('#center').removeClass('hidden').show();
});

//Retour filtres//
$('#back-medias').on('click',function(){
  $('#plex1niv2').hide();
  $('#plex1niv1').removeClass('hidden').show("slow");
  $('#disparu').removeClass('hidden').show("slow");
});

// apparition au press
$('#filtreserveur').on('touchstart touchend',function(event){
  $('#roue-player').removeClass('hidden').show();
});
});
//couleur liste on screen//
