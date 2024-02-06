const randomNumber1= Math.ceil(Math.random() * 6);
console.log(randomNumber1);
// randomImage= `dice${randomNumber1}.png`
// console.log(randomImage);

document.querySelector(".img1").setAttribute("src", "./images/dice2.png");
document.querySelector(".img2").setAttribute("src", "./images/dice3.png");