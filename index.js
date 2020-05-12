/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */



function greet(time){
  let hour = time.split(":")[0]
  let numHour = parseInt(hour)
  if (numHour > 17) {
    return "Good Evening"
  }
  else if (numHour < 12){
    return "Good Morning"
  }
  else {
    return "Good Afternoon"
  }
}



function displayMessage(string){
  let node = document.getElementById('greeting')
  node.innerText = string 
} 