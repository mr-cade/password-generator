// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var pwLength = prompt("input number of characters 8-128")
    if(pwLength < 8 || pwLength > 128) {
      alert("Please select a number of characters between 8-128")
    }
  var incLowercase = confirm("include lowercase letters?");
  var incUppercase = confirm("include uppercase letters?");
  var incNumber = confirm("include numbers?");
  var incSpecial = confirm("include special characters?");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
