//function with Argument 
// function writeText(str){
//  document.getElementById("demo").innerHTML = str
//}

// //Calling out our function
// WriteText("HelloWorld");

//Function With Arguments and Parameters 
// function addnumbers(num1, num2){
// sum = num1 +num2;
// document.getElementById("demo").innerHTML = sum
// }

// addNumber(5, 10);

//Functions with Event
function addnumbers(num1, num2){
    sum = num1 +  num2;
    document.getElementById("demo").innerHTML = sum;
}

function showDialog(){
    alert("HelloWorld");
}

/*       ASSESSMENT
1. Create a function hello() to print
Welcome to Atalanta

2. Create a function of Bizmarrow() and call out, 
"Bizmarrow a Technology Institute" using an onclick
 event on a button element
*/


                //ASSESSMENT
//function Bizzmarrow(){
//   alert("Bizzmarrow a Technology Institute");
//}

//function Hello(str){
//  document.getElementById("demo").innerHTML = str
//}

//Hello("Welcome To  Atalanta");

//Function using return statement
//function addnumbers(num1,  num2){
 // var sum = num1 + num2;

//  return sum;
//}

//document.getElementById("demo").innerHTML = addnumbers(2, 5);

//Function with Event 
// function getAge(age) {
//   var fullName = "John Doe";

//   document.getElementById("demo").innerHTML =
//   fullName + " is " + age + " years";
// }

// document.getElementById("demo1").innerHTML =
// fullName;

// var fruit = "apple";

// function myFunc(){
//   document.getElementById("demo").innerHTML =
//   "My Favourite fruit is " + fruit;
// }

 function toMiles(kilometer){
   var miles = kilometer * 0.62137;

   return kilometer + " kilometers " + "equals "
   +  miles + " miles.";
}

   alert(toMiles(3));
 document.getElementById("demo").innerHTML = toMiles
 (10);


/*        ASSESSMENT
Use function to convert centimeter() to meter,
Use alert and document.write method to preview 
your output
*/

/*          ANSWER*/

// function toMeter(centimeter){
//   var meter = centimeter * 0.01;

//   return centimeter + " centimeter's " + " equals "
//   + meters + " meters.";
// }


// alert(toMeter(100));
// document.write("demo").innerHTML = toMeter
// (17);
    



