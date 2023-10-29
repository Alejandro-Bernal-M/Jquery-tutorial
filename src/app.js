$(document).ready(function () {
  
  // $('h1').html('hello h1');
  // $('.display-4').html('desde clase');
  // $('#idh1').html('desde id');

  $('#idh1').addClass('text-danger');
  $('#idh1').removeClass('display-4');
  $('#content').append('<h2>Hello h2 append</h2>');
  $('#content').prepend('<h1>Hello preprend </h1>');
  
  $('#text-blue').css('color', 'blue');
});