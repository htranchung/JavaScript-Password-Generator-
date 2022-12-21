// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordCharacters = {
  num: "1234567890",
  specialChar: "!@#$%&'()*+,^-./:;<=>?[]_`{~}|",
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
};

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

  var passInfo = "";

  if (numbers) {
    passInfo = passInfo + passwordCharacters.num;
  }

  if (lowerCases) {
    passInfo = passInfo + passwordCharacters.lowerCase;
  }

  if (upperCases) {
    passInfo = passInfo + passwordCharacters.upperCase;
  }

  if (specialCharacters) {
    passInfo = passInfo + passwordCharacters.specialChar;
  }

  var randomPassword = "";

  for (var i = 0; i < length; i++) {
    randomPassword += passInfo[Math.floor(Math.random() * passInfo.length)];
  };

  return randomPassword;
}


