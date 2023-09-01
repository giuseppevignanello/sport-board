const boardElement = document.getElementById("board");
const ourPlayersElement = document.getElementById("our_players");
const opponentPlayersElement = document.getElementById("opponent_players");

const numOfSquare = 308;
const players = 5;

for (let i = 0; i < numOfSquare; i++) {
  boardElement.innerHTML += "<div class='square'></div>";
}

for (let i = 1; i < players + 1; i++) {
  ourPlayersElement.innerHTML += `<div class='player our_player'>${i}</div>`;
  opponentPlayersElement.innerHTML += `<div class='player opponent_player'>${i}</div>`;
}
