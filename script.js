// Assignment Code
const generateBtn = document.querySelector("#generate");
const passChoices = ["uppercase", "lowercase", "numerical", "special"]
const upperChar = ["QWERTYUIOPASDFGHJKLZXCVBNM"];
const lowerChar = ["qwertyuiopasdfghjklzxcvbnm"];
const numChar = ["1234567890"];
const specChar = ["?!@#$%^&*()"];
let validChar = [];
const random = (Math.floor(Math.random() * 100) + 0);



function writePassword() {
  const passLength = prompt("Please enter a password length between 8 and 128 characters.");
  const validLength = (passLength >= 8 && passLength < 129)
  // const password = generatePassword();
  let passwordText = document.querySelector("#password");
  
  
  if  (validLength) {
    passPara();
  } else {
    alert("Please enter a value between 8 and 128.");
    writePassword();
  }
  
  function passPara() {
    let upperValid = confirm("Should the password contain any " + passChoices[0] + " characters?");
    let lowerValid = confirm("Should the password contain any " + passChoices[1] + " characters?");
    let numbValid = confirm("Should the password contain any " + passChoices[2] + " characters?");
    let specValid = confirm("Should the password contain any " + passChoices[3] + " characters?");
    if (upperValid || lowerValid || numbValid || specValid) {
      if (upperValid) {
        validChar += upperChar;
      }
      if (lowerValid) {
        validChar += lowerChar;
      }
      if (numbValid) {
        validChar += numChar;
      }
      if (specValid) {
        validChar += specChar;
      }
    } else {
      alert("Please select at least one character type.");
      passPara();
    }
    generatePassword();
    console.log(validChar)
  }
}
  function generatePassword() {
    let passwordText = "";
    for (let i = 0; i < validChar.length; i++) {
      passwordText += validChar.indexOf(Math.floor(Math.random() * validChar.length));
    }
    return 
  }
  


// Couldn't figure out the last bit! Womp womp.


// passwordText.value = password;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);