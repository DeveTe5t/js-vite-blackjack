import _ from 'underscore';

/**
 * This function creates a new deck
 * @param {Array<String>} cardTypes Example: ['C', 'D', 'H', 'S']
 * @param {Array<String>} especialTypes Example: ['A', 'J', 'Q', 'K']
 * @returns {Array<String>} return a new card deck
 */
export const createDeck = (cardTypes, especialTypes) => {

    if (!cardTypes || cardTypes.length === 0) throw new Error('cardTypes is required as an string array');
    if (!especialTypes || especialTypes.length === 0) throw new Error('especialTypes is required as an string array');

    let deck = [];
    for (let i = 2; i <= 10; i++) {

        for (let cardType of cardTypes) {

            deck.push(i + cardType);
        }
    }

    for (let cardType of cardTypes) {
        for (let special of especialTypes) {
            deck.push(special + cardType);
        }
    }

    return _.shuffle(deck);
}

// export default createDeck;
