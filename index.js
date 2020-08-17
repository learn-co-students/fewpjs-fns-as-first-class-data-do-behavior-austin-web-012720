/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById("time").value;
  displayMessage(greet(timeString));
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(str) {
  time = parseInt(str.split(":"));
  if (time < 12) {
    return "Good Morning";
  } else if (time < 18) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
  // return parseInt(str.split(":")) < 12 ? "Good Morning" : "Good Afternoon";
  // switch (parseInt(str.split(":")) < 12) {
  //   case true:
  //     return "Good Morning";
  //   case false:
  //     return "Good Afternoon";
  // }
}

/* Write your implementation of displayMessage() */
function displayMessage(str) {
  console.log(document.getElementById("greeting"));
  document.getElementById("greeting").innerText = str;
}
