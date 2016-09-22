$(document).ready(function() {

  $('#startButton').click(function() {
    $('#countdown').html((parseInt($('#minuteSet').val() * 60) + parseInt($('#secondSet').val())));;
    $('#minuteSet').val('');
    $('#secondSet').val('');
  });

  var countdown = setInterval(counter, 1000);

  function counter() {
    var count = parseInt($('#countdown').html())

    if ($('#countdown').html() == 0) {
      clearInterval();
    } else if (($('#countdown').html() == 10)) {
        count = parseInt($('#countdown').html()) - 1;
        $('#countdown').html(count);
        alert("You have 10 seconds left");
      } else {
          count = parseInt($('#countdown').html()) - 1;
          $('#countdown').html(count);
        }
  };


});
