/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function greet(time){
  let hour = parseInt(time.split(':')[0]);
  let greeting = "";

  if (hour < 12) {
    greeting = "Good Morning";
  } else if (12 <= hour && hour < 17) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }

  console.log(hour, greeting, time);
  return greeting;
}

function displayMessage(str){
  let greetingdiv = document.getElementById('greeting');
  greetingdiv.innerText = str
}