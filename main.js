// ASSIGNMENT 1
// Creating a Lesson Plan(Using for loop )
var myWork = [];
for (var i = 1; i <= 10; i++) {
    var lesson = {
        name: "Lesson ".concat(i),
        status: i % 2 === 1 ? true : false,
    };
    myWork.push(lesson);
}
console.log(myWork);
// ASSIGNMENT 2 
// Guessing Game (Using while loop )
var maximumValue = 10;
var rendomNumebr = Math.floor(Math.random() * maximumValue + 1);
console.log("RENDOM NUMBER IS ".concat(rendomNumebr));
var guess = false;
// USER PREDEFINE NUMBER 
var predefineGesses = [2, 9, 5, 7, 10];
var guessNumber = 0;
// WHILE LOOP 
while (!guess && guessNumber < predefineGesses.length) {
    var correctGuess = predefineGesses[guessNumber];
    console.log(correctGuess);
    if (correctGuess === rendomNumebr) {
        console.log("YOU GUESS THE CORRECT NUMEBR ");
    }
    else if (correctGuess > rendomNumebr) {
        console.log("YOUR NUMBER IS TO HIGH");
    }
    else {
        console.log("YOUR NUMBER IS TO LOW");
    }
    guessNumber++;
}
;
// ASSIGNMENT 3
// Counter Incrementer (Using do while loop )
var counter = 0;
var step = 10;
// USING DO WHILE LOOP FOR INCREMENT IN VALUE OF COUNTER 
do {
    console.log(counter);
    counter += step;
} while (counter < 100);
// ASSIGNMENT
// Exploring Objects with for...in Loop
var myObject = {
    item1: "value1",
    item2: "value2",
    item3: "value3"
};
// USING FOR IN LOOP FOR CONSOLE ALL THE PROPERTYIES AND ITS EKY VALUES
for (var property in myObject) {
    console.log("".concat(property, " ").concat(myObject[property]));
}
;
// ASSIGNMENT 5
// Exploring Arrays with Loops(Using loop )
var myArray = [];
for (var i = 1; i <= 10; i++) {
    myArray.push(i);
}
console.log(myArray);
for (var i = 0; i < myArray.length; i++) {
    console.log("INDEX ".concat(i, ": ").concat(myArray[i]));
}
for (var _i = 0, myArray_1 = myArray; _i < myArray_1.length; _i++) {
    var value = myArray_1[_i];
    console.log("VALUES: ".concat(value));
}
