/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/
function greet(String){
  const hour = parseInt(String, 10);

  if (hour < 12 ) return "Good Morning"
  if (hour > 17) return "Good Evening"
  return "Good Afternoon"
}

function displayMessage(messageString){
  document.getElementById('greeting').innerText = messageString;
}

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
