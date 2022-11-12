let randomNumber1 = Math.floor(Math.random() * 6) + 1; // generate random number from 1 - 6
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

document
  .querySelector(".img1")
  .setAttribute("src", `images/dice${randomNumber1}.png`); //randomly change player 1 dice image
document
  .querySelector(".img2")
  .setAttribute("src", `images/dice${randomNumber2}.png`); // Randomly change player 2 dice image

if (randomNumber1 > randomNumber2) {
		document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
	document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
} else {
	document.querySelector("h1").innerHTML = "Draw!";
}
