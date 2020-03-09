/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
};

/* End Given Code, don't edit above here...*/
function displayMessage(string) {
  document.getElementById('greeting').innerText = string;
};

function greet(time) {
  let string = time.split(':')[0];

  let num = parseInt(string, 10);

  if (num > 0 && num < 12) {
    return "Good Morning";
  } else if (num > 17) {
    return "Good Evening";
  } else {
    return "Good Afternoon"; 
  };
};

