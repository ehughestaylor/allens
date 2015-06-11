
  // Initialize collapse button
  $(".button-collapse").sideNav();
  // Initialize collapsible (uncomment the line below if you use the dropdown variation)
  //$('.collapsible').collapsible();

// var checkOpenStatus = function () {
//     var d = new Date();
//     var date = d.getHours();
//     var day = d.getDay();
//     if ((date > 9) && (date < 20) && (day != 0)) {
//         y = "<a style=\"color:#FFF\">We're Open!</a>";
//     } else {
//         y = "<a style=\"color:#FFF\">Sorry we're Closed.</a>";
//     }
//     document.getElementById("open-close").innerHTML = y;
//     setTimeout(checkOpenStatus,15000);
// };


$(window).load(function() {
    // Animate loader off screen
    $(".se-pre-con").fadeOut("slow");
});

$(document).ready(function(){
  // VERTICAL CAROUSEL ON HOME PAGE
  $( "#carousel" ).rcarousel({orientation: "vertical", height:200, width:300, auto: {enabled: true}});
  
  $('.slider').slider({full_width: true});
  

  // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
  
  $('.modal-trigger').leanModal();
  //start slider and have slider be full width
  

  $('#myCarousel').carousel({
      interval: 4000
  });

  // handles the carousel thumbnails
  $('[id^=carousel-selector-]').click( function(){
    var id_selector = $(this).attr("id");
    var id = id_selector.substr(id_selector.length -1);
    id = parseInt(id);
    $('#myCarousel').carousel(id);
    $('[id^=carousel-selector-]').removeClass('selected');
    $(this).addClass('selected');
  });

  // when the carousel slides, auto update
  $('#myCarousel').on('slid', function (e) {
    var id = $('.item.active').data('slide-number');
    id = parseInt(id);
    $('[id^=carousel-selector-]').removeClass('selected');
    $('[id=carousel-selector-'+id+']').addClass('selected');
  });
});
