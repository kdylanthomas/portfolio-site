var offset = 50;

//control offset for scrolling
$('#custom-nav li a').click(function(event) {
    event.preventDefault();
    $($(this).attr('href'))[0].scrollIntoView({behavior: 'smooth'});
    scrollBy(0, -offset);
});

// popover for email
$("[data-toggle=popover]").popover(); // activate email popover


