//card options
const cardArray = [
    {
        name: "fries",
        img: "img/fries.png"
    },
    {
        name: "cheeseburger",
        img: "img/cheeseburger.png"
    },
    {
        name: "ice-cream",
        img: "img/ice-cream.png"
    },
    {
        name: "pizza",
        img: "img/pizza.png"
    },
    {
        name: "milkshake",
        img: "img/milkshake.png"
    },
    {
        name: "hotdog",
        img: "img/hotdog.png"
    },
    {
        name: "fries",
        img: "img/fries.png"
    },
    {
        name: "cheeseburger",
        img: "img/cheeseburger.png"
    },
    {
        name: "ice-cream",
        img: "img/ice-cream.png"
    },
    {
        name: "pizza",
        img: "img/pizza.png"
    },
    {
        name: "milkshake",
        img: "img/milkshake.png"
    },
    {
        name: "hotdog",
        img: "img/hotdog.png"
    },

]

cardArray.sort(() => 0.5 - Math.random())
console.log(cardArray)

const grid = document.querySelector(".grid")
const resultDisplay = document.querySelector("span")
let cardsChosen = []
let cardsChosenIds = []
let cardsWon = []

function createBoard(){
    for(let i = 0; i < cardArray.length; i++){
        let card = document.createElement("img")
        card.setAttribute("src", "img/blank.png")
        card.setAttribute("data-id", i)
        card.addEventListener("click", flipcard)
        grid.appendChild(card)
    }
    
}


function flipcard(){
    let cardId = this.getAttribute("data-id")
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    this.setAttribute("src", cardArray[cardId].img)
    if (cardsChosen.length === 2){
        setTimeout(checkForMatch, 500)
    }

}

function checkForMatch(){
    const cards = document.querySelectorAll("img")
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]

    if(optionOneId === optionTwoId){
        alert("You have picked the same image")
        cards[optionOneId].setAttribute("src", "img/blank.png")
        cards[optionTwoId].setAttribute("src", "img/blank.png")
    }else if(cardsChosen[0] === cardsChosen[1]){
        alert("You have found a match!!")
        cards[optionOneId].setAttribute("src", "img/white.png")
        cards[optionTwoId].setAttribute("src", "img/white.png")
        cards[optionOneId].removeEventListener("click", flipcard)
        cards[optionTwoId].removeEventListener("click", flipcard)
        cardsWon.push(cardsChosen)
    }else{
        cards[optionOneId].setAttribute("src", "img/blank.png")
        cards[optionTwoId].setAttribute("src", "img/blank.png")
        alert("Sorry try again!")
    }
    cardsChosen = []
    cardsChosenIds = []
    resultDisplay.innerHTML = cardsWon.length

    if(cardsWon.length === cardArray.length / 2){
        resultDisplay.textContent = "Congratulations!! You have won!!"
    }

    console.log(cardsWon)
    console.log(cardsChosen)
}

createBoard()
