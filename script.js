$(document).ready(function() {

  $('#startButton').click(function() {
    $('#countdown').html((parseInt($('#minuteSet').val() * 60) + parseInt($('#secondSet').val())));;
    $('span.wins').html('0');
    $('span.losses').html('0');
    $('span.ties').html('0');
  });

  $('#restartButton').click(function() {
    $('#countdown').html((parseInt($('#minuteSet').val() * 60) + parseInt($('#secondSet').val())));;
    $('span.wins').html('0');
    $('span.losses').html('0');
    $('span.ties').html('0');
  });


  var countdown = setInterval(counter, 1000);

  function counter() {
    var count = parseInt($('#countdown').html())

    if ($('#countdown').html() == 0) {
      clearInterval();
      // declareGameWinner();
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
        declareRoundWinner();
  });

  $('#paper').click(function() {
        $('#userChoice').html("Paper");
        botChoice();
        declareRoundWinner();
  });

  $('#scissors').click(function() {
        $('#userChoice').html("Scissors");
        botChoice();
        declareRoundWinner();
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


  function declareRoundWinner() {

    var addWin = parseInt($('span.wins').html()) + 1;
    var addLoss = parseInt($('span.losses').html()) + 1;
    var addTie = parseInt($('span.ties').html()) + 1;

    if ($('#userChoice').html() === "Rock" && $('#botChoice').html() === "Scissors") {
      addWin;
      $('span.wins').html(addWin);
    } else if ($('#userChoice').html() === "Rock" && $('#botChoice').html() === "Paper") {
        addLoss;
        $('span.losses').html(addLoss);
    } else if ($('#userChoice').html() === "Paper" && $('#botChoice').html() === "Rock") {
        addWin;
        $('span.wins').html(addWin);
    } else if ($('#userChoice').html() === "Paper" && $('#botChoice').html() === "Scissors") {
        addLoss;
        $('span.losses').html(addLoss);
    } else if ($('#userChoice').html() === "Scissors" && $('#botChoice').html() === "Paper") {
        addWin;
        $('span.wins').html(addWin);
    } else if ($('#userChoice').html() === "Scissors" && $('#botChoice').html() === "Rock") {
        addLoss;
        $('span.losses').html(addLoss);
    } else {
        addTie;
        $('span.ties').html(addTie);
    }

  };


  // function declareGameWinner() {

  // };


});
