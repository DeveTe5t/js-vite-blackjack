/**
 * This function is for taka a card
 * @param {Array<String>} deck a string array
 * @returns {String} return an card
 */
export const askCard = (deck) => {
    if (!deck || deck.length === 0) throw new Error('deck is required as a string array');

    return deck.pop();
}