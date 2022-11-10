// function displayDice(){

  var dicePlayer1 = Math.floor(Math.random() * 6) + 1;
  var dicePlayer2 = Math.floor(Math.random() * 6) + 1;
  var imageP1 = document.querySelectorAll("img")[0];
  var imageP2 = document.querySelectorAll("img")[1];
  imageP1.src = "images/dice" + dicePlayer1 + ".png";

  imageP2.src = "images/dice" + dicePlayer2 + ".png";
  var title =   document.querySelector("#title");

  if(dicePlayer1 > dicePlayer2) {
   title.textContent = "Player 1 Wins!";
   title.classList.add("#title");


  } else if (dicePlayer2 > dicePlayer1) {
   title.textContent = "Player 2 Wins!‍";
   title.classList.add("#title");


  } else {
   title.textContent = "Draw!";
   title.classList.add("#title");
  }

  // }
