

var generateBtn = document.querySelector("#generate");


function generatePassword() {
// I did not comepletely write this code, meaning most of it was written following a few examples from stack overflow that made sense to me.
 
  var length = Number(prompt("Choose password length (min 8 - max 128 chracaters)" ))
  var charType = prompt("Coose Character type: special, numeric, uppercase, lowercase.")
      var  charsets = {
        lowercase: 'abcdefghijklmnopqrstuvwxyz',
        uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        numeric: '0123456789',
        special: ' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
  };

  // During my research I did find the fact that Math.random is not cryptographically secure for an actual real world password. 
  // I contemplated using a more secure way but I didn find it a little overkill for this assignment. So I stuck with the "simplest" version.
  // Hopefully we will see more about crypto secure stuff later in the bootcamp, otherwise I'm already aware of it;s real world implementations.
  var charset = charsets[charType.toLowerCase()] || charsets.lowercase;
  var retVal = "";
  for (var i = 0, n = charset.length; i < length; i++) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
