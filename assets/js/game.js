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
-01. Create a random number generator for the ai from 19-120.
-02. Create a random number generator for the crystals from 1-12.
-03. Create an object to collect all the values from the clicked crystals.
-04. Create an algorithm that adds the collected values from click events.
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

// FUNCTIONS

var getRandomArbitrary = function getRandomArbitrary(min, max) {/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random */
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}; //end getRandomArbitrary

// OBJECTS

var app = {
  ui: {
    board: { title: 'crystal collector' },
    instructions: {
      heading: 'Instructions',
      content: 'You will be given a random number at the start of the grame. \
                There are four crystals below. By clicking on a crystal you will add a specific amount of points to your total score. \
                You win the game by matching your total score to the random number, \
                you lose the game if your total score goes above the random number. \
                The value of each crystal is hidden from you until you click on it. \
                When the game starts, the program will change the values of each crystal.'
    } //end instructins
  }, //end ui
  debugger: function(title,theVariable){

      if(game.debug) {
          console.log(title,theVariable);
      };
  }
}; //end app

var game = {
  debug: false,
  scoreCard:  {
      message: {
          uiName: $("#message"),
          won: 'You won!',
          loss: 'You loss!',
          updateUi: function (theText) {
              //Give a shortname
              var updateMessage = this.uiName;
              updateMessage.text(theText);
              updateMessage.transition({ scale: [1.11] });
              updateMessage.transition({ scale: [1] });

              return updateMessage.text(theText);
          }
      },
      winBoard: {
          uiName: $("#sp-wins"),
          counter: null,
          total: 0,
          bucket: []
      },
      lossBoard: {
          uiName: $("#sp-losses"),
          counter: null,
          total: 0,
          bucket: []
      }
  },//socreCard
  totalScore: {
      number: 0,
      uiName: $("#sp-totalScore"),
      bucket: []
  },//totalScore
  magicEightBall: {
      name: 'hal',
      uiName: $("#sp-halRandom"),//"#sp-aiRandomNum"
      createRandomNumber: function(){

          // Testing
          if (game.debug) {
            console.log("magicEightBall: createRandomNumber");
          };

          // VARIABLES
          var randomNumber = 0;

          // RETURN a random number from 19 to 120
          return randomNumber = getRandomArbitrary(19, 121); //(inclusive,exclusive)
    },
    updateUi: function(number) {
        //Assign the random number to the ui.
        game.magicEightBall.uiName.attr('data-random', number);
      }
  },//magicEightBall
  crystals: {
    red: {
      name: 'redCrystal',
      uiName: $("#redCrystal"),
    },
    blue: {
      name: 'blueCrystal',
      uiName: $("#blueCrystal"),
    },
    yellow: {
      name: 'yellowCrystal',
      uiName: $("#yellowCrystal"),
    },
    green: {
      name: 'greenCrystal',
      uiName: $("#greenCrystal"),
    },
    createRandomNumber: function(min,max){
      // Testing
      app.debugger('method','crystals.createRandomNumber');

      // VARIABLES
      var randomNumber = 0;

      // RETURN a random number from 1 to 12
      return randomNumber = getRandomArbitrary(1, 13); //(inclusive,exclusive)
    },

  },
  resetBuckets: function() {
      game.totalScore.bucket = [];
  },
  resetCounters: function() {
      game.scoreCard.winBoard.counter   = 0;
      game.scoreCard.lossBoard.counter  = 0;
  },
  resetTotalScore: function() {
      game.totalScore.number    = 0;
      game.totalScore.uiName.text(game.totalScore.number);
  }

}; // objGame


function createHalRandom() {

    // Create and assign a new random number
    halRandomNum = game.magicEightBall.createRandomNumber();

    // Testing
    app.debugger("reset halRandomNum:",halRandomNum);

    // Update the ui to show the new random number
    game.magicEightBall.updateUi(halRandomNum);

}; //end createHalRandom

