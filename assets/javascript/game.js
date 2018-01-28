//Random number for target score
var targetScore = Math.floor(Math.random() * (120 - 19)) + 19;
$("#targetScore").text(targetScore);
console.log("Target score is ", targetScore);

//Crystal button values
var crystalButton1 = Math.floor(Math.random() * (12 - 1)) + 1;
// $("#crystalButton1").text(crystalButton1);
// $("#crystalButton1").on("click", updateScore); - to be used later
// $("#crystalButton1").click(crystalButton1); - creates an error
console.log("Button 1 is ", crystalButton1);

var crystalButton2 = Math.floor(Math.random() * (12 - 1)) + 1;
console.log("Button 2 is ", crystalButton2);

var crystalButton3 = Math.floor(Math.random() * (12 - 1)) + 1;
console.log("Button 3 is ", crystalButton3);

var crystalButton4 = Math.floor(Math.random() * (12 - 1)) + 1;
console.log("Button 4 is ", crystalButton4);


//User's score
// var userScore = 0




// var gameStart = function () {

//   // $("#crystalButton1").click(updateScore); - when user clicks the crystal it adds to userScore


// };

// gameStart();


// //Option for random number genrator
// <script>
//   function getRndInteger(min, max) {
//    return Math.floor(Math.random() * (120 - 19)) + 19;
// }
// </script>



// JS gone over in class
// var rand = [4, 5, 7, 8];

// var clickAction = function () {
//   var index = $(this).attr("data-num")
//   console.log("data", index);
//   console.log("random", rand[index]);
// }

// $("button").on("click", clickAction);