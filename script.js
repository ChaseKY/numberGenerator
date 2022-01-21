// Assignment Code
var generateBtn = document.querySelector("#generate");
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "?", "-", "_", "+", "="];

// Write password to the #password input
function writePassword() {
  debugger
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  debugger
  var lpass = prompt("How long do you want your password?");
  if (lpass >= 8 && lpass <= 100) {
    var upperc = confirm("Do you want upper case letters?");
    var lowerc = confirm("Do you want lower case letters?");
    var numb = confirm("Do you want numbers?");
    var symb = confirm("Do you want symbols");
    return 
  } else {
    alert("Your password length must be between 8 and 100 characters.")
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// How long do you want the password? 8 - 100 characters
// Do you want upper case letters?
// Do you want lower case letters?
// Do you want numbers?
// Do you want symbols?