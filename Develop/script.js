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

function generatePassword() {
  console.log("my function ")
  //set password length
  var PasswordLength = parseInt(window.prompt ('How many characters? Enter between 8-128'));
  console.log(typeof PasswordLength)

  if (PasswordLength < 8 || PasswordLength > 128) {
    alert('Please select a number between 8-128');
    console.log('password length is out of the range')
    return ""
  }
  console.log('password length is valid.'); 

  var possibleChars = [] //We'll add characters into this array for each "yes" we get from a confirm statement!

  var numericIncluded = window.confirm ("Do you want to include numbers?");
  console.log(typeof numericIncluded);
  if (numericIncluded === true) {
    possibleChars = numeric
  }
  var lowercaseIncluded = window.confirm("Do you want to include lowercase?");
  console.log(typeof lowercaseIncluded);
  if (lowercaseIncluded === true) {
    possibleChars = LowerCase
  }
  if (lowercaseIncluded === true && numericIncluded === true) {
    possibleChars = numeric + LowerCase
  }
  var uppercaseIncluded = window.confirm("Do you want to include uppercase?");
  console.log(typeof uppercaseIncluded);
  if (uppercaseIncluded === true) {
    possibleChars = UpperCase
  }
  if (uppercaseIncluded === true && lowercaseIncluded === true) {
    possibleChars = LowerCase + UpperCase
  }
  if (uppercaseIncluded === true && numericIncluded === true) {
    possibleChars = numeric + UpperCase
  }
  if (uppercaseIncluded === true && lowercaseIncluded === true && numericIncluded === true) {
    possibleChars = numeric + LowerCase + UpperCase
  }
  var specialcharIncluded = window.confirm("Do you want to include special characters?");
  console.log(typeof specialcharIncluded);

  for (var i = 0; i < length; i++) {
    var password = Math.floor(Math.random() * PasswordLength);
  }
  console.log(password[i]);
    
    //add the contents of numeric to possibleChars

  // for (var i = 0; i < possibleChars.length; i++) {
  //   console.log(possibleChars);
  // }
   //once the characters are done, you'll use a for-loop to grab random characters from the possibleChars array and make the password!
  return "result"

  // //include numbers?
  // var numeric = window.confirm ("Do you want to include numbers?");
  // console.log(typeof numeric);
  // if (numeric === true) {
  // };

};



var numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var LowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var UpperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var SpecialCharacters = ['@', '&', '+', '/', '!', '#', '$', '^', '?', ';', ':', ',', '(', ')', '{', '}', '[', ']', '~', '-', '_'];









//include special characters

