// // gets the value of the lang attributes of <html>
// alert(document.documentElement.getAttribute("lang"));

// //gets the content of the <title> inside the <head>
// alert(document.head.firstElementChild.innerHTML);

// //change the background color of the <body>
// document.body.style.backgroundColor = "green";

// //Selecting element by Class Name using DOM
// //lets select element with "big-green" class name
// var element = document.getElementsByClassName
// ("big-green");

// //lets access each selected element 
// for(let i = 0; i < element.length; i++){
//     //lets style each selected element
//     element[i].style.fontSize = "20px";
//     element[i].style.color = "yellow";
// }

/*      ASSESSMENT
From the element content below, select Elements by
Tag Name to display a red color of h3 element
<h3>Hello World</h3>
<p>Lorem Ipsum</p>
<h3>Welcome to Codelibre</h3>
<p>Lorem Ipsum dolor sit amet</p>
*/


//Selecting Element by Tag name using DOM
var element = document.getElementsByTagName
("h3");

//lets access each selected element
for(let i = 0; i < element.length; i++){
    //lets style each selected element
    element[i].style.color = "red";
}

