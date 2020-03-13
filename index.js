/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

function greet(timeString) {
  const test = parseInt(timeString, 10);
    if (test < 12)
      return "Good Morning"

    if (test > 17)
      return "Good Evening"

    else
      return "Good Afternoon"
}


function displayMessage(text) {
  document.getElementById("greeting").innerText = text;
}
