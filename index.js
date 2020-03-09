/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}


function greet(time) {
  // HH:MM

  time = time.split(':');
  let hour = time[0];
  hour = parseInt(hour)
  console.log(hour)
  if (hour < 12) {
    return 'Good Morning';
  } else if (hour >= 12 && hour <= 17 ) {
    return 'Good Afternoon';
  } else {
    return 'Good Evening'
  }
}

function displayMessage(string) {
  let ele = document.getElementById('greeting')
  // ele.textContent = string
  ele.innerText = string
}
/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
