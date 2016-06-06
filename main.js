smoothScroll.init({offset: 50}); // initialize smooth scrolling

// close navbar-collapse when user clicks a link
$('.custom-nav-links li a').on('click', function(){
  if($('.navbar-toggle').css('display') !='none'){
      $(".navbar-toggle").trigger( "click" );
  }
});

// popover for email
$("[data-toggle=popover]").popover(); // activate email popover


