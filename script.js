// Assignment Code
var generateBtn = document.querySelector("#generate");

var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var symbols = "!@#$%^&*?-_+=";
var passwordChoices = ""
// Write password to the #password input
function writePassword() {
  debugger
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  debugger
  var passwordLength = prompt("How long do you want your password?");
  if (passwordLength >= 8 && passwordLength <= 128) {
    confirm("Do you want upper case letters?");
      if (true) {
        passwordChoices += upper
      }
    confirm("Do you want lower case letters?");
      if (true) {
        passwordChoices += lower
      }
    confirm("Do you want numbers?");
      if (true) {
        passwordChoices += numbers
      }
    confirm("Do you want symbols");
      if (true) {
        passwordChoices += symbols
      }
    return 
  } else {
    alert("Your password length must be between 8 and 128 characters.")
  }
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// How long do you want the password? 8 - 128 characters
// Do you want upper case letters?
// Do you want lower case letters?
// Do you want numbers?
// Do you want symbols?