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
  console.log(PasswordLength)

  if (PasswordLength < 8 || PasswordLength > 128) {
    alert('Please select a number between 8-128');
    console.log('password length is not in the range')
    return ""
  }
  else if (PasswordLength >= 8 && PasswordLength < 128) {
    console.log ('password length is valid');
    var numericIncluded = window.confirm ("Do you want to include numbers?");
    var lowercaseIncluded = window.confirm("Do you want to include lower case?");
    var uppercaseIncluded = window.confirm("Do you want to include uppercase?");
    var specialcharIncluded = window.confirm("Do you want to include special characters?");
    var possibleChars = [];
    switch (numericIncluded) {
      case true:
        possibleChars = numeric;
        break;
    }
    switch (lowercaseIncluded) {
      case true:
        possibleChars = [].concat(possibleChars, LowerCase);
        break;
    }
    switch (uppercaseIncluded) {
      case true:
        possibleChars = [].concat (possibleChars, UpperCase);
        break;
    }
    switch (specialcharIncluded) {
      case true:
        possibleChars = [].concat (possibleChars, SpecialCharacters);
        break;
    }
    console.log(numericIncluded, lowercaseIncluded, uppercaseIncluded, specialcharIncluded);
    console.log(possibleChars);

    for (var i = 0; i < PasswordLength; i++) {
      var RandomPassword = possibleChars[Math.floor(Math.random() * PasswordLenght)];
      console.log(RandomPassword);
    }

    // for (var i = 0; i < PasswordLength; i++) {
    //   var possibleChars = [];
    //   switch (numericIncluded) {
    //     case true:
    //       possibleChars = numeric;
    //       break;
    //   }
    //   switch (lowercaseIncluded) {
    //     case true:
    //       possibleChars = [].concat(possibleChars, LowerCase);
    //       break;
    //   }
    //   switch (uppercaseIncluded) {
    //     case true:
    //       possibleChars = [].concat (possibleChars, UpperCase);
    //       break;
    //   }
    //   switch (specialcharIncluded) {
    //     case true:
    //       possibleChars = [].concat (possibleChars, SpecialCharacters);
    //       break;
    //   }
    //   var RandomPassword = possibleChars[Math.floor(Math.random() * PasswordLength)];
    //   console.log(RandomPassword);
    // }
    // console.log(numericIncluded, lowercaseIncluded, uppercaseIncluded, specialcharIncluded);
    // console.log(possibleChars);
  }
  


  // for (var i = 0; i < PasswordLength; i++) {
  //   function possibleChars([]) {
  //     switch (possibleChars)
   
  //   var RandomPassword = possibleChars[Math.floor(Math.random() * PasswordLength)];
  //   console.log(RandomPassword[i]);
  // }
  // console.log(possibleChars);
  return "result"
};
var numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var LowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var UpperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var SpecialCharacters = ['@', '&', '+', '/', '!', '#', '$', '^', '?', ';', ':', ',', '(', ')', '{', '}', '[', ']', '~', '-', '_'];
