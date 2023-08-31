"use strict";
//proof of life that our js is running in the browser. html is connected to out js.
console.log("app js is running!");

let userName;

//get user name
function getUserName() {
  //if reffered to as a scoped variable because it lives in the function.
  userName = prompt("What is your name?");
  console.log("username", userName);
}
getUserName();

//what we are doing here is declaring a variable. but the variable does not have a value yet.

function greetingMessage() {
  console.log('did this function run?');
  //scoped to our function
  let message;
  //assigning a value to that variable.
  message = "Welcome to the Wild West,";
  // let message = 'Welcome to the Wild West,';
// Welcome to the Wild West, Bob!
  return message + " " + userName + "!";
}

confirm("Pretty cool, right?");
