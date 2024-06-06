// ASSIGNMENT 1
// Creating a Lesson Plan(Using for loop )

let myWork :{name:string,status:boolean}[]=[]

for (let i=1; i <= 10; i++){
    let lesson ={
        name:`Lesson ${i}`,
        status:i%2===1? true:false,
    }
    myWork.push(lesson)
}

console.log(myWork);

// ASSIGNMENT 2 
// Guessing Game (Using while loop )
let maximumValue =10;
let rendomNumebr = Math.floor(Math.random()*maximumValue+1)
console.log(`RENDOM NUMBER IS ${rendomNumebr}`);
let guess =false;
// USER PREDEFINE NUMBER 
let predefineGesses =[2,9,5,7,10]
let guessNumber = 0
// WHILE LOOP 
while(!guess && guessNumber<predefineGesses.length){
    let correctGuess = predefineGesses[guessNumber]
    console.log(correctGuess);
    if (correctGuess===rendomNumebr){
        console.log("YOU GUESS THE CORRECT NUMEBR ");
        
    }
    else if(correctGuess>rendomNumebr){
        console.log("YOUR NUMBER IS TO HIGH");
        
    }
    else{
        console.log("YOUR NUMBER IS TO LOW");
        
    }
    guessNumber++
};
// ASSIGNMENT 3
// Counter Incrementer (Using do while loop )
let counter = 0
let step = 10
// USING DO WHILE LOOP FOR INCREMENT IN VALUE OF COUNTER 
do{
    console.log(counter);
counter+=step    
}while(counter <100)

// ASSIGNMENT
// Exploring Objects with for...in Loop
let myObject: {[key:string]:string }={
    item1:"value1",
    item2:"value2",
    item3:"value3"
};
// USING FOR IN LOOP FOR CONSOLE ALL THE PROPERTYIES AND ITS EKY VALUES
for(let property in myObject){
        console.log(`${property} ${myObject[property]}`);
};

// ASSIGNMENT 5
// Exploring Arrays with Loops(Using loop )

let myArray :number[]=[]

for(let i=1;i<=10;i++){
    myArray.push(i)
}
console.log(myArray);
for(let i=0;i<myArray.length;i++){
    console.log(`INDEX ${i}: ${myArray[i]}`);
    
}
for(let value of myArray){
    console.log(`VALUES: ${value}`);
    
}