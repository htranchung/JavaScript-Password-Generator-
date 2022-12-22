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
  var randomPassword = "";

  if (numbers) {
    passInfo = passInfo + passwordCharacters.num;
    randomPassword += passwordCharacters.num[Math.floor(Math.random() * passwordCharacters.num.length)];
    length--;
  }

  if (lowerCases) {
    passInfo = passInfo + passwordCharacters.lowerCase;
    randomPassword += passwordCharacters.lowerCase[Math.floor(Math.random() * passwordCharacters.lowerCase.length)];
    length--;
  }

  if (upperCases) {
    passInfo = passInfo + passwordCharacters.upperCase;
    randomPassword += passwordCharacters.upperCase[Math.floor(Math.random() * passwordCharacters.upperCase.length)];
    length--;
  }

  if (specialCharacters) {
    passInfo = passInfo + passwordCharacters.specialChar;
    randomPassword += passwordCharacters.specialChar[Math.floor(Math.random() * passwordCharacters.specialChar.length)];
    length--;
  }

  for (var i = 0; i < length; i++) {
    randomPassword += passInfo[Math.floor(Math.random() * passInfo.length)];
  };

  randomPassword = randomPassword.split("");

  var shuffled = randomPassword
    .map(function (value) {
      return { value, sort: Math.random() };
    })
    .sort(function (a, b) {
      return a.sort - b.sort;
    })
    .map(function({ value }) {
      return value;
    });

  shuffled = shuffled.join("");

  return shuffled;
}