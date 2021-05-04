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
  var PasswordLength = window.prompt ('How many characters? Enter between 8-128');
  PasswordLength = parseInt (PasswordLength)
  console.log(typeof PasswordLength)
  if (PasswordLength < 8 || PasswordLength > 128) {
    alert('Please select a number between 8-128');
    console.log('fail')
    return ""
  }
  else {
    console.log('success');
    // includ numbers
    var numeric = window.confirm ("Do you want to include numbers?");
    console.log(typeof numeric);
    if (numeric === true) {
      for (var i = 0; i < numeric.length; i++) {
      console.log(numeric[i]);
      var num = Math.floor +1;
     };
    };
  };

  // return password;
};

var numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var LowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var UpperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var SpecialCharacters = ['@', '&', '+', '/', '!', '#', '$', '^', '?', ';', ':', ',', '(', ')', '{', '}', '[', ']', '~', '-', '_'];









//include special characters

