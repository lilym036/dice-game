const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
const button = document.querySelector(".btn");

const winOrLoose = () => {
    const randomNumber1 = Math.ceil(Math.random() * 6);
    const randomNumber2 = Math.ceil(Math.random() * 6);
    console.log(randomNumber1);
    console.log(randomNumber2);
    imgSrc1 = `./images/dice${randomNumber1}.png`;
    imgSrc2 = `./images/dice${randomNumber2}.png`;

    img1.setAttribute("src", imgSrc1);
    img2.setAttribute("src", imgSrc2);

    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "Player 1 wins 🎉"
    } else if (randomNumber1 < randomNumber2) {
        document.querySelector("h1").innerHTML = "Player 2 Wins! 🎉"
    } else {
        document.querySelector("h1").innerHTML = "It's a tie!"
    }
}


button.addEventListener("click", winOrLoose);