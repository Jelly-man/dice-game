
let randomNumber1 = Math.floor(Math.random() * 6)+1;

var randomDiceImage1 = "./images/dice" + randomNumber1 + ".png";

var image1 = document.querySelector(".img1").setAttribute("src", randomDiceImage1);



let randomNumber2 = Math.floor(Math.random() * 6)+1;

var randomDiceImage2 = "./images/dice" + randomNumber2 + ".png";

var image2 = document.querySelector(".img2").setAttribute("src", randomDiceImage2);
 

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 is the winner!"
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 is the winner!"
} else {
    document.querySelector("h1").innerHTML = "Draw"
};