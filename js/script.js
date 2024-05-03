$(document).ready(function(){

    // banner section start (owl-carousel) #slider1
  $('#slider1').owlCarousel({
    items: 1,
    loop:true,
    nav: true,
    // autoplay: true,    
    dots:false,
    autoplayTimeout: 3000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
 });
 
  // banner section end


  // When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("myHeader");
 
// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");

  } else {
    header.classList.remove("sticky");
  }
}


jQuery('.faq__accordian-heading').click(function(e){
  e.preventDefault();
  if (!jQuery(this).hasClass('active')) {
      jQuery('.faq__accordian-heading').removeClass('active');
      jQuery('.faq__accordion-content').slideUp(500);
      jQuery(this).addClass('active');
      jQuery(this).next('.faq__accordion-content').slideDown(500);
  }
  else if (jQuery(this).hasClass('active')) {
      jQuery(this).removeClass('active');
      jQuery(this).next('.faq__accordion-content').slideUp(500);
  }
});



});