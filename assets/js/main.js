var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
    effect: 'fade',
    parallax: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction'
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  })



$('.search-icon').click(function(){
  $('.search-form').toggle(500)
});



$('#toggler').click(function(){
  if ($(window).width() <= 500){
      mobileSize();
  } else {
      openNav();
  }
});

/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "500px";
  document.getElementById("sideOverlay").style.display = "block";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("sideOverlay").style.display = "none";
}

function mobileSize() {
    document.getElementById("mySidenav").style.width = "100%";
    document.getElementById("sideOverlay").style.display = "block";
}