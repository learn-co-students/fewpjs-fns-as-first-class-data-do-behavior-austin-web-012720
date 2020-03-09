/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value;
  displayMessage(greet(timeString));
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time){

  let hour = time.split(":")[0];
  let minute = time.split(":")[1];
  if (hour < 12){
    return "Good Morning";
  }
  else if (hour > 12 && hour < 17){
    return "Good Afternoon";
  }
  else if(hour>17){
    return "Good Evening";
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(message){
  document.getElementById('greeting').innerText = message;
  console.log(greeting);
  console.log(document.getElementById('greeting').value);


}