// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// window.prompt("Please enter a password length between 8 and 128 characters.")

function askQuestion() {
  let text = "Should the password contain any " + passChoices + "?"
}

const passChoices = ["lowercase letters ", "uppercase letters ", "numbers ", "special characters "];


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


Math.floor(math.random() * 100) + 0