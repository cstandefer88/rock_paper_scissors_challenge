$(document).ready(function() {

  // Start and Restart buttons setting chosen value of timer and default scoreboard respectively

  $('#startButton').click(function() {
    $('#countdown').html((parseInt($('#minuteSet').val() * 60) + parseInt($('#secondSet').val())));;
    defaulter()
  });

  $('#restartButton').click(function() {
    $('#countdown').html((parseInt($('#minuteSet').val() * 60) + parseInt($('#secondSet').val())));;
    defaulter();
  });



  // Function that defaults scoreboard back to 0

  function defaulter() {
    $('span.wins').html('0');
    $('span.losses').html('0');
    $('span.ties').html('0');
  };



  // Setting interval of countdown to 1 second

  var countdown = setInterval(counter, 1000);



  // Checking to see if timer is at 0; at which point the timer stops, a winner is declared, and then the scoreboard is set again to default
  // Checking to see if timer is at 10; at which point an alert is sent off to notify the user of the impending close to the game, and the game continues on
  // If neither of the above options is the case, the game simply continues

  function counter() {
    var count = parseInt($('#countdown').html())

    if ($('#countdown').html() == 0) {
      clearInterval();
      declareGameWinner();
      defaulter();
    } else if (($('#countdown').html() == 10)) {
        count = parseInt($('#countdown').html()) - 1;
        $('#countdown').html(count);
        alert("You have 10 seconds left");
    } else {
        count = parseInt($('#countdown').html()) - 1;
        $('#countdown').html(count);
    }
  };



  // Click events on the buttons allowing the user to have his/her choice submitted followed by the bot making a choice and a winner of the round being added to the scoreboard

  $('#rock').click(function() {
        $('#userChoice').html("Rock");
        botChoice();
        determineRoundWinner();
  });

  $('#paper').click(function() {
        $('#userChoice').html("Paper");
        botChoice();
        determineRoundWinner();
  });

  $('#scissors').click(function() {
        $('#userChoice').html("Scissors");
        botChoice();
        determineRoundWinner();
  });



  // Bot makes a "choice" move

  function botChoice() {
    var bot = Math.random();

    if (bot <= 0.33) {
      $('#botChoice').html("Rock");
    } else if (bot >= 0.66) {
        $('#botChoice').html("Paper");
    } else {
        $('#botChoice').html("Scissors");
    };
  };



  // Round winner is determined and the score is tallied into the wins, losses, or ties

  function determineRoundWinner() {

    var addWin = parseInt($('span.wins').html()) + 1;
    var addLoss = parseInt($('span.losses').html()) + 1;
    var addTie = parseInt($('span.ties').html()) + 1;
    var results = $('#userChoice').html() + ' and ' + $('#botChoice').html();

    switch(results) {
      case "Rock and Scissors":
        addWin;
        $('span.wins').html(addWin);
        break;
      case "Rock and Paper":
        addLoss;
        $('span.losses').html(addLoss);
        break;
      case "Paper and Rock":
        addWin;
        $('span.wins').html(addWin);
        break;
      case "Paper and Scissors":
        addLoss;
        $('span.losses').html(addLoss);
        break;
      case "Scissors and Paper":
        addWin;
        $('span.wins').html(addWin);
        break;
      case "Scissors and Rock":
        addLoss;
        $('span.losses').html(addLoss);
        break;
      default:
        addTie;
        $('span.ties').html(addTie);
    };
  };



  // A winner of the game is determined based on the total tallies in relation to each other

  function declareGameWinner() {

    var totalWins = parseInt($('span.wins').html());
    var totalLosses = parseInt($('span.losses').html());
    var totalTies = parseInt($('span.ties').html());

    if (totalWins > totalLosses && totalTies) {
      alert("You beat the computer this game!  Play again if you want!");
    } else if (totalLosses > totalWins && totalTies) {
        alert("The computer beat you this game!  Play again if you want!");
    } else if (totalTies > totalWins && totalLosses) {
        alert("You tied with the computer this game!  Play again if you want!");
    }
  };

});
