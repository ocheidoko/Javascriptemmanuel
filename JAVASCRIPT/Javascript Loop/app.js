// Using for Loop
// const cars = ["BMW", "Volvo", "Peugeot", "Ford", "Fiat", "Audi"];

// let text = "";
// for(let i = 0; i < cars.length; i++){
//     text += cars[i] + "<br>";
// }

// document.getElementById("demo").innerHTML = text;


// let text = "";

// for(let i = 0; i<10; i++){
//     text += "The number is " + i + "<br>";
// }

// document.getElementById("demo").innerHTML = text;

/*From the example above, you can read:

Expression 1, sets a variable before the loop starts (let i = 0)

Expression 2, defines the condition for the loop to run (i.e must be less than 10)

Expression 3, increase in value  (i++) each time the code blocks in the loop as been executed*/

//The For in Loop
//The javascript for in statement loops through the properties of an object:
//Syntax
//for(Key in object){
    //code block to be executed
//}

const Person = {
    fname: "John",
    lname: "Doe",
    age: 24
};

let txt = "";
for(let x in Person){
    txt += Person[x] + " ";
}

document.getElementById("demo").innerHTML = txt;

/*The for in loop iterates over a person object. 
Each iteration  returns a key(X)
The key is used to access the value of the key
The value of thr key is person[x]*/

//The while Loop
/*The while Loop loops through a code of blocks as 
long as a specified condition is true.

Syntax
while(condition){
    code block to be executed
}*/

// let text ="";
// let i = 0;
// while(i < 10){
//     text += "<br> The number " + i; i++;
// }

// document.getElementById("demo").innerHTML = text;


/*ASSESSMENT
1. Use conditional statement of else to print out 
an output implemented with an eventlistener of onclick,
output is  "registration unsuccessful"
You can declare a suitable condition of your choice.

2. Declare a JSON property of cars and convert it to an 
object to print out a specific value  of the object.

3. Create two different arrays and merge them together
to become a single array.

4. Using for in loop, loop through an object of not 
less than 5 key value pair

5. Validate a form to store data on the web server

6. Concatenate the string, "Bizmarrow Technology" 
with the integer value 10 and a string of "year"

7. If i happened to be 18 years old, am i qualified 
to vote for for the just concluded election, if yes,
declare a conditional statement to prove your choice
of output

8. What do you understand by AJAX, use a "GET" method
to implement an example of how AJAX work

9. With vivid example, show how logical statement works, 
using Logical AND, OR and NOT */




