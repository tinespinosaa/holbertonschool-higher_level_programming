// The script adds the class red to the header element when the user clicks
// on the DIV#red_header

$('DIV#red_header').click(function(){
    $('header').addClass('red');
});
