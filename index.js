var randomNumber1 = Math.random();
var random = randomNumber1 * 6;
var randomNumber = Math.floor(random) + 1;

var randomImg = "dice" + randomNumber + ".png";
var randomImgSource = "images/" + randomImg;

var i1 = document.querySelector(".img1");
i1.setAttribute("src", randomImgSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImg1 = "dice" + randomNumber2 + ".png";
var randomImgSource1 = "images/" + randomImg1;

var i2 = document.querySelector(".img2");
i2.setAttribute("src", randomImgSource1);

if (randomImgSource > randomImgSource1) {
  document.querySelector("h1").innerHTML = "Player 1 Wins";
} else if (randomImgSource === randomImgSource1) {
  document.querySelector("h1").innerHTML = "DRAW";
} else {
  document.querySelector("h1").innerHTML = "Player 2 Wins";
}
