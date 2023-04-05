// var person = {
//     name: "John Doe",
//     age: 30,
//     showDetails: function() {
//         alert(this.name + " is " + this.age + 
//         "years old.");
//     }
// };

//An Object in An Object, commonly known as nested object

// var fruits = {
//     mango: {
//         color: "yellow",
//         taste: "sweet"
//     },

//     lemon: {
//         color: "red",
//         taste: "sour"
//     }
// }

// document.write(fruits.lemon.taste,fruits.mango.color + "<br>" + fruits.lemon.color);


//JSON Declaration, Converting JSON to Oject
var text = `{
    "firstName": "John",
    "lastName": "Doe",
    "age": 30,
    "isMarried": true
}`;

var obj = JSON.parse(text); //To return Object

document.getElementById("demo").innerHTML = obj.
firstName + " " + obj.lastName + " is " + obj.age + " years old. ";

// Converting Javascript Object to JSON
// var text = {
//     "firstName": "John",
//     "lastName": "Doe",
//     "age": 30,
//     "isMarried": true
// };

// var num = JSON.stringify(text);
// document.getElementById("demo").innerHTML = num;