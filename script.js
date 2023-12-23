// Assignment Code
const generateBtn = document.querySelector("#generate");
const passChoices = ["uppercase", "lowercase", "numerical", "special"]
const upperChar = ["QWERTYUIOPASDFGHJKLZXCVBNM"];
const lowerChar = ["qwertyuiopasdfghjklzxcvbnm"];
const numChar = ["1234567890"];
const specChar = ["?!@#$%^&*()"];



function passPara() {
let upperValid = confirm("Should the password contain any " + passChoices[0] + " characters?");
let lowerValid = confirm("Should the password contain any " + passChoices[1] + " characters?");
let numbValid = confirm("Should the password contain any " + passChoices[2] + " characters?");
let specValid= confirm("Should the password contain any " + passChoices[3] + " characters?");
console.log(upperValid, lowerValid, numbValid, specValid);
}


function writePassword() {
  let passLength = prompt("Please enter a password length between 8 and 128 characters.");
  const validLength = (passLength >= 8 && passLength < 129)
  if  (validLength) {
    passPara()
    
  } else {
    alert("Please enter a value between 8 and 128.");
    writePassword();
  }


  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


Math.floor(math.random() * 100) + 0