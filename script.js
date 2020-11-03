// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

function generatePassword(){
  var lengthPass = prompt("How many characters would you like password to be? Choose 8-128");

  var caseUpper = confirm("Add Uppercase letters?");
  console.log(caseUpper);
  var caseLower = confirm("Add Lowercase letters?");
  var numeric = confirm("Add numbers?");
  var specialChar = confirm("Add special characters?");
  var randomString = "";

  var generatedPass = "";

  if(lengthPass > 128 || lengthPass < 8){
    alert("Not in range");
  }

  if(caseUpper){
    randomString += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  if(caseLower){
    randomString += "abcdefghijklmnopqrstuvwxyz";
  }

  if(numeric){
    randomString += "1234567890";
  }

  if(specialChar){
    randomString += "!@#$%^&*()";
  }

  if(caseLower === false && caseUpper === false && numeric === false && specialChar === false){
    alert("This is invalid input");
  }else{
    alert("You chose a password that is uppercase: " + caseUpper + "\nis lowercase: " + 
    caseLower + "\nhas numbers: " + numeric + "\nhas special characters: " + specialChar);
  }

  for(let i = 0; i < lengthPass; i++){
    var char = Math.floor(Math.random() * randomString.length + 1);              
    generatedPass += randomString.charAt(char)
  }

  return generatedPass;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
