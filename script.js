const boardElement = document.getElementById("board");
const ourPlayersElement = document.getElementById("our_players");
const opponentPlayersElement = document.getElementById("opponent_players");

const numOfSquare = 308;
const players = 5;
let selectedPlayer = "";

//add square to board
for (let i = 0; i < numOfSquare; i++) {
  boardElement.innerHTML += "<div class='square'></div>";
}

//add players
for (let i = 1; i < players + 1; i++) {
  ourPlayersElement.innerHTML += `<div class='player our_player'>${i}</div>`;
  opponentPlayersElement.innerHTML += `<div class='player opponent_player'>${i}</div>`;
}

// player list
const ourPlayersNodeList = document.querySelectorAll(".our_player");

const ourPlayersArray = Array.from(ourPlayersNodeList);

const opponentPlayersNodeList = document.querySelectorAll(".opponent_player");

const opponentPlayersArray = Array.from(opponentPlayersNodeList);

ourPlayersArray.forEach((ourPlayer, index) => {
  ourPlayer.addEventListener("click", function () {
    selectedPlayer = `<div class='player our_player'>${index + 1}</div>`;
    console.log(selectedPlayer);
  });
});

opponentPlayersArray.forEach((opponentPlayer, index) => {
  opponentPlayer.addEventListener("click", function () {
    selectedPlayer = `<div class='player opponent_player'>${index + 1}</div>`;
    console.log(selectedPlayer);
  });
});

//squares
const squaresNodeList = document.querySelectorAll(".square");
const squaresArray = Array.from(squaresNodeList);

squaresArray.forEach((square) => {
  square.addEventListener("click", function () {
    square.innerHTML = selectedPlayer;
  });
});
