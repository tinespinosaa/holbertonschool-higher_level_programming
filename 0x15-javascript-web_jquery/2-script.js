// The script updates the text color of the header to red
// when the user clicks on the DIV#red_header

$('DIV#red_header').click(function(){
    $('header').css({ color: '#FF0000'});
});
