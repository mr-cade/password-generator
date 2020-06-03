// Assignment Code
var generateBtn = document.querySelector("#generate");
var retVal = ""


function generatePassword() {
// input prompt for password length
  var pwLength = prompt("input number of characters 8-128")
    if(pwLength < 8 || pwLength > 128) {
      alert("Please select a number of characters between 8-128");
      return "Please try again";
    } 

// if statements to turn on/off character types in variable charset(line 48)
  var lowerCase = confirm("include lowercase letters?");
    if (lowerCase === true) {
      lowerCase = "abcdefghijklmnopqrstuvwxyz"
    } else {
      lowerCase = ''
  };
        
  var upperCase = confirm("include upper case letters?");
  if (upperCase === true) {
    upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  } else {
    upperCase = ''
  };

  var nums = confirm("include numbers?");
  if (nums === true) {
    nums = "0123456789"
  } else {
    nums = ''
  };

  var special = confirm("include special characters?");
  if (special === true) {
    special = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
  } else {
    special = ''
  };

  // concatenate chosen characters into charset string
    var charset = lowerCase + upperCase + nums + special 
    console.log(charset)
    if (charset === '') {
      return "Please select at least one type of character."
    }

  // assemble password for given number of characters
    for(var i = 0; i <= pwLength; i++) {
      retVal += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return retVal
  }
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
