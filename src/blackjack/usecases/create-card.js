/**
 * Function for create card
 * @param {String} card card name: example 2C 
 * @param {Number} turn player turn: 0 is the computer
 * @param {HTMLElement} divCardsPlayers html element for card players container 
 */
export const createCard = (card, turn, divCardsPlayers) => {

    if (!card || card.length === 0) throw new Error('card is required as an string');
    if (isNaN(turn) || turn < 0) throw new Error('turn is required as a number equal or greater than 0');
    if (!divCardsPlayers || divCardsPlayers === 0) throw new Error('divCardsPlayers is required as an string');

    const cardImage = document.createElement('img');
    cardImage.src = `assets/cartas/${card}.webp`;
    cardImage.classList.add('theCard');
    cardImage.alt = card;
    divCardsPlayers[turn].append(cardImage);
}