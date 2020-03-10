/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time){
  if (parseInt(time.split(':')[0]) < 12)
    return "Good Morning";
  else if (parseInt(time.split(':')[0]) >= 12 && parseInt(time.split(':')[0]) < 18)
    return "Good Afternoon";
  else return "Good Evening";
}

/* Write your implementation of displayMessage() */
function displayMessage(message){
  document.getElementById('greeting').innerText = message;
}
