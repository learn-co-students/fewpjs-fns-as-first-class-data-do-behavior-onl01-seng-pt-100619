import { createContext } from "vm";

/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

function greet(timeString) {
  let parsed_time = parseInt(timeString.split('-')[0])
  if (parsed_time < 12) {
    return "Good Morning";
  }
  else if (parsed_time > 17) {
    return "Good Evening";
  }
  return "Good Afternoon";
}
function displayMessage(string_input) {
  document.getElementById("greeting").innerText = string_input
}