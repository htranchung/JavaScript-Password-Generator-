// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowCase = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];

var upCase = [
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
];
var num = [
  "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
];

var specialChar = [
  "!", "@", "#", "$", "^", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?", "~"
];

//1. prompts for password criteria
//    A. Password length 8 < 128
//    b. lowercase,uppercase,numbers,special characters
//2. validate the input
//3. generate password based on criteria 


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button

var generateButton = document.getElementById("generateBtn");
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var passInfo = "";
  var passChar = [];

  var length = prompt('How many characters would you like your password to contain?');

  if (length < 8 || length > 128) {
    alert('Password length must be at least 8 characters AND Password length must be less than 128 characters');
    return null;
  }

  var numbers = confirm("Do you want numbers in your password?");

  var lowerCases = confirm("Do you want lowercases in your password?");

  var upperCases = confirm("Do you want uppercases in your password?");

  var specialCharacters = confirm("Do you want special characters in your password?");

  if (!numbers && !lowerCases && !upperCases && !specialCharacters) {
    alert("At least one character type should be selected");
    return null;
  }

  if (numbers) {
    console.log("There is a number");
    passInfo = passInfo + num;
    passChars.push(getRandomChar(num));
  }

  if (lowerCases) {
    console.log("There is a lowercase");
    passInfo = passInfo + lowCase;
    passChars.push(getRandomChar(lowCase));
  }

  if (upperCases) {
    console.log("There is a uppercase");
    passInfo = passInfo + upCase;
    passChars.push(getRandomChar(upCase));
  }

  if (specialCharacters) {
    console.log("There is a special character");
    passInfo = passInfo + specialChar;
    passChars.push(getRandomChar(specialChar));
  }





}


