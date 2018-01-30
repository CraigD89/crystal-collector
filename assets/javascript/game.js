

//Wins / losses
var wins = 0;
$("#wins").text(wins);

var losses = 0;
$("#losses").text(losses);

//User's score
var userScore = 0
$("#userScore").text(userScore);


// Game functions go here - starts from the beginning when user wins or loses
var gameStart = function () {

  //Random number for target score
  var targetScore = Math.floor(Math.random() * (120 - 19)) + 19;
  $("#targetScore").text(targetScore);
  console.log("Target score is ", targetScore);

  //Crystal button values
  var crystalButton1 = Math.floor(Math.random() * (12 - 1)) + 1;
  $("#crystalButton1").attr("data-value", crystalButton1);
  console.log("Button 1 is ", crystalButton1);

  var crystalButton2 = Math.floor(Math.random() * (12 - 1)) + 1;
  $("#crystalButton2").attr("data-value", crystalButton2);
  console.log("Button 2 is ", crystalButton2);

  var crystalButton3 = Math.floor(Math.random() * (12 - 1)) + 1;
  $("#crystalButton3").attr("data-value", crystalButton3);
  console.log("Button 3 is ", crystalButton3);

  var crystalButton4 = Math.floor(Math.random() * (12 - 1)) + 1;
  $("#crystalButton4").attr("data-value", crystalButton4);
  console.log("Button 4 is ", crystalButton4);


  //Update userScore on click
  $("#crystalButton1").click(function () {

    //Push crystal values to total score
    var crystal1val = $(this).attr("data-value");
    console.log(crystal1val, "this is crystal 1")
    crystal1val = parseInt(crystal1val);
    userScore += crystal1val;
    $("#userScore").text(userScore);

    if (userScore > targetScore) {
      alert("YOU LOST");
      +$("#losses").val() + 1; //NOT WORKING
      var losses = $("#losses").val();
      losses = losses + 1;
    }
    else if (userScore === targetScore) {
      alert("YOU WIN!");
    };
  });

  $("#crystalButton2").click(function () {

    //Push crystal values to total score
    var crystal2val = $(this).attr("data-value");
    console.log(crystal2val, "this is crystal 2")
    crystal2val = parseInt(crystal2val);
    userScore += crystal2val;
    $("#userScore").text(userScore);

    if (userScore > targetScore) {
      alert("YOU LOST");
      +$("#losses").val() + 1; //NOT WORKING
      var losses = $("#losses").val();
      losses = losses + 1;
    }
    else if (userScore === targetScore) {
      alert("YOU WIN!");
    };
  });

  $("#crystalButton3").click(function () {

    //Push crystal values to total score
    var crystal3val = $(this).attr("data-value");
    console.log(crystal3val, "this is crystal 3")
    crystal3val = parseInt(crystal3val);
    userScore += crystal3val;
    $("#userScore").text(userScore);

    if (userScore > targetScore) {
      alert("YOU LOST");
      +$("#losses").val() + 1; //NOT WORKING
      var losses = $("#losses").val();
      losses = losses + 1;
    }
    else if (userScore === targetScore) {
      alert("YOU WIN!");
    };
  });


  $("#crystalButton4").click(function () {

    //Push crystal values to total score
    var crystal4val = $(this).attr("data-value");
    console.log(crystal4val, "this is crystal 4")
    crystal4val = parseInt(crystal4val);
    userScore += crystal4val;
    $("#userScore").text(userScore);

    if (userScore > targetScore) {
      alert("YOU LOST");
      +$("#losses").val() + 1; //NOT WORKING
      var losses = $("#losses").val();
      losses = losses + 1;
    }
    else if (userScore === targetScore) {
      alert("YOU WIN!");
    };
  });





  //End of game - RESTART
};

gameStart();






// JS from in class review
// var rand = [4, 5, 7, 8];

// var clickAction = function () {
//   var index = $(this).attr("data-num")
//   console.log("data", index);
//   console.log("random", rand[index]);
// }

// $("button").on("click", clickAction);