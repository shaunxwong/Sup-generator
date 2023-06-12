// Get references to the necessary DOM elements
let generateBtn = document.querySelector("#generate");
let copyBtn = document.querySelector("#copy");
let passwordText = document.querySelector("#password");
let lengthInput = document.querySelector("#length");
let lengthValue = document.querySelector("#lengthValue");

// Function to write the generated password to the password textarea
function writePassword() {
  let password = generatePassword();
  passwordText.value = password;
}

// Function to generate the password based on user criteria
function generatePassword() {
  let password = "";

  // Get the password length from the length input element
  let length = parseInt(lengthInput.value);

  // Get the checkbox elements for character types
  let lowercaseCheckbox = document.querySelector("#lowercase");
  let uppercaseCheckbox = document.querySelector("#uppercase");
  let numericCheckbox = document.querySelector("#numeric");
  let specialCheckbox = document.querySelector("#special");

  // Validate password length
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

  // Define character pools for each character type
  let lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  let uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let numericChars = "0123456789";
  let specialChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

  // Create the available characters string based on checkbox selections
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

  // Generate the password based on user criteria
  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * availableChars.length);
    password += availableChars.charAt(randomIndex);
  }

  // Return the generated password
  return password;
}

// Function to update the displayed value of the password length slider
function updateLengthValue() {
  lengthValue.textContent = lengthInput.value;
}

// Add event listeners for button click and slider input
generateBtn.addEventListener("click", writePassword);
lengthInput.addEventListener("input", updateLengthValue);

// Update the displayed value of the password length initially
updateLengthValue();
