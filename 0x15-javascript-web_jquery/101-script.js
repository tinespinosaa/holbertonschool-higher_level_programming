// The script adds, removes and clear li element from a list
// when the user clicks a new element

$('document').ready(function () {
    $('DIV#add_item').click(function () {
      $('UL.my_list').append('<li>Item</li>');
    });
    $('DIV#remove_item').click(function () {
      $('UL.my_list li:last').remove();
    });
    $('DIV#clear_list').click(function () {
      $('UL.my_list').empty();
    });
  });
  
