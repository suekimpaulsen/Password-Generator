// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function generatePassword() {
  var passwordLength = parseInt(window.prompt ('How many characters? Enter between 8-128'));

  if (passwordLength < 8 || passwordLength > 128) {
    alert('Please select a number between 8-128');
    return ""
  }

  else if (passwordLength >= 8 && passwordLength <= 128) {
    var numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    var specialCharacters = ['@', '&', '+', '/', '!', '#', '$', '^', '?', ';', ':', ',', '(', ')', '{', '}', '[', ']', '~', '-', '_'];
    var possibleChars = [];

    var numericIncluded = window.confirm ("Do you want to include numbers?");
    switch (numericIncluded) {
      case true:
        possibleChars = numeric;
        break;
    }
    var lowercaseIncluded = window.confirm("Do you want to include lower case?");
    switch (lowercaseIncluded) {
      case true:
        possibleChars = [].concat(possibleChars, lowercase);
        break;
    }
    var uppercaseIncluded = window.confirm("Do you want to include uppercase?");
    switch (uppercaseIncluded) {
      case true:
        possibleChars = [].concat (possibleChars, uppercase);
        break;
    }
    var specialcharIncluded = window.confirm("Do you want to include special characters?");
    switch (specialcharIncluded) {
      case true:
        possibleChars = [].concat (possibleChars, specialCharacters);
        break;
    }

    var newPassword = ''
    for (var i = 0; i < passwordLength; i++) {
      var randomPassword = possibleChars[Math.floor(Math.random() * possibleChars.length)];
      newPassword += randomPassword
    }
    
    return newPassword
  }

  else if (isNaN) {
    return ""
  }
};
