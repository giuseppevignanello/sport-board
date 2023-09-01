const boardElement = document.getElementById("board");

const numOfSquare = 308;

for (let i = 0; i < numOfSquare; i++) {
  boardElement.innerHTML += "<div class='square'></div>";
}
