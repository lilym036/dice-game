const randomNumber1= Math.ceil(Math.random() * 6);
console.log(randomNumber1);
// randomImage= `dice${randomNumber1}.png`
// console.log(randomImage);

document.querySelector(".img1").setAttribute("src", "./images/dice5.png");
document.querySelector(".img2").setAttribute("src", "./images/dice3.png");

const img1= document.querySelector(".img1");
const img2= document.querySelector(".img2");

function winOrLoose() {
if (img1 > img2) {
    document.querySelector("h1").innerHTML= "Player 1 wins"
} else if (img1 < img2) {
    document.querySelector("h1").innerHTML= "Player 2 Wins!"
} else {
    document.querySelector("h1").innerHTML= "It's a tie!"
}
}

winOrLoose();