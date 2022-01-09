// Player
// Using Object
let player = {
    money: "Money",
    chips: 1200
};

// ! Main variables

// Creating array to draw a card and sum be default by (0)
let cards = [];
let sum = 0;

// Create variable that be are default with Boolean, because you don't have Blackjack.
let hasBlackJack = false;

// Assign it to false with Boolean
let isAlive = false;

// Assign it's value to empty string
let message = "";


// ! Transistion from HTML to JS

// Store the message 
// Store the sum
// Store the card
// Store the player
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");


// ! Game "Balck Jack"

// How much player have money with object
playerEl.textContent = player.money + ": $" + player.chips;

// ! function that you always creating a random card

function getRandomCard() {
    // That we get random number up to 13 , but we plus a one that number would be a 13
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    // Generate card from 10 to king
    if (randomNumber > 10) {
        return 10
        // Generate a Ace
    } else if (randomNumber === 1) {
        return 11
        // And lower tier numberd from 2 to 9
    } else {
        return randomNumber
    }
};

// ! Responsive button "Start Game"

function startGame() {
    // When you startgame you true
    isAlive = true
    // Generate two random numbers
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    // Render the cards
    cards = [firstCard, secondCard]
    // Render the sum
    sum = firstCard + secondCard
    renderGame()
};

// ! Create the body of the game how it's works 

function renderGame() {
    // Render the cards
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    // Render the sum
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You won, you have a Blackjack!"
    // Track statment if he right then is true
        hasBlackJack = true
    } else {
        message = "You lost, wanna try again?"
    // make that player out of the game if he has over 21 with  boolean (false)
        isAlive = false
    }
    // The end the function says if you win or lose or draw another card if you wanna
    messageEl.textContent = message
};

// ! Responsive button "New Cards"

function newCard() {
    // Give player card if alive or doesn't have a Blackjack
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        // Push the card in the array of other 2 cards
        cards.push(card)
        renderGame()        
    }
};