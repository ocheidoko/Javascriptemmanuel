//    QUESTION
/* 1. Use conditional statement of else to print out 
an output implemented with an eventlistener of onclick,
output is  "registration unsuccessful"
You can declare a suitable condition of your choice.*/

            //ANSWER//

// function writeContent(){
//     if(httpRequest.readyState === 4){
//         if(httpRequest.status == 200){
//             document.getElementById("demo").innerHTML = httpRequest.responseText;
//         }else{
//             alert("Registration Unsuccessful")
//         }
//     }
        
// }

//2. Declare a JSON property of cars and convert it to an 
//object to print out a specific value  of the object.

//JSON Declaration, Converting JSON to Oject

// var car = `{
//     "carName": "Volvo",
//     "secondName": "Toyota",
//     "Model": "Peugeot",
//     "style": "Renault"
// }`;

// var obj = JSON.parse(car);

// document.getElementById("demo").innerHTML = obj.
// carName + " " + obj.secondName + "  " + obj.Model + "  " + obj.style;

//3. Create two different arrays and merge them together
//to become a single array.

// var country = ["Poland", "hungary", "Ethiopia", "Mexico"];
// var cities = ["Berlin", "Addis-Ababa", "Toronto", "Port-harcourt"];
// var num3 = [1, 2, 3, 4];

// var arr = country.concat(cities, num3);
// document.write(arr);

// 4. Using for in loop, loop through an object of not 
//less than 5 key value pair

const Place = {
     country: "Nigeria",
     state: "Nasarawa",
     vote: 224,
     score: "fair",
     remark: "credible"
     };

let txt = "";
for(let x in Place){
   txt += Place[x] + " " + " ";
}

document.getElementById("demo").innerHTML = txt;

//5. Validate a form to store data on the web server

// function validateForm() {
//     var height = document.getElementsByName
//     ("height")[0].value;
//     if(height < 1.7 ){
//         alert('The height of the user is less than 1.5 form will not be displayed!');
//         return false;
//     }
// }

//6. Concatenate the string, "Bizmarrow Technology" 
//with the integer value 10 and a string of "year" 


// var name = "Bizmarrow Technology is"
// var age = 10;
// var answer = "Year"

// document.getElementById("demo").innerHTML =
// name  +   age  +   answer;

//7. If i happened to be 18 years old, am i qualified 
//to vote for for the just concluded election, if yes,
//declare a conditional statement to prove your choice
//of output

// var age = 15;
// if(age > 18){
//     alert("User is old enough to Vote");
// }
// else{
//     alert("User is not old enough to Vote");
// }


// 8. What do you understand by AJAX, use a "GET" method
// to implement an example of how AJAX work

// function makeRequest(){
//         httpRequest.onreadystatechange = writeContent;
       
//         httpRequest.open("GET", "https://codeliber.com/test.php");
//         httpRequest.send();
// }

//9. With vivid example, show how logical statement works, 
//using Logical AND, OR and NOT 

// And Logical Operator
// document.getElementById("demo").innerHTML =
// (true && true) + "<br>" +
// (3 == 3 && 4 == 4);






     
    