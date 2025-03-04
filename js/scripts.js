// inject year in footer
const rightNow = new Date();
document.querySelector('#year').textContent = rightNow.getFullYear()

// navigation elements
const navElement = document.querySelector("#theNav")
const btnElement = document.querySelector("#theButton")

// event listener for the button to open and close nav
btnElement.addEventListener('click', ()=> {
    btnElement.classList.toggle('open');
    navElement.classList.toggle('open');
});

// grab reviews from the json file
import { reviews } from '../data/reviews.js'
console.log(reviews);

//create an empty card
const reviewCards = document.querySelector("#cards")

for (let x = 0; x < reviews.length; x++) {

    // create section for the cards
    const cardSection = document.createElement('section')
    const cardName = document.createElement('h3')
    cardName.textContent = reviews[x].name

    const cardReview = document.createElement('p')
    cardReview.textContent = reviews[x].comment

    const cardRating = document.createElement('div')

    for (let star = 0; star < reviews[x].rating; star++) {
        // create the star elements
        const starAmount = document.createElement('img')
        starAmount.src ="./images/star-solid.svg"
        cardRating.appendChild(starAmount)
    }

    // build the card
    cardSection.appendChild(cardName);
    cardSection.appendChild(cardRating);
    cardSection.appendChild(cardReview);

    // add card to page 
    reviewCards.appendChild(cardSection)

} // end card loop