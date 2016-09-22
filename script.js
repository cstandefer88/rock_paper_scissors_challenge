$(document).ready(function() {

  $('#startButton').click(function() {
    $('#countdown').html((parseInt($('#minuteSet').val() * 60) + parseInt($('#secondSet').val())));;
    $('#minuteSet').val('');
    $('#secondSet').val('');

    var countdown = setInterval(counter, 1000);

    function counter() {
      if ($('#countdown').html() == 0) {
        clearInterval();
    } else {
        var counter = parseInt($('#countdown').html());
        counter = counter - 1;
        $('#countdown').html(counter);
    }
    };

  });


});
