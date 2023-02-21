function myFunction(){
    var player1;
    var player2;

    var randomImageSource1;
    var randomImageSource2;

    // generate random numbers for players
    player1 = Math.floor(Math.random()*6)+1;
    player2 = Math.floor(Math.random()*6)+1;

    randomImageSource1 = "images/dice"+player1+".png";
    randomImageSource2 = "images/dice"+player2+".png";
    
    var image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src", randomImageSource1);

    var image2 = document.querySelectorAll("img")[1];
    image2.setAttribute("src", randomImageSource2);


    if(player1>player2){
        document.querySelector("h1").innerHTML = "player 1 👑";
    }else if(player1<player2){
        document.querySelector("h1").innerHTML = "player 2 👑";
    }else{
        document.querySelector("h1").innerHTML = "DRAW 🤝";
    }

}