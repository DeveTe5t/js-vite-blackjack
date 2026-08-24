/**
 * Function to determine the winning player
 * @param {Array<Number>} playersPoints Number array players points
 */
export const determineWinner = (playersPoints) => {

    if (!playersPoints || playersPoints.length === 0) throw new Error('playersPoints is required as a number array');

    const [minimumPoints, computerPoints] = playersPoints;

    setTimeout(() => {
        if (computerPoints === minimumPoints) {
            alert('Nobody wins :(');
        }
        else if (minimumPoints > 21) {
            alert('Computer wins');
        }
        else if (computerPoints > 21) {
            alert('Player wins');
        }
        else {
            alert('Computer wins');
        }
    }, 400);
}