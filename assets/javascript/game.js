

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
  console.log("Button 1 is ", crystalButton1);

  var crystalButton2 = Math.floor(Math.random() * (12 - 1)) + 1;
  console.log("Button 2 is ", crystalButton2);

  var crystalButton3 = Math.floor(Math.random() * (12 - 1)) + 1;
  console.log("Button 3 is ", crystalButton3);

  var crystalButton4 = Math.floor(Math.random() * (12 - 1)) + 1;
  console.log("Button 4 is ", crystalButton4);


  //Update userScore on click
  $("#crystalButton1").click(function () {
    // var crystal1val = +($(this).attr(crystalButton1)); - more condensed option?
    var crystal1val = ($(this).attr("#crystalButton1")); //Something here isn't working! .find?
    crystal1val = parseInt(crystal1val);
    userScore += crystal1val;
    //Push updated score to screen
    //$(this).data("")
    console.log("Updated score is ", userScore);

  });

  //
  //Copy above for each button
  //

  //If / else statements to determine win or loss
  if (userScore > targetScore) {
    $("#userScore").addClass("red");
    alert("YOU LOST");
    $("#losses").add(+1);
    //push +1 to loss 
  }

  else if (userScore === targetScore) {
    alert("YOU WIN!");
    $("#wins").add(+1);
    //push +1 to win 
  };





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