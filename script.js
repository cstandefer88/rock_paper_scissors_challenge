$(document).ready(function() {

  $('#startButton').click(function() {
    parseInt($('#minuteSet').val() * 60) + parseInt($('#secondSet').val());
    $('#minuteSet').val('');
    $('#secondSet').val('');
  });






});
