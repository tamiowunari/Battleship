var randomLocation = Math.floor(Math.random()*5);
var location1 = randomLocation, location2 = location1 + 1, location3 = location2 + 1;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

while (isSunk==false) {
    guess = prompt('Ready, Aim, Fire! (enter a number 0-6): ');
    if (guess < 0 || guess > 6) {
        alert('Please enter a valid cell number!');
    }else {
        guesses++;
        if (guess==location1||guess==location2||guess==location3) {
            hits++;
            alert('HIT!');
            if (hits==3) {
                isSunk = true;
                alert('You sank my battleship!');
            }
        }else {
            alert('MISS');
        }
    }
}
var stats = `You took ${guesses} guesses to sink the battleship, meaning your shooting accuracy was ${Math.floor((hits/guesses)*100)}%`;
alert(stats);

//Back to doing a little more QA pg69.