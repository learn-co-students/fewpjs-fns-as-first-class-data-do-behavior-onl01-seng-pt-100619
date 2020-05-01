/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(timeString) {
  const realtime = parseInt(timeString, 10);
  if ( realtime < 12) return "Good Morning"
  if ( realtime > 17) return "Good Evening"
  return "Good Afternoon"
}

/* Write your implementation of displayMessage() */

function displayMessage(msg) {
  document.getElementById("greeting").innerText = msg;
}