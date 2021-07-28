console.log("JavaScript File Attached!");

let cards=[];                   //array
let sum=0;
let hasBlackJack=false;
let isAlive=false;
let msg="";

let message=document.getElementById('message');
let sumLabel=document.getElementById('sumLabel');
let cardsNum=document.getElementById('cardsNum');

let player={                    //object
   name:"Raku",
   chips:14556
}

let playerEl=document.getElementById('playerEl');
playerEl.textContent=player.name+": ₹" + player.chips;

let startBtn=document.getElementById('startBtn');

//getRandomCard(), that always return random card between 1 and 13
function getRandomCard(){
   let random= Math.floor((Math.random()*13)+1);

   if(random>10){
        return 10;      //because 10 is the value of the jack,queen and king
    }
    else if(random===1){
        return 11;      //Ace number is 11
    }
    else
        return random;
}



startBtn.addEventListener('click',()=>{
    isAlive=true;
    let firstCard=getRandomCard();
    let secondCard=getRandomCard();
    cards=[firstCard,secondCard];
    sum=firstCard+secondCard;
    document.getElementById('newCardBtn').disabled=false;
    renderGame();

});


function renderGame()
{
    cardsNum.textContent="Cards: ";
    //render out firstCard and secondCard
    // cardsNum.textContent="Cards: " + cards[0] + " " + cards[1] + " " ;
    for(let i=0;i<cards.length;i++){
        cardsNum.textContent+=cards[i]+" ";
    }
    //render out ALL the cards we have
    sumLabel.textContent="Sum: "+ sum;                 
    
    if(sum<21){
        msg="Do you want to draw a new card? 😊";
        // console.log("Do you want to draw a new card? 😊");
    }
    else if(sum===21){
        msg="Wohoo! You've got BlackJack! 😍";
        // console.log("Wohoo! You've got BlackJack! 😍");                       
        hasBlackJack=true;
    }
    else{
        msg="You're out of the game! 😓";
        // console.log("You're out of the game! 😓");
        isAlive=false;
    }
    
    // console.log(msg);
    document.getElementById('message').textContent=msg;
    
    
}


//Add new card
let newCardBtn=document.getElementById('newCardBtn');

newCardBtn.addEventListener('click',()=>{
    if(isAlive===true && hasBlackJack===false){
        console.log("Drawing a new card from the deck!");
        let card=getRandomCard();
        
        sum+=card;
        //Push(add) the card to the cards array
        cards.push(card);
        
        renderGame();
    }
 
    else
    {
        msg="You're out of the game! Please Start The Game Again!!";
        document.getElementById('message').textContent=msg;
        document.getElementById('newCardBtn').disabled=true;
    }
});