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

// BGN VARIABLES
var bucket        = [];
var winsBucket    = [];
var lossesBucket  = [];
var totalWins     = 0;
var totalLosses   = 0;
var totalScore    = 0;
var halRandomNum  = 0;
// END VARIABLES

// BGN FUNCTIONS-----------------------------------------------------------

// RANDOM NUMBER FOR AI
var aiRandom = function(min,max){
  // VARIABLES
  var aiRandomNum = 0;
  // function name
  console.log("aiRandom FUN");
  // call random number generator
  aiRandomNum = getRandomArbitrary(min, max);
  // Testing
  //console.log("aiRandomNum:",aiRandomNum);
  return aiRandomNum;

};//fun aiRandom

function createHalRandom() {
  // name for this ai
  halRandomNum         = aiRandom(19, 121); //(inclusive,exclusive)
  //Assign the random ai number to the ui.
  var uiHal = $("#sp-aiRandomNum");
  uiHal.text(halRandomNum);
  var uiHalBall = $('#sp-halRandom');
  //uiHalBall.attr('data-before','9');
  //uiHalBall.dataset.random;
  uiHalBall.attr('data-random', halRandomNum);
};
// RANDOM NUMBER BETWEEN TWO VALUES
function getRandomArbitrary(min, max) {/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random */
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive

}//fun getRandomArbitrary

// RANDOM NUMBER FOR CRYSTALS
var crystalRandom = function(min,max,name){
  // VARIABLES
  var crystalRandomNum = 0;
  var _name = name;
  // function name
  console.log("crystalRandom FUN for " + name);
  // call random number generator
  crystalRandomNum = getRandomArbitrary(min, max);
  // Testing
  console.log("crystalRandomNum:",name + ',' + crystalRandomNum);
  return crystalRandomNum;

};//fun crystalRandom

function createCrystals() {
  // name for the crystals
  var redCrystal     = crystalRandom(1, 13, 'redCrystal'    );  //(inclusive,exclusive,rockName)
  var blueCrystal    = crystalRandom(1, 13, 'blueCrystal'   );  //(inclusive,exclusive,rockName)
  var yellowCrystal  = crystalRandom(1, 13, 'yellowCrystal' );  //(inclusive,exclusive,rockName)
  var greenCrystal   = crystalRandom(1, 13, 'greenCrystal'  );  //(inclusive,exclusive,rockName)
  var theCrystals = {};
  theCrystals = {
    red: redCrystal,
    blue: blueCrystal,
    yellow: yellowCrystal,
    green: greenCrystal
  };
  console.log("objCrystals",theCrystals);
  return theCrystals;
};


function statusMessage(message){
  var message;

  var updateMessage = $("#message");
  updateMessage.text(message);
  updateMessage.transition({ scale: [1.11] });
  updateMessage.transition({ scale: [1] });
  //updateMessage.animate({ scale: -2 }, 1000 );

  // updateMessage.animate({ left: "-=50px" }, 1000 );
  // updateMessage.animate({ left: "+=150px" }, 1000 );
  // updateMessage.animate({ left: "-=100px" }, 1000 );
  return updateMessage.text(message);
}//end statusMessage

function resetCrystals() {
  var theCrystalColor = createCrystals();
}//end resetCrystals

function resetTotalScore() {
  //Reset variables
  bucket        = [];
  totalScore    = 0;
  //Assign the totalSocre number to the ui.
  var uiTotalScore = $("#sp-totalScore");
  uiTotalScore.text(totalScore);

};//end resetTotalScore

// shake eight BALL
var shakeBall = function(){
  var ball = $("#ball");
  ball.animate({ left: "+=10px" }, 100 );
  ball.animate({ left: "-=10px" }, 100 );
  ball.animate({ left: "+=10px" }, 100 );
  ball.animate({ left: "-=10px" }, 100 );
};
// END shake eight BALL

function resetGame() {
  resetTotalScore();
  createHalRandom();
  shakeBall();
  resetCrystals();
}//end resetGame

// CRYSTAL NUMBER COLLECTOR
var crystalCollector = function(crystalNumber) {
  //ADD crystal numbers to the array
  bucket.push(crystalNumber);
  //Testing
  console.log("crystalBucket:",bucket);
  return bucket;

};//fun crystalCollector

// SOCRE NUMBER COLLECTOR
var winsCollector = function(scoreNumber) {
  //ADD crystal numbers to the array
  winsBucket.push(scoreNumber);
  //Testing
  console.log("crystalBucket:",winsBucket);
  return winsBucket;

};//fun crystalCollector

var lossesCollector = function(scoreNumber) {
  //ADD crystal numbers to the array
  lossesBucket.push(scoreNumber);
  //Testing
  console.log("crystalBucket:",lossesBucket);
  return lossesBucket;

};//fun crystalCollector

// CRYSTAL BUCKET ADDER
var bucketAdder = function(arrayOfNumbers) {
  //VARIABLES
  var total   = 0;
  // Loop through array and add values to total
  for (var number in arrayOfNumbers) {
    //VARIABLES
    var value = arrayOfNumbers[number];
    //ADD ARRAY values together
    total += value;
    //Testing
    // console.log("index",number);
    // console.log("arrayOfNumbers",arrayOfNumbers);
    // console.log("value",value);
    console.log("_total:",total);

  }//END for
  return total;

};//fun bucketAdder

var whoWon = function() {
  //VARIABLES
  var message;
  //Check who has won
  console.log("won totalScore typeof",typeof(totalScore) +","+ totalScore);
  console.log("won halRandomNum typeof",typeof(halRandomNum) +","+ halRandomNum);

  if(totalScore == halRandomNum) {
    //VARIABLES
    message = "You WIN!";
    var wins = 1;
    var winsBucket  = winsCollector(wins);
    totalWins       = bucketAdder(winsBucket);
    //Testing
    console.log(message,wins);
    //Update ui
    var uiWins = $("#sp-wins");
    uiWins.text(totalWins);

    //Show Message
    var theMessage = $("#message");
    theMessage.removeAttr("hidden");
    theMessage.css('color','#49fb35');
    statusMessage(message);
    resetGame();


  }//end if

  if(totalScore > halRandomNum) {
    //VARIABLES
    message = "You Lose!";
    var loss = 1;
    var lossesBucket  = lossesCollector(loss);
    totalLosses       = bucketAdder(lossesBucket);
    //Testing
    console.log("You Lose!",loss);
    //Update ui
    var uiLosses = $("#sp-losses");
    uiLosses.text(totalLosses);

    //Show Message
    var theMessage = $("#message");
    theMessage.removeAttr("hidden");
    theMessage.css('color','#FF0048');
    statusMessage(message);
    resetGame();

  }//end if

}//whoWon

// END FUNCTIONS--------------------------------------------------------

// BGN NOTES
/* HTML id's list
    <section id="instructions">
    <div id="aiRandomNum">
      <span id="sp-aiRandomNum">0</span>
    <div id="scoreCard">
      <p>Wins: <span id="sp-wins">0</span></p>
      <p>Losses: <span id="sp-losses">0</span></p>
    <div id="cystalJar">
      <ul id="crystals">
        <li><img id="rock01" src="assets/img/red.jpg" alt="red crystal" height="42" width="42" /></li>
        <li><img id="rock02" src="assets/img/blue.jpg" alt="blue crystal" height="42" width="42" /></li>
        <li><img id="rock03" src="assets/img/yellow.jpg" alt="yellow crystal" height="42" width="42" /></li>
        <li><img id="rock04" src="assets/img/green.jpg" alt="green crystal" height="42" width="42" /></li>
    <div id="scoreLabel">
    <div id="scoreTotal">
      <span id="sp-totalScore">0</span>
      <p id="whodat">Writtten by: ZhAYinG</p>
*/
// END NOTES

// BGN LOGIC----------------------------------------------------------
$(document).ready(function(){
  var deck = document.getElementById("cassettePlayer");
deck.volume = 0.1;

  $('#no').novacancy({
        'reblinkProbability': 0.1,
        'blinkMin': 0.2,
        'blinkMax': 0.6,
        'loopMin': 8,
        'loopMax': 10,
        'color': '#ffffff',
        'glow': ['0 0 80px #ffffff', '0 0 30px #008000', '0 0 6px #0000ff']
  });

  $('#vacancy').novacancy({
    'blink': 1,
    'off': 1,
    'color': 'Red',
    'glow': ['0 0 80px Red', '0 0 30px FireBrick', '0 0 6px DarkRed']

  });

  // Retrieve Hals random number;
  createHalRandom();

  //Testing
  console.log("hal:",halRandomNum);

  var theCrystalColor = createCrystals();
  //Testing
  //var allCrystals = redCrystal +","+ blueCrystal +","+ yellowCrystal +","+ greenCrystal;
  //console.log( 'rbyg Crystal:', allCrystals);

  //Assign the random crystal number to the ui.
  var uiRedCrystal = $("#redCrystal");
  uiRedCrystal.click(function() {

    //Testing
    //console.log("uiRedCrystal:",redCrystal);
    //Add crystal to bucket
    var redBucket = crystalCollector(theCrystalColor.red);
    //Testing
    console.log("redBucket",redBucket);
    //Consume array and add VALUES
    totalScore = bucketAdder(redBucket);
    //Assign the totalSocre number to the ui.
    var uiTotalScore = $("#sp-totalScore");
    uiTotalScore.text(totalScore);
    whoWon();

  });//uiRedCrystal

  var uiBlueCrystal = $("#blueCrystal");
  uiBlueCrystal.click(function() {

    //Testing
    console.log("uiBlueCrystal:",blueCrystal);
    //Add crystal to bucket
    var blueBucket = crystalCollector(theCrystalColor.blue);
    //Testing
    //console.log("blueBucket",blueBucket);
    //Consume array and add VALUES
    totalScore = bucketAdder(blueBucket);
    //Assign the totalSocre number to the ui.
    var uiTotalScore = $("#sp-totalScore");
    uiTotalScore.text(totalScore);
    whoWon();

  });//uiBlueCrystal

  var uiYellowCrystal = $("#yellowCrystal");
  uiYellowCrystal.click(function() {

    //Testing
    console.log("uiYellowCrystal:",yellowCrystal);
    //Add crystal to bucket
    var yellowBucket = crystalCollector(theCrystalColor.yellow);
    //Testing
    //console.log("yellowBucket",yellowBucket);
    //Consume array and add VALUES
    totalScore = bucketAdder(yellowBucket);
    //Assign the totalSocre number to the ui.
    var uiTotalScore = $("#sp-totalScore");
    uiTotalScore.text(totalScore);
    whoWon();

  });//uiYellowCrystal

  var uiGreenCrystal = $("#greenCrystal");
  uiGreenCrystal.click(function() {

    //Testing
    console.log("uiGreenCrystal:",greenCrystal);
    //Add crystal to bucket
    var greenBucket = crystalCollector(theCrystalColor.green);
    //Testing
    //console.log("greenBucket",greenBucket);
    //Consume array and add VALUES
    totalScore = bucketAdder(greenBucket);
    //Assign the totalSocre number to the ui.
    var uiTotalScore = $("#sp-totalScore");
    uiTotalScore.text(totalScore);
    whoWon();

  });//uiGreenCrystal


});//document.ready

// END LOGIC--------------------------------------------------------

/*--------END CODE---------------*/
