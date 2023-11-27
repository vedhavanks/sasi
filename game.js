let images=["dice-01.jpg",
            "dice-02.jpg",
            "dice-03.jpg",
            "dice-04.jpg",
            "dice-05.jpg",
            "dice-06.jpg"];
const dice=document.getElementById("dice-btn");

function dicegame(){
    var randomDice=Math.floor((Math.random()*6)+1);
    var diceLocation="Dice"+randomDice+".jpg";
    var img1=document.querySelectorAll("imges")[0];
    img1.setAttribute("src",images[diceLocation]);

    var randomDice2=Math.floor((Math.random()*6)+1);
    var diceLocation2="Dice"+randomDice2+".jpg";
    var img2=document.querySelectorAll("imges")[1];
    img2.setAttribute("src",images[diceLocation2]);
}