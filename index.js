/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(string){
  let arr = string.split(":");
  const time = parseInt(arr[0]+arr[1]);
  if (time < 1200) {
    return "Good Morning" ;
  }
  else if (1200 < time && time < 1700){
    return "Good Afternoon";
  }
  else if (time > 1700 ){
    return "Good Evening";

  }

}
/* Write your implementation of displayMessage() */
function displayMessage(string){
  let a = document.getElementById("greeting");
  a.innerText = string;
}
