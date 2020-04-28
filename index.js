/* Given Code, don't edit */

document.querySelector("input[type='button']").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/
/* Write your implementation of greet() */

function greet(myTime){
  let timeInt = parseInt(myTime.split(':')[0]);
  if(timeInt < 13) {
    return "Good Morning";
  }
  else if(timeInt > 13 && timeInt < 17) {
      return "Good Afternoon";
  }
  else {
    return "Good Evening"
  }

}


/* Write your implementation of displayMessage() */
function displayMessage(timeMessage) {
  document.getElementById('greeting').innerText = timeMessage

}