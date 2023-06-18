// Get references to the necessary DOM elements.
let generateBtn = document.querySelector("#generate");
let copyBtn = document.querySelector("#copy");
let passwordText = document.querySelector("#password");
let lengthInput = document.querySelector("#length");
let lengthValue = document.querySelector("#lengthValue");

// Function to write the generated password to the password textarea.
function writePassword() {
  let password = generatePassword();
  passwordText.value = password;
}
function generatePassword() {
  let password = "";

  // Get the password length from the length input element.
  let length = parseInt(lengthInput.value);

  // Get the checkbox elements for character types
  let lowercaseCheckbox = document.querySelector("#lowercase");
  let uppercaseCheckbox = document.querySelector("#uppercase");
  let numericCheckbox = document.querySelector("#numeric");
  let specialCheckbox = document.querySelector("#special");

  // Validate password length. Set a if condition if not a number OR lenght is less than 8 OR length more than 128 return with a prompt.
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Invalid password length. Please enter a number between 8 and 128.");
    return;
  }

  // Check if at least one character type is selected
  if (
    !lowercaseCheckbox.checked &&
    !uppercaseCheckbox.checked &&
    !numericCheckbox.checked &&
    !specialCheckbox.checked
  ) {
    alert("You must select at least one character type.");
    return;
  }

  // Define character pools for each character type.
  let lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  let uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let numericChars = "0123456789";
  let specialChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

  // Created an empty string called availableChars by fusing different character pools based on what checkboxes people have selected. It essentially gathers all the chosen characters for generating the password into one string.

  let availableChars = "";
  if (lowercaseCheckbox.checked) {
    availableChars += lowercaseChars;
  }
  if (uppercaseCheckbox.checked) {
    availableChars += uppercaseChars;
  }
  if (numericCheckbox.checked) {
    availableChars += numericChars;
  }
  if (specialCheckbox.checked) {
    availableChars += specialChars;
  }

  // Generate the password using a for loop that iterates length number of times. Each iteration is a random index using the 'math.random' function and selecting a character from the 'availableChar' string. Chosen character is then added to the password. 
  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * availableChars.length);
    password += availableChars.charAt(randomIndex);
  }

  // Return the generated password.
  return password;
}

// Function updates the displayed value of the password length slider.
function updateLengthValue() {
  lengthValue.textContent = lengthInput.value;
}

// Add event listeners for button click and slider input.
generateBtn.addEventListener("click", writePassword);
lengthInput.addEventListener("input", updateLengthValue);

// Update the displayed value of the password length initially.
updateLengthValue();
