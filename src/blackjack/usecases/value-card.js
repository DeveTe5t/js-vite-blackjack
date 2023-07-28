/**
 * This function is for get value of the card
 * @param {String} card Example: 2C
 * @returns {Number} return number value card 
 */
export const valueCard = (card) => {

    if (!card || card.length === 0) throw new Error('card is required as an string');

    const value = card.substring(0, card.length - 1);
    return isNaN(value) ?
        (value === 'A') ? 11 : 10
        : value * 1;
}