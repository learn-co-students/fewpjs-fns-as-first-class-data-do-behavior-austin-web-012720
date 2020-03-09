/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage()
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  if (Number.parseInt(time) < 12) return "Good Morning";
  if (Number.parseInt(time) >= 12 && (Number.parseInt(time) <= 17)) return "Good Afternoon";
  if (Number.parseInt(time) > 17) return "Good Evening";  
}

/* Write your implementation of displayMessage() */
function displayMessage(content) {
  const element = document.getElementById('greeting');
  element.innerText = content;
}