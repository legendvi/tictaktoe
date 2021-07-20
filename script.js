"use strict";

const btnX = document.querySelector("#btn-x");
const btnO = document.querySelector("#btn-o");
const square = document.querySelectorAll(".square");
const divWin = document.querySelector("#divWin");
const newGame = document.querySelector("#newGame");
let state = false;
let player = "";
let player1 = "";
let count = 0;
let game = false;

function init() {
  for (let i = 0; i < square.length; ++i) {
    square[i].innerText = "";
  }
  count = 0;
  player1 = "";
  player = "";
  divWin.classList.add("hidden");
  state = false;
  game = false;
  btnX.classList.remove("active");
  btnO.classList.remove("active");
}

let win = function (player) {
  let flag = false;
  if (
    square[0].innerText == player &&
    square[1].innerText == player &&
    square[2].innerText == player
  ) {
    flag = true;
  } else if (
    square[0].innerText == player &&
    square[3].innerText == player &&
    square[6].innerText == player
  ) {
    flag = true;
  } else if (
    square[0].innerText == player &&
    square[4].innerText == player &&
    square[8].innerText == player
  ) {
    flag = true;
  } else if (
    square[1].innerText == player &&
    square[4].innerText == player &&
    square[7].innerText == player
  ) {
    flag = true;
  } else if (
    square[2].innerText == player &&
    square[5].innerText == player &&
    square[8].innerText == player
  ) {
    flag = true;
  } else if (
    square[2].innerText == player &&
    square[4].innerText == player &&
    square[6].innerText == player
  ) {
    flag = true;
  } else if (
    square[3].innerText == player &&
    square[4].innerText == player &&
    square[5].innerText == player
  ) {
    flag = true;
  } else if (
    square[6].innerText == player &&
    square[7].innerText == player &&
    square[8].innerText == player
  ) {
    flag = true;
  }

  return flag;
};

btnX.addEventListener("click", function () {
  if (game === false) {
    player = "X";
    player1 = "X";
    state = true;
    console.log(game);
    btnX.classList.add("active");
    btnO.classList.remove("active");
  }
});

btnO.addEventListener("click", function () {
  if (game === false) {
    player = "O";
    player1 = "O";
    state = true;
    btnO.classList.add("active");
    btnX.classList.remove("active");
  }
});
for (let i = 0; i < square.length; ++i) {
  if (true) {
    square[i].addEventListener("click", function () {
      if (state == true) {
        game = true;
      }
      if (square[i].innerText == "" && game === true) {
        square[i].innerText = player;
        console.log(player);
        count += 1;
        console.log(count);
        if (win(player)) {
          divWin.classList.remove("hidden");
          console.log(player, " won");

          game = false;
          if (player === player1) {
            divWin.innerText = `Player 1 won the Game`;
            console.log("Player 1 won this Game");
          } else {
            console.log("Player 2 won this Game");
            divWin.innerText = `Player 2 won this Game`;
          }
        } else if (count == 9) {
          game = false;
          console.log("Match is drawn");
          divWin.innerText = "Match is Drawn";
          divWin.classList.remove("hidden");
        }

        player = player == "X" ? "O" : "X";
      }
    });
  }
}

newGame.addEventListener("click", init);
