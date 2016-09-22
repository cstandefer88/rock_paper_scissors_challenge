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
      // declareWinner();
    } else if (($('#countdown').html() == 10)) {
        count = parseInt($('#countdown').html()) - 1;
        $('#countdown').html(count);
        alert("You have 10 seconds left");
      } else {
          count = parseInt($('#countdown').html()) - 1;
          $('#countdown').html(count);
        }
  };


  $('#rock').click(function() {
    $('#userChoice').html("Rock");
    botChoice();
    // declareRoundWinner();
    // $('#userChoice').html('');
    // $('#botChoice').html('');
  });

  $('#paper').click(function() {
    $('#userChoice').html("Paper");
    botChoice();
    // declareRoundWinner();
    // $('#userChoice').html('');
    // $('#botChoice').html('');
  });

  $('#scissors').click(function() {
    $('#userChoice').html("Scissors");
    botChoice();
    // declareRoundWinner();
    // $('#userChoice').html('');
    // $('#botChoice').html('');
  });


  function botChoice() {
    var bot = Math.random();
    if (bot <= 0.33) {
      $('#botChoice').html("Rock");
    } else if (bot >= 0.66) {
        $('#botChoice').html("Paper");
      } else {
          $('#botChoice').html("Scissors");
        }
  };


  // function declareRoundWinner() {

  // };


  // function declareGameWinner() {

  // };


});
