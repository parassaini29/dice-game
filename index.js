

var randomNumber1=Math.floor(Math.random()*6)+1;  //1-6

var randomDiceImage="dice"+randomNumber1 + ".png"; //dice1 - dice6 png

var randomImagesSource="images/" + randomDiceImage; //images/dice1.png-image/dice6.png

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImagesSource);

var randomNUmber2=Math.floor(Math.random()*6)+1;

var randomDiceImage2="dice"+randomNUmber2 + ".png";

var randomImagesSource2="images/" + randomDiceImage2;
var image2=document.querySelectorAll("img")[1];

image2.setAttribute("src",randomImagesSource2);

if(randomNumber1>randomNUmber2)
{
    document.querySelector("h1").innerHTML="Player 1 🏆 wins";

}

else if(randomNUmber2>randomNumber1)
{
    document.querySelector("h1").innerHTML="Player 2  🏆 wins ";

}

else
{
    document.querySelector("h1").innerHTML="Match Draw";
}
