import { valueCard } from './';

/**
 * Function to manage the players' points
 * @param {String} card card name 
 * @param {Number} turn player turn: the last turn is the computer
 * @param {Array<Number>} playersPoints Number array players points
 * @param {HTMLElement} htmlPoints html element for players points
 * @returns {Array<String>}
 */

export const acummulatePoints = (card, turn, playersPoints, htmlPoints) => {

    if (!card || card.length === 0) throw new Error('card is required as an string');
    if (isNaN(turn) || turn < 0) throw new Error('turn is required as a number equal or greater than 0');
    if (!playersPoints || playersPoints.length === 0) throw new Error('playersPoints is required as an number array');
    if (!htmlPoints || htmlPoints.length === 0) throw new Error('htmlPoints is required as an string');

    playersPoints[turn] += valueCard(card);
    htmlPoints[turn].innerText = playersPoints[turn];

    return playersPoints[turn];
}