var createCrysatalsRandom = function() {

    // Create and assign a new random number
    redCrystalRandomNum     = game.crystals.createRandomNumber();
    blueCrystalRandomNum    = game.crystals.createRandomNumber();
    yellowCrystalRandomNum  = game.crystals.createRandomNumber();
    greenCrystalRandomNum   = game.crystals.createRandomNumber();

    // Testing
    app.debugger("reset redCrystalRandomNum:",     redCrystalRandomNum     );
    app.debugger("reset blueCrystalRandomNum:",    blueCrystalRandomNum    );
    app.debugger("reset yellowCrystalRandomNum:",  yellowCrystalRandomNum  );
    app.debugger("reset greenCrystalRandomNum:",   greenCrystalRandomNum   );


}; //end createCrysatalsRandom

var shakeBall = function(){

    // ui Ball name
    var ball = $("#ball");

    // animate the ball
    ball.animate({ left: "+=10px" }, 100 );
    ball.animate({ left: "-=10px" }, 100 );
    ball.animate({ left: "+=10px" }, 100 );
    ball.animate({ left: "-=10px" }, 100 );

  }; //end shakeBall

  var resetGame = function() {
    // reset these particular settings
    game.resetBuckets();
    game.resetCounters();
    game.resetTotalScore();
    createHalRandom();
    createCrysatalsRandom();
    shakeBall();

}; //end resetGame

var bucketAdder = function(arrayOfNumbers) {

    // Variables
    var total   = 0;

    // Testing
    app.debugger('bucketAdder _arrayOfNumbers',arrayOfNumbers);

    // Loop through array and add the array values
    for (var number in arrayOfNumbers) {
        // Variable
        var value = parseInt(arrayOfNumbers[number]);

        // Add value to total
        total += value;

        //Testing
        app.debugger("total:",total);

    } //end for

    // RETURN bucketAdder total
    return total;

}; //end bucketAdder

// Check to see if hal or the user won
var whoWon = function() {

    //Testing
    app.debugger("whoWon totalScore", game.totalScore.number);
    app.debugger("whoWon halRandomNum", halRandomNum);

    if(game.totalScore.number === halRandomNum) {

        // Add one to the counter
        game.scoreCard.winBoard.counter = 1;

        // Add the win to the bucket of wins
        game.scoreCard.winBoard.bucket.push(game.scoreCard.winBoard.counter);

        // Total winsBucket
        game.scoreCard.winBoard.total = bucketAdder(game.scoreCard.winBoard.bucket);

        // Testing
        app.debugger('Message:', game.scoreCard.message.won);
        app.debugger('wins:', game.scoreCard.lossBoard.counter);
        app.debugger('winBoard bucket:', game.scoreCard.winBoard.bucket);

        // Update socreCard ui
        game.scoreCard.winBoard.uiName.text(game.scoreCard.winBoard.total);
        game.scoreCard.message.uiName.removeAttr("hidden");
        game.scoreCard.message.uiName.css('color','#49fb35');
        game.scoreCard.message.updateUi(game.scoreCard.message.won);

        // Reset game values for next play
        resetGame();

    }//end won if

    if(game.totalScore.number > halRandomNum) {

        // Add one to counter
        game.scoreCard.lossBoard.counter = 1;

        // Add the loss to the bucket of losses
        game.scoreCard.lossBoard.bucket.push(game.scoreCard.lossBoard.counter);

        // Total lossesBucket
        game.scoreCard.lossBoard.total = bucketAdder(game.scoreCard.lossBoard.bucket);

        // Testing
        app.debugger('Message:', game.scoreCard.message.loss);
        app.debugger('loss:', game.scoreCard.lossBoard.counter);
        app.debugger('lossBoard bucket:', game.scoreCard.lossBoard.bucket);

        // Update scoreCard ui
        game.scoreCard.lossBoard.uiName.text(game.scoreCard.lossBoard.total);
        game.scoreCard.message.uiName.removeAttr("hidden");
        game.scoreCard.message.uiName.css('color','#FF0048');
        game.scoreCard.message.updateUi(game.scoreCard.message.loss);

        // Reset game values for next play
        resetGame();

    } //end loss if

} //end whoWon

// Assign the audio ui to a named variable
var deck = document.getElementById("cassettePlayer");

// Assign the billboard words to a variable
var crystalBoard = $('#no');

// Animation of the billboard word crystals
var crystalAnimation = {
  'reblinkProbability': 0.1,
  'blinkMin': 0.2, 'blinkMax': 0.6,
  'loopMin': 8, 'loopMax': 10,
  'color': '#ffffff',
  'glow': ['0 0 80px #ffffff', '0 0 30px #008000', '0 0 6px #0000ff']
};

// Assign collector word to a variable
var collectorBoard = $('#vacancy');

// Animation of the billboard word collector
var collectorAnimation = {
  'blink': 1,
  'off': 1,
  'color': 'Red',
  'glow': ['0 0 80px Red', '0 0 30px FireBrick', '0 0 6px DarkRed']
};

// Create Hals random number
var halRandomNum = game.magicEightBall.createRandomNumber();

// Testing
app.debugger("halRandomNum:",halRandomNum);


// Create the Crysals random number
var redCrystalRandomNum     = game.crystals.createRandomNumber();
var blueCrystalRandomNum    = game.crystals.createRandomNumber();
var yellowCrystalRandomNum  = game.crystals.createRandomNumber();
var greenCrystalRandomNum   = game.crystals.createRandomNumber();

// Testing
app.debugger("redCrystalRandomNum:",    redCrystalRandomNum     );
app.debugger("blueCrystalRandomNum:",   blueCrystalRandomNum    );
app.debugger("yellowCrystalRandomNum:", yellowCrystalRandomNum  );
app.debugger("greenCrystalRandomNum:",  greenCrystalRandomNum   );

// BGN LOGIC----------------------------------------------------------
$(document).ready(function(){

  // Change the volume of the audio player
  deck.volume = 0.1;

  // animate the main board word crysatal
  crystalBoard.novacancy(crystalAnimation);

  // animate the main board word collector
  collectorBoard.novacancy(collectorAnimation);

  // update the ui to show the new random number
  game.magicEightBall.updateUi(halRandomNum);

  //Assign the random crystal number to the ui.

  game.crystals.red.uiName.click(function() {

      // Add the random number to the red bucket array
      game.totalScore.bucket.push(redCrystalRandomNum);

      // Testing
      app.debugger('red totalScore WhenClicked:',game.totalScore.bucket);

      // Add all red bucket values to totalScore
      game.totalScore.number = bucketAdder(game.totalScore.bucket);

      // Testing
      app.debugger('red totalScore',game.totalScore.number);

      // Assign the totalScore number to the ui.
      game.totalScore.uiName.text(game.totalScore.number);
      // Check who won
      whoWon();

  });// red

  game.crystals.blue.uiName.click(function() {

      // Add the random number to the bucket array
      game.totalScore.bucket.push(blueCrystalRandomNum);

      // Testing
      app.debugger('blueBucketWhenClicked:',game.totalScore.bucket);

      // Add all bucket values to totalScore number
      game.totalScore.number = bucketAdder(game.totalScore.bucket);

      // Testing
      app.debugger('blue totalScore',game.totalScore.number);

      // Assign the totalScore number to the ui.
      game.totalScore.uiName.text(game.totalScore.number);

      // Check who won
      whoWon();

  });// blue

  game.crystals.yellow.uiName.click(function() {

      // Add the random number to the bucket array
      game.totalScore.bucket.push(yellowCrystalRandomNum);

      // Testing
      app.debugger('yellowBucketWhenClicked:',game.totalScore.bucket);

      // Add all bucket values to totalScore number
      game.totalScore.number = bucketAdder(game.totalScore.bucket);

      // Testing
      app.debugger('yellow totalScore',game.totalScore.number);

      // Assign the totalScore number to the ui.
      game.totalScore.uiName.text(game.totalScore.number);

      // Check who won
      whoWon();

  });// yellow

  game.crystals.green.uiName.click(function() {

      // Add the random number to the bucket array
      game.totalScore.bucket.push(greenCrystalRandomNum);

      // Testing
      app.debugger('greenBucketWhenClicked:',game.totalScore.bucket);

      // Add all bucket values to totalScore number
      game.totalScore.number = bucketAdder(game.totalScore.bucket);

      // Testing
      app.debugger('green totalScore',game.totalScore.number);

      // Assign the totalScore number to the ui.
      game.totalScore.uiName.text(game.totalScore.number);

      // Check who won
      whoWon();

  });// green


});//document.ready

// END LOGIC--------------------------------------------------------

/*--------END CODE---------------*/
