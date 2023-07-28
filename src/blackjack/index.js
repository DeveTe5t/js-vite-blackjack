import _ from 'underscore';
// import { createDeck as createNewDeck } from './usecases/create-deck';
import { askCard, createDeck, createCard, acummulatePoints, computerTurn } from './usecases';

// Module pattern
// Self-invoked anonymous function
const myGame = (() => {
    'use strict'

    /**
     * 2C = Two of Clubs
     * 2D = Two of Diamonds
     * 2H = Two of Hearts
     * 2S = Two of Spades
     */

    let deck = [];
    const cardTypes = ['C', 'D', 'H', 'S'],
        specials = ['A', 'J', 'Q', 'K'];

    let playersPoints = [];

    // HTML references
    const btnAsk = document.querySelector('#btnAsk'),
        btnStop = document.querySelector('#btnStop'),
        btnNew = document.querySelector('#btnNew');

    const divCardsPlayers = document.querySelectorAll('.divCards'),
        htmlPoints = document.querySelectorAll('small');

    // The last player will always be the computer
    const initializeGame = (numberOfPlayers = 2) => {
        deck = createDeck(cardTypes, specials);

        playersPoints = [];
        for (let i = 0; i < numberOfPlayers; i++) {
            playersPoints.push(0);
        }

        htmlPoints.forEach(element => element.innerText = 0);
        divCardsPlayers.forEach(element => element.innerHTML = '');

        btnAsk.disabled = false;
        btnStop.disabled = false;
    }

    // Events
    btnAsk.addEventListener('click', () => {

        const card = askCard(deck);
        const playerPoints = acummulatePoints(card, 0, playersPoints, htmlPoints);

        createCard(card, 0, divCardsPlayers);

        if (playerPoints > 21) {
            console.warn('So sorry, you lost');
            btnAsk.disabled = true;
            btnStop.disabled = true;
            computerTurn(playerPoints, deck, playersPoints, htmlPoints, divCardsPlayers);
        }
        else if (playerPoints === 21) {
            console.warn('21, great!');
            btnAsk.disabled = true;
            btnStop.disabled = true;
            computerTurn(playerPoints, deck, playersPoints, htmlPoints, divCardsPlayers);
        }
    });

    btnStop.addEventListener('click', () => {

        btnStop.disabled = true;
        btnAsk.disabled = true;

        computerTurn(playersPoints[0], deck, playersPoints, htmlPoints, divCardsPlayers);
    });

    btnNew.addEventListener('click', () => {

        initializeGame();
    });

    return {
        newGame: initializeGame
    }

})();
