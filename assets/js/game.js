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
var totalScore    = 0;
var halRandomNum  = 0;
// END VARIABLES

// BGN FUNCTIONS

// RANDOM NUMBER BETWEEN TWO VALUES
function getRandomArbitrary(min, max) {/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random */
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive

}//fun getRandomArbitrary

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
  //console.log("crystalRandomNum:",name + ',' + crystalRandomNum);
  return crystalRandomNum;

};//fun crystalRandom

// CRYSTAL NUMBER COLLECTOR
var crystalCollector = function(crystalNumber) {
  //ADD crystal numbers to the array
  bucket.push(crystalNumber);
  //Testing
  console.log("crystalBucket:",bucket);
  return bucket;

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

};//fun

var whoWon = function() {
  //Check who has won
  console.log("won totalScore typeof",typeof(totalScore) +","+ totalScore);
  console.log("won halRandomNum typeof",typeof(halRandomNum) +","+ halRandomNum);

  if(totalScore == halRandomNum) {
    //VARIABLES
    var wins = 0;
    //Testing
    console.log("You WIN!",wins);

  }//end if

  if(totalScore > halRandomNum) {
    //VARIABLES
    var loss = 0;
    //Testing
    console.log("You Lose!",loss);
    //var losses += loss;

  }//end if

}//whoWon

// END FUNCTIONS

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

// BGN LOGIC
$(document).ready(function(){
  // name for this ai
  halRandomNum         = aiRandom(19, 121); //(inclusive,exclusive)

  //Testing
  console.log("hal:",halRandomNum);

  //Assign the random ai number to the ui.
  var uiHal = $("#sp-aiRandomNum");
  uiHal.text(halRandomNum);

  // name for the crystals
  var redCrystal     = crystalRandom(1, 13, 'redCrystal'    );  //(inclusive,exclusive,rockName)
  var blueCrystal    = crystalRandom(1, 13, 'blueCrystal'   );  //(inclusive,exclusive,rockName)
  var yellowCrystal  = crystalRandom(1, 13, 'yellowCrystal' );  //(inclusive,exclusive,rockName)
  var greenCrystal   = crystalRandom(1, 13, 'greenCrystal'  );  //(inclusive,exclusive,rockName)
  //Testing
  //var allCrystals = redCrystal +","+ blueCrystal +","+ yellowCrystal +","+ greenCrystal;
  //console.log( 'rbyg Crystal:', allCrystals);

  //Assign the random crystal number to the ui.
  var uiRedCrystal = $("#redCrystal");
  uiRedCrystal.click(function() {
    //Testing
    //console.log("uiRedCrystal:",redCrystal);
    //Add crystal to bucket
    var redBucket = crystalCollector(redCrystal);
    //Testing
    //console.log("redBucket",redBucket);
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
    var blueBucket = crystalCollector(blueCrystal);
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
    var yellowBucket = crystalCollector(yellowCrystal);
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
    var greenBucket = crystalCollector(greenCrystal);
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

// END LOGIC

/*--------END CODE---------------*/
