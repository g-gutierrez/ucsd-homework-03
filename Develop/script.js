

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
    var passParams = passwordParameters();
    var passString = "";
    var pChar ="";

    for (var i = 0; i < passParams[0]; i++) {         // loop to generate each character for maximum password length iterations
      if ( passParams.length > 2) {                   // if there is more than 1 character type requested
          var typeIndex = (Math.floor((Math.random() * (passParams.length - 1))) + 1);    // randomize an index based on length, ignoring element 0 password length
      } else {
          var typeIndex = 1;
      }
                 
      if (passParams[typeIndex] == "upper") {         // if upper then generate random alpha and call toUpperCase to convert to upper
          pAlpha = genAlpha();
          pChar = pAlpha.toUpperCase();
          console.log("Upper case chosen - " + pChar);
      } else {
        if (passParams[typeIndex] == "lower") {
            pChar = genAlpha();
        } else {
          if (passParams[typeIndex] == "numeric") {
              pChar = genNumeric();
          } else {
              pChar = genSpecial();
          }
        }
      }
      passString += pChar;                            // concatenate the single character to the password string
    }
  return (passString);                                // return the password string once the password length is hit              
}






function passwordParameters() {
  var charType = 0;                             // initialize character type counter
  var upper, lower, numeric, special = false;   // initialize character type boolean flags
  var pswdLength = 0;                           // initialize password length selected to 0 
  var passParams = [];                          // [ 20, "upper", "lower", "numeric", "special"]
  
  while (!((pswdLength > 7) && (pswdLength < 129))) {
    pswdLength = prompt("Enter length of desired password from 8 to 128 characters: ");

  }

  passParams.push(pswdLength);                  // push password length to passParam array.


  while (charType == 0) {                       // loop to prompt for character types until at least 1 is chosen
    if (charType == 0) {                        // provide instructions if first time through or if failed to choose min one type
      alert("Please confirm at least one character type.");
    }
    
    upper = confirm("Would you like to include upper case letters?");     // ask user if they would like to include upper case A-Z
    lower = confirm("Would you like to include lower case letters?");     // ask user if they would like to include lower case a-z
    numeric = confirm("Would you like to include numeric characters?");   // ask user if they would like to include numeric characters 0-9
    special = confirm("Would you like to include special characters");    // ask user if they would like to include special characters
    
    if (upper || lower || numeric || special) {                           // if they chose at least one then increment counter to exit prompt loop
      charType++;
    }
  }

  if (upper) {
    passParams.push("upper");                   // push "upper" to passParam
  }
  if (lower) {
    passParams.push("lower");                   // push "lower" to passParam
  }
  if (numeric) {
    passParams.push("numeric");                 // push "numeric" to passParam
  }
  if (special) {
    passParams.push("special");                 // push "special" to passParam
  }

  return passParams;
}


function genAlpha() {
  // generate a single lowercase alpha character
  // do not need a separate function for uppercase, can just use this and then utilize toUpperCase method to convert when needed
  var alphaArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var aChar = alphaArray[Math.floor((Math.random() * alphaArray.length))];
  return aChar;
}

function genNumeric() {
  // generate a single numeric character
  var nChar = Math.floor((Math.random() * 10));
  return nChar;
}

function genSpecial() {
  // generate a single special character
  var specialChar = ["!", "@", "#", "$", "%", "^", "\&", "*", "(", ")", "_", "+", "-", "=", "{", "}", "|", "[", "]", "\\", ":", "\"", ";", "\'", "<", ">", ",", ".", "?", "/", "~", "\`"]
  var sChar = specialChar[Math.floor((Math.random() * specialChar.length))];
  return sChar;
}
