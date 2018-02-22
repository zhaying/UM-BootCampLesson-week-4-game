/* ----------BGN Instructions----------
There will be four crystals displayed as buttons on the page.
The player will be shown a random number at the start of the game.

When the player clicks on a crystal,
it will add a specific amount of points to the player's total score.

Your game will hide this amount until the player clicks a crystal.
When they do click one, update the player's score counter.

The player wins if their total score matches the random number
from the beginning of the game.
The player loses if their score goes above the random number.

The game restarts whenever the player wins or loses.

When the game begins again, the player should see a new random number.
Also, all the crystals will have four new hidden values. Of course,
the user's score (and score counter) will reset to zero.

The app should show the number of games the player wins and loses.
To that end, do not refresh the page as a means to restart the game.
-------------END Instructions---------- */


/* ----------BGN PSEUDO CODE-----------
01. Create a random number generator for the ai from 19-120.
02. Create a random number generator for the crystals from 1-12.
03. Create an object to collect all the values from the clicked crystals.
04. Create an algorithm that adds the collected values from click events.
05. Create an notification function to alert the user of a win or a loss.
06. Create update function for variables
    a. if there is a win update the win variable by 1
    b. if there is a loss update the loss variable by 1
07. Create update function for ui values
    a. if there is a win call notification function and display win message
    b. if there is a loss call notification function and display loss message
08. Create an in game reset function
    a. clear the total score
    b. generate new random numbers for each of the crystals and the ai robot
09. Create a refresh function
    a. clear the wins and Losses
    b. generate new random numbers for each of the crystals and the ai robot
10. Create logic for when the total score matches the ai random numbers
    a. call update variables function
    b. call update ui function
    c. call in game reset function
    d. call ai random generator
    e. call crystal random generator
11. Create logic for when the total score is greater than the ai random number.
    a. call update variables function
    b. call update ui function
    c. call in game reset function
    d. call ai random generator
    e. call crystal random generator

----------END PSEUDO CODE----------- */

/* --------BGN CODE----------------- */

// VARIABLES

// FUNCTIONS

// LOGIC

/*--------END CODE---------------*/
