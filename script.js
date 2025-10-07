function isChecked(element){
    return element ? element.checked : false;
}

let uppercase = document.getElementById("UpperCase");
let lowercase = document.getElementById("LowerCase");
let numbers = document.getElementById("Numbers");
let symbols = document.getElementById("Symbols");

let password = document.getElementById("Password");

function generate(){
    
    const UpperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const LowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const Numbers = "0123456789";
    const Symbols = "!@#%^*_+-."
    
    let passwordLength = document.getElementById("PasswordLength").value;
    let checkedChars = "";
    let generatedPassword = "";

    isChecked(uppercase) ? checkedChars += UpperCaseChars : "";
    isChecked(lowercase) ? checkedChars += LowerCaseChars : "";
    isChecked(numbers) ? checkedChars += Numbers : "";
    isChecked(symbols) ? checkedChars += Symbols : "";

    if (checkedChars === "" || passwordLength === 0) {
        return password.textContent = "(Please select at least 1 option!)";
    }

    if (passwordLength > 18) {
        return password.textContent = "(Password length cannot exceed 18 characters!)";
    }

    for (let i=0; i<passwordLength; i++){
        const randomIndex = Math.floor(Math.random() * checkedChars.length);
        generatedPassword += checkedChars[randomIndex];
    }

    return password.textContent = generatedPassword;
}

const copyButton = document.getElementById("copy-button");

copyButton.addEventListener("click", () => {
  const passwordText = password.textContent;

  if (!passwordText || passwordText.startsWith("(")) {
    alert("No valid password to copy!");
    return;
  }

  navigator.clipboard.writeText(passwordText)
    .then(() => {
      copyButton.textContent = "Copied!";
      setTimeout(() => copyButton.textContent = "Copy", 1500);
    })
    .catch(() => {
      alert("Failed to copy password 😢");
    });
});