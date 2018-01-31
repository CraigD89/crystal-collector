//Document get ready
$(document).ready(function() {
  //Wins / losses
  var wins = 0;
  $("#wins").text(wins);

  var losses = 0;
  $("#losses").text(losses);

  //User's score
  var userScore = 0;
  $("#userScore").text(userScore);

  //Random number for target score
  var targetScore = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
  $("#targetScore").text(targetScore);
  // console.log("Target score is ", targetScore);

  //Crystal button values
  var crystalButton1 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
  $("#crystalButton1").attr("data-value", crystalButton1);
  // console.log("Button 1 is ", crystalButton1);

  var crystalButton2 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
  $("#crystalButton2").attr("data-value", crystalButton2);
  // console.log("Button 2 is ", crystalButton2);

  var crystalButton3 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
  $("#crystalButton3").attr("data-value", crystalButton3);
  // console.log("Button 3 is ", crystalButton3);

  var crystalButton4 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
  $("#crystalButton4").attr("data-value", crystalButton4);
  // console.log("Button 4 is ", crystalButton4);

  // Game functions go here - starts from the beginning when user wins or loses
  function resetGame() {
    targetScore = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    $("#targetScore").text(targetScore);

    crystalButton1 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    $("#crystalButton1").attr("data-value", crystalButton1);
    // console.log("Button 1 is ", crystalButton1);

    crystalButton2 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    $("#crystalButton1").attr("data-value", crystalButton2);
    // console.log("Button 2 is ", crystalButton2);

    crystalButton3 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    $("#crystalButton1").attr("data-value", crystalButton3);
    // console.log("Button 3 is ", crystalButton3);

    crystalButton4 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    $("#crystalButton1").attr("data-value", crystalButton4);
    // console.log("Button 4 is ", crystalButton4);

    userScore = 0;
    $("#userScore").text(userScore);
  };

  //WIN / LOSS functions
  function loser() {
    alert("YOU LOSE");
    losses++;
    $("#losses").text(losses);
    resetGame();
  };

  function winner() {
    alert("YOU WIN");
    wins++;
    $("#wins").text(wins);
    resetGame();
  };

  //Update userScore on click
  $("#crystalButton1").click(function() {
    //Push crystal values to total score
    var crystal1val = parseInt($(this).attr("data-value"));
    userScore += crystal1val;
    $("#userScore").text(userScore);

    //Win + Loss criteria
    if (userScore > targetScore) {
      loser();
      // alert("YOU LOST");
      // losses++;
      // $("#losses").text(losses);
    } else if (userScore === targetScore) {
      winner();
      // alert("YOU WIN!");
      // wins++;
      // $("#wins").text(wins);
    }
  });

  $("#crystalButton2").click(function() {
    var crystal2val = parseInt($(this).attr("data-value"));
    userScore += crystal2val;
    $("#userScore").text(userScore);

    if (userScore > targetScore) {
      loser();
    } else if (userScore === targetScore) {
      winner();
    }
  });

  $("#crystalButton3").click(function() {
    var crystal3val = parseInt($(this).attr("data-value"));
    userScore += crystal3val;
    $("#userScore").text(userScore);

    if (userScore > targetScore) {
      loser();
    } else if (userScore === targetScore) {
      winner();
    }
  });

  $("#crystalButton4").click(function() {
    var crystal4val = parseInt($(this).attr("data-value"));
    userScore += crystal4val;
    $("#userScore").text(userScore);

    if (userScore > targetScore) {
      loser();
    } else if (userScore === targetScore) {
      winner();
    }
  });

  //End of game - RESTART
});
