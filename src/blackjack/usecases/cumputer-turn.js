import { acummulatePoints } from "./";
import { askCard } from "./";
import { createCard } from "./";
import { determineWinner } from "./";

/**
 * Function executed when is computer turn
 * @param {Number} minimumPoints Player points accomulate
 * @param {Array<String>} deck a string array
 * @param {Array<Number>} playersPoints Number array players points
 * @param {HTMLElement} htmlPoints html element for players points
 * @param {HTMLElement} divCardsPlayers html element for card players container 
 */
export const computerTurn = (minimumPoints, deck, playersPoints, htmlPoints, divCardsPlayers) => {

    if (!minimumPoints || minimumPoints.length === 0) throw new Error('minimumPoints is required as a number array');
    if (!deck || deck.length === 0) throw new Error('deck is required as a string array');
    if (!playersPoints || playersPoints.length === 0) throw new Error('playersPoints is required as an number array');
    if (!htmlPoints || htmlPoints.length === 0) throw new Error('htmlPoints is required as an string');
    if (!divCardsPlayers || divCardsPlayers === 0) throw new Error('divCardsPlayers is required as an string');

    let computerPoints = 0;
    do {

        const card = askCard(deck);
        computerPoints = acummulatePoints(card, playersPoints.length - 1, playersPoints, htmlPoints);

        createCard(card, playersPoints.length - 1, divCardsPlayers);
    } while ((computerPoints < minimumPoints) && (minimumPoints <= 21));

    determineWinner(playersPoints);
}