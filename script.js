const boardElement = document.getElementById("board");
const ourPlayersElement = document.getElementById("our_players");
const opponentPlayersElement = document.getElementById("opponent_players");
const removeButtonElement = document.getElementById("remove_button");

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

//ourPlayers
const ourPlayersNodeList = document.querySelectorAll(".our_player");

const ourPlayersArray = Array.from(ourPlayersNodeList);

//opponent players
const opponentPlayersNodeList = document.querySelectorAll(".opponent_player");

const opponentPlayersArray = Array.from(opponentPlayersNodeList);

//click on players
ourPlayersArray.forEach((ourPlayer, index) => {
  ourPlayer.addEventListener("click", function () {
    selectedPlayer = `<div class='player our_player'>${index + 1}</div>`;
  });
});

opponentPlayersArray.forEach((opponentPlayer, index) => {
  opponentPlayer.addEventListener("click", function () {
    selectedPlayer = `<div class='player opponent_player'>${index + 1}</div>`;
  });
});

//squares
const squaresNodeList = document.querySelectorAll(".square");
const squaresArray = Array.from(squaresNodeList);

//click delete button
removeButtonElement.addEventListener("click", function () {
  selectedPlayer = "";
});

//release of players
squaresArray.forEach((square) => {
  square.addEventListener("click", function () {
    square.innerHTML = selectedPlayer;
  });
});
