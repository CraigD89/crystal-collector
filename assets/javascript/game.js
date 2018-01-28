var targetScore = function () {
  return Math.floor(Math.random() * (120 - 19)) + 19;
  //push to dom
};
$("#targetScore").text(targetScore);
targetScore();



// var gameStart = function () {

// };

// gameStart();


// //Option for random number genrator
// <script>
//   function getRndInteger(min, max) {
//    return Math.floor(Math.random() * (120 - 19)) + 19;
// }
// </script>



// //JS gone over in class
// var rand = [4, 5, 7, 8];

// var clickAction = function () {
//   var index = $(this).attr("data-num")
//   console.log("data", index);
//   console.log("random", rand[index]);
// }

// $("button").on("click", clickAction);