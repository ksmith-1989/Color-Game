let numSquares = 6;
let colors = generateRandomColors(6);
let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.querySelector("#colorDisplay");
let messageDisplay = document.querySelector("#message");
let resetButton = document.querySelector("#reset");
let h1 = document.querySelector("h1");
let easyBTN = document.querySelector("#easyBTN");
let hardBTN = document.querySelector("#hardBTN");

easyBTN.addEventListener("click", function() {
  easyBTN.classList.add("selected");
  hardBTN.classList.remove("selected");
  numSquares = 3;
  colors = generateRandomColors(3);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (let i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
});

hardBTN.addEventListener("click", function() {
  hardBTN.classList.add("selected");
  easyBTN.classList.remove("selected");
  numSquares = 6;
  colors = generateRandomColors(6);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].style.display = "block";
  }
});

resetButton.addEventListener("click", function() {
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();

  colorDisplay.textContent = pickedColor;
  this.textContent = "New Colors";

  messageDisplay.textContent = "";

  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
  h1.style.backgroundColor = "steelblue";
});

colorDisplay.textContent = pickedColor;

for (let i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colors[i];
  squares[i].addEventListener("click", function() {
    let clickedColor = this.style.backgroundColor;
    console.log(clickedColor, pickedColor);
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct!";
      changeColors(clickedColor);
      resetButton.textContent = "Play again?";
      h1.style.backgroundColor = clickedColor;
    } else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try again";
    }
  });
}

function changeColors(color) {
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  let arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  return arr;
}

function randomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
