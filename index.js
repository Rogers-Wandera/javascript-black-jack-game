let sum = 0
let cards = [];
let hasBlackJack = false
let isAlive = false;
let message = "";

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerel = document.getElementById("player-el");

let playerObj = {
    name: "",
    chips: "",
}

let userName = window.prompt("Enter Your name: ");
let userchips = window.prompt("Enter your chips");

playerObj.name = userName;
playerObj.chips = userchips;

function checkCrendentilas() {
    if(playerObj.name == "") {
        alert("Please refresh and enter your name");
        playerel = "";
    }else  if(playerObj.chips == "") {
        alert("Please refresh and enter your chips");
        playerel = "";
    } else {
        playerel.innerText = playerObj.name + ": $" + playerObj.chips;
    }
}
checkCrendentilas()

function startGame() {
    isAlive = true

    let firstNumber = generateRandom();
    let lastnumber = generateRandom();

    if(playerObj.name == "" && playerObj.chips == ""){
      alert("please refresh and  enter Name and chips to play")      
    } else {
        cards.push(firstNumber,lastnumber);
        sum = firstNumber + lastnumber;
    }
    renderGame();
}

function generateRandom() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;

    if (randomNumber === 1) {
        return 11
    } else if (randomNumber == 11 && 12 && 13) {
        return 10
    } else {
        return randomNumber
    }
}

function renderGame() {
    messageEl.textContent = message;
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = `Sum: ${sum}`;
    if(sum <=20) {
        message = "Do you want to draw another card";
    } else if(sum === 21) {
        message = "You have got a Black Jack";
        hasBlackJack = true
    } else {
        message = "You are out of the game";
        isAlive = false;
    }
    
    
}



function newCard() {
    if (isAlive == true && hasBlackJack == false) {
        let card = generateRandom()
        sum += card
        cards.push(card)
        renderGame()
    }
}