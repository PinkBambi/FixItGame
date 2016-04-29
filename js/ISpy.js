/*
 * Game: I SPY
 *
 * Rules (Wikipedia):
 * I spy is a guessing game where the Spy or It says "I spy with my little eye..." and players have to guess the object the Spy saw.
 * Constricting the rules so the game doesn't become eternal:
 * The words the participens can choose from are supposed to come from the same environment.
 * That way this wont get out of proportion. The chosen location is kitchen (English words).
 * Mohahahaa. This way, both the coding will be trained and English words for kitchen wares.
 *
 * This is how it's going to go:
 * This is a picture of the kitchen that we are going to use: http://news.hullfire.com/wp-content/uploads/2015/03/dome1.jpg
 * A color is filled in to the inputbox and out comes a suggestion. This suggestion is supposed to be a thing from
 * the kitchen that is generated based on the given color.
 *
 * Good luck, I'll start ^ ^ /PinkBambi
 */

$("#ButISpy").click(function() { //Finds the button and listens to a click.
    //$('#answer').html($('input:text').val());   //Get the input and write it on page. Not needed but good to have as an example.
    var playground = $('#PGISpy').val(); //Get the input and asign a variable.
    /************ Do not change above code ************/

    var clue = playground.toLowerCase(); //Transforms all 'clue' results to lower case, just like they are below

    if (clue === "green") writeAnswer = "Kitchen Glove?";
    else if (clue === "red") writeAnswer = "Fire distinguisher?";
    else if (clue === "brown") writeAnswer = "Bread?";
    else writeAnswer = "Dont know";

    /*****************************/
    $("#answerISpy").append(writeAnswer);
});
/*****************************/
function AskBertISpy() {
    document.getElementById("answerISpy").innerHTML = "Bert guesses: ";
}
var clicks = 0;

function HeWasRightISpy() {
    document.getElementById("answerISpy").innerHTML = "Bert guesses: ";
    clicks += 1;
    document.getElementById("RightGuessesCount").innerHTML = clicks;
}
/*
 * Below these lines is the space for problems/quests.
 * Write down a problem/quest the same way I have done.
 * This is so that we keep track of what we have done so far. Don't forget to write this in chronological order.
 * Just before these info-lines is the space for the solution code.
 * I'll call the computer-anwers on the input numbers BERT. xD
 */

//1 Assigned: PB (PinkBambi) | What could Bert guess at if the color written was green?
// Answer: Kitchen Glove

//2 Assigned: FJ (freddejson) | What could Bert guess at if the color written was red?
// Answer: Fire distinguisher

//3 Assigned PB (PinkBambi) | What could Bert guess at if the color written was brown?
// Answer: Bread?

//4 Assigned FJ (freddejson) | Does Bert understand Versiles? Would he understand if I wrote ReD and wanted him to understand it as red?
// Answer: Now he does, although the 'clue === red' has to be lowercase to work.

//5 Assigned PB (PinkBambi) | How would the correct answer be stored and called upon if Bert guessed the right answer?
// Answer: You who writes the color know what you are thinking of. The computer is supposed to guess and you need to tell him when he's right.

//6 Assigned FJ (freddejson) | It looks boring playing with Bert. Make it more stylish. 
// Answer: Oh, stylish you say?
