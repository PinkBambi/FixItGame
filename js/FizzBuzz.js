/**
 * Game: FIZZ BUZZ
 * This is the actual playground. This is where we are going to write our code to make this game work.
 * This page is one game. We will write every game in a new file.
 *
 * Our first game is going to be Fizz Buzz.
 *
 * RULES (Wikipedia):
 * Fizz buzz is a group word game for children to teach them about division.
 * Players take turns to count incrementally, replacing any number divisible by three with the word "fizz",
 * and any number divisible by five with the word "buzz".
 *
 * The game is to be written in Javascript as the file suggests, jQuery and Angular are also allowed. Do not forget to make it simple.
 *
 * I'll start ^ ^ /PinkBambi
 */

$("#ButFizzBuzz").click(function() { //Finds the button and listens to a click.
    //$('#answer').html($('input:text').val());   //Get the input and write it on page. Not needed but good to have as an example.
    var playground = $('#PGFizzBuzz').val(); //Get the input and asign a variable.
    /************ Do not change above code ************/

    if (playground === "3") writeAnswer = "Fizz";
    else if (playground === "5") writeAnswer = "Buzz";

    else writeAnswer = "Not fixed" ;

    /************************/
$("#answerFizzBuzz").append(writeAnswer);
});

/*
 * Bellow these lines is the space for problems/quests.
 * Write down a problem/quest the same way I have done.
 * This is so that we keep track of what we have done so far. Don't forget to write this in chronological order.
 * Just before these info-lines is the space for the solution code.
 * I'll call the computer-anwers on the input numbers BERT. xD
 */

//1 Assigned: PB (PinkBambi) | What should Bert do if the number is 3?
// Answer: Say Fizz It's divisible by 3

//2 Assigned: FJ (freddejson) | What should Bert do if the number is 5?
// Answer: Say Buzz It's divisible by 5

//3 Assigned: AE (AliensExist) | What should Bert do if the number is 9?
// Answer:
