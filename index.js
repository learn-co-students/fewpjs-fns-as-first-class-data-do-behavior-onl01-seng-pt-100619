/* Given Code, don't edit */

document.querySelector('input[type="button"]').addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function displayMessage(message) {
  let greetingMessage = document.getElementById('greeting')
  greetingMessage.innerText = message;
}


function greet(input) {
  let time = input.split(':')
  let timeInteger = parseInt(time[0], 10);
   if (timeInteger < 12) {
     return "Good Morning"
   } else if (timeInteger > 17) {
     return "Good Evening"
   } else {
     return "Good Afternoon"
   }
}
