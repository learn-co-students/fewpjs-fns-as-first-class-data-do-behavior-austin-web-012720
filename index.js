/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(inputString) {
  // let today = new Date();
  // let thisDay = today.getDate();
  // let thisHour = today.getHours();
  // let thisMinute = today.getMinutes();

  const hour = parseInt(inputString, 10);
  if (hour < 12) return 'Good Morning';
  if (hour > 17) return 'Good Evening';
  if (0 < hour > 24) return 'Invalid time format';
  return 'Good Afternoon';
}
/* Write your implementation of displayMessage() */
function displayMessage(msg) {
  document.getElementById("greeting").innerText = msg;
}