/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(timeString){
  const hour = timeString.split(":")
  if (  parseInt(hour[0]) < 12 ) {
    return `Good Morning`
  } else if (parseInt(hour[0]) > 17){
    return `Good Evening`
  } else {
    return`Good Afternoon`
  }
  

}
/* Write your implementation of displayMessage() */

function displayMessage(){
  console.log(greet)
}

// function addingEventListener() {
//   const input = document.getElementById('input');
// input.addEventListener('click', function(event) {
// alert('I was clicked!');
// });
// }