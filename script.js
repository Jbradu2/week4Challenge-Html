// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
//-Will need a varaible for: passwordLength, lowercase, uppercase, and special characters.. and numbers. arrays?

var charSet =""
var passwordResult = ""
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialCharacters = "!#$%'()*+,-./:;<=>?@[\\\"]^_`{|}~";
var numbers = "1234567890";
function generatePassword(){

  var passwordLength = parseInt(prompt ("PLEASE CHOOSE HOW MANY CHARACTERS IN YOUR PASSWORD BETWEEN 8 - 128"));

  if (passwordLength<8){
    alert ("PASSWORD MUST BE AT LEAST 8 CHARACTERS");
  }else if (passwordLength>128){
    alert ("PASSWORD CAN BE NO GREATER THAN 128 CHARACTERS");
  }else if (isNaN(passwordLength)){
    alert ("MUST SELECT NUMERICLE NUMBERS FOR THIS STAGE");
  }
var chooseCharType = confirm ("Would you like to use special characters?")
var chooseLowerCase = confirm ("Would you like to use lowercae?")
var chooseUppercase = confirm ("Would you like to use Uppercase?")
var chooseNumbers = confirm ("Would you like to use numbers?")
console.log(chooseCharType,chooseLowerCase,chooseUppercase,chooseNumbers,passwordLength)
if (!chooseCharType&&!chooseLowerCase&&!chooseUppercase&&!chooseNumbers){
  alert("MUST CHOOSE AT LEAST 1 OPTION")
}
if (chooseCharType === true){
  charSet += specialCharacters

}
if (chooseLowerCase === true){
 charSet += lowerCase
}
if (chooseUppercase === true){
  charSet += upperCase
}
if (chooseNumbers === true) {
charSet += numbers
}
console.log(charSet)
for (var i= 0; i<passwordLength; i++){
  var randomCharset = Math.floor(Math.random()*charSet.length)
  passwordResult += charSet.charAt(randomCharset)
}
  return passwordResult
}


// Write password to the #password input
function writePassword() { 
  //missing generate password function
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


//will need to make functions to determine length, and if user wants uppercase, numeric(numbers) lowercase, and special characters
//need to include list of each to define in variable

//GIVEN I need a new, secure password
//WHEN I click the button to generate a password
//THEN I am presented with a series of "prompts"-(instructs the browser to display a dialog with an 
//     optional message prompting the user to input some text, and to wait until the user either 
//     submits the text or cancels the dialog.) for password criteria

//WHEN prompted for password criteria
//THEN I select which criteria to include in the password
//WHEN prompted for the length of the password
//THEN I choose a length of at least 8 characters and no more than 128 characters

//WHEN asked for character types to include in the password
// can use alert()? alert to notify when user is outside of password parameters for each prompt
//these create "yes" or "no" booleans
// var chooseCharType = confirm ("must special characters?")
// var chooseUppercase = confirm ("Would you like to use lowercae?")
// var chooseUppercase = confirm ("Would you like to use Uppercase?")
// var chooseUppercase = confirm ("Would you like to use numbers?")
//THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
//WHEN I answer each prompt
// must make 16 variation/combinations of anwsers
//                       make prompts required
// for (var i = 0; i < passwordLength; i++) {
//   //picks a character within charSet at index of random number
//   V1 += V2 (Math.floor(Math.random() * charSet.length));
// }
// can this all be 1 function?
 //               prompt ("Do you want to use lowercase?")
 //               prompt ("Do you want to use uppercase?")
 //               prompt ("Do you want to use numeric?")
 //               prompt ("Do you want to use special characters?")
//THEN my input should be validated and at least ONE character type should be selected
//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteria
//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page- look up how to display..\\

// console.log(math.floor)

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
