// Creating variables for a letter array and to hold the number of wins, losses, and guessesLeft. They start at 0.
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "Z"];
var wins = 0;
var losses = 0;
var guesses = 9;
var guessesSoFar = [];
var userGuess = 0;
var computerGuess = 0;


//Created an event to record the letter pressed on keyboard//
document.onkeyup = function (event) {
    var userGuess = event.key;

    // Randomly chooses a choice from the options array. This is the Computer's guess.
    var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "Z"];
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];


    //code to verify if user selected the same letter as computer//
    //Looping through for a total of 10 times which is the maximum number of guesses//
    for (i = 0; i < 10; i++) {
        if (userGuess === computerGuess) {
            wins++;

        } else { 
            (userGuess !== computerGuess);
            guessesSoFar.push(userGuess);
            losses++;
            guesses--;
     //Code isn't working and I'm not sure why. The idea in the If/Else statment is for the random letter selected by the computer to check//
     //against the event.onkeyup function. I kept getting local variables underfined for computerGuess, computerChoices, and html which I //
     //could not figure out//
     
        }

        // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
        var html =
            "<h1> The Psychic Game</h1>" +
            "<h2> Guess what number I'm thinking of <h2>" +
            "<p>wins: " + wins + "</p>" +
            "<p>losses: " + losses + "</p>" +
            "<p>Guesses Left: " + guesses + "</p>" +
            "<p>Your Guesses so Far: " + guessesSoFar + "</p>";


        // Set the inner HTML contents of the #game div to our html string//
        //Since the code isn't working, I'm not sure if it will link properly with my "index.html" file//

    }
    document.querySelector("#game").innerHTML = html;
    document.getElementById('p').innerHTML = "Wins: " + wins;
    document.getElementById('p').innerHTML = "losses: " + losses;
    document.getElementById('p').innerHTML = "Guesses left: " + guesses;
    document.getElementById('p').innerHTML = "Your Guesses so Far: " + guessesSoFar;
};
