
//  Tat iframe
// $("#close").click(function() {
//   $(".view_iframe").css({"display": 'none'});
// });
$("#close").click(function(){
  $(".embed-wrap").css({"display": 'block'});
  $(".url_world_in_3d").remove();
  $("#close").css({"display": 'none'});
});

//$(".start").click(function(){
  //$("#close").css({"display": 'block'});
//}); 



// Sticky menu //
$(document).ready(function(){
      
      //On Scroll Functionality
      $(window).scroll( () => {
        var windowTop = $(window).scrollTop();
        windowTop > 10 ? $('#nav').addClass('navShadow_1') : $('#nav').removeClass('navShadow_1');
        windowTop > 10 ? $('ul').css('top','100px') : $('ul').css('top','160px');
      });

   
})


// remove  popup
$(document).ready(function(){
  $(".lang_show").click(function(){
    $(".show_lang").toggle(200);
  });
});

//Menu header
jQuery(document).ready(function($) {
  $('.menu').responsiveMenu({
    breakpoint: '1100'
  });
});

// Facebook chat show hide
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v2.5";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

jQuery(document).ready(function() {
    jQuery(".chat_fb").click(function() {
        jQuery('.fchat').toggle('slow');
    });
});