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
  console.log("function starts")
  //set password length
  var PasswordLength = window.prompt ('How many characters? Enter between 8-128');
  PasswordLength = parseInt (PasswordLength)
  console.log(typeof PasswordLength)
  if (PasswordLength < 8 || PasswordLength > 128) {
    alert('Please select a number between 8-128');
    console.log('password length is not in the range')
    return ""
  }

  console.log('password length is valid.'); //you had "success" before, but I like specific console messages.

  var numericIncluded = window.confirm ("Do you want to include numbers?");
  console.log(numericIncluded);
  var lowercaseIncluded = window.confirm("Do you want to include lower case?");
  console.log (lowercaseIncluded)
  var uppercaseIncluded = window.confirm("Do you want to include uppercase?");
  console.log(uppercaseIncluded);
  var specialcharIncluded = window.confirm("Do you want to include special characters?");
  console.log(specialcharIncluded);

  for (var i = 0; i < PasswordLength; i++) {
    var possibleChars = [];
   
    if (numericIncluded === true) {
      possibleChars = numeric;
    }
  
    if (lowercaseIncluded === true) {
      var possibleChars = LowerCase;
    }
    if (lowercaseIncluded === true && numericIncluded === true) {
      var possibleChars = [].concat (numeric, LowerCase);
    }
  
    if (uppercaseIncluded === true) {
      var possibleChars = UpperCase;
    }
    if (uppercaseIncluded === true && lowercaseIncluded === true) {
      var possibleChars = [].concat (UpperCase, LowerCase);
    }
    if (uppercaseIncluded === true && numericIncluded === true) {
      var possibleChars = [].concat (numeric, UpperCase);
    }
    if (uppercaseIncluded === true && lowercaseIncluded === true && numericIncluded === true) {
      var possibleChars = [].concat (numeric, LowerCase, UpperCase);
    }
  
    if (specialcharIncluded === true) {
      var possibleChars = SpecialCharacters;
    }
    if (specialcharIncluded === true && uppercaseIncluded === true) {
      var possibleChars = [].concat (SpecialCharacters, UpperCase)
    }
    if (specialcharIncluded === true && lowercaseIncluded === true) {
    var possibleChars = [].concat (SpecialCharacters, LowerCase)
    }
    if (specialcharIncluded === true && numeric === true) {
      var possibleChars = [].concat (SpecialCharacters, numeric)

    if (specialcharIncluded === true && uppercaseIncluded === true && lowercaseIncluded === true) {
      var possibleChars = [].concat (SpecialCharacters, UpperCase, LowerCase)
    }

    if (specialcharIncluded === true && uppercaseIncluded === true && numericIncluded === true) {
      var possibleChars = [].concat (SpecialCharacters, UpperCase, numeric)
    }

    if (specialcharIncluded === true && lowercaseIncluded === true && numericIncluded === true) {
      var possibleChars = [].concat (SpecialCharacters, LowerCase, numeric)
    }

    }
    if (specialcharIncluded === true && uppercaseIncluded === true && lowercaseIncluded === true && numeric === true) {
      var possibleChars = [].concat (SpecialCharacters, UpperCase, LowerCase, numeric)
    }
    
    console.log(possibleChars);

    var RandomPassword = Math.floor(Math.random() * PasswordLength);
    var RandomElement = possibleChars[RandomPassword];
    
    console.log(RandomElement); 
  }

  return "result"
};
var numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var LowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var UpperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var SpecialCharacters = ['@', '&', '+', '/', '!', '#', '$', '^', '?', ';', ':', ',', '(', ')', '{', '}', '[', ']', '~', '-', '_'];
