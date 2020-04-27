/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(timeString){
  const hour = timeString.split(":") //add split function to remove colon from string, use parseInt with only first argument to turn string to integer
  if (  parseInt(hour[0]) < 12 ) {
    return `Good Morning`
  } else if (parseInt(hour[0]) > 17){
    return `Good Evening`
  } else {
    return`Good Afternoon`
  }
  //add else if statements with condition in parenthesis and logic/action in curly braces

}
/* Write your implementation of displayMessage() */

function displayMessage(string){
//  let greeting = document.getElementById("greeting")
//  greeting.innerHTML = string
//  let text = document.createTextNode(string)
//  greeting.appendChild(text) // add createTextNode to make a text that can be added to our element and appendChild this text to our element
}

// let newHeader = document.createElement("h1");

// newHeader.setAttribute("id", "victory");

// document.body.appendChild(newHeader);

// // let newHeader = document.querySelector("h1#victory");

// let text = document.createTextNode("YOUR-NAME is the champion");

// newHeader.appendChild(text);

// function addingEventListener() {
//   const input = document.getElementById('input');
// input.addEventListener('click', function(event) {
// alert('I was clicked!');
// });
// }