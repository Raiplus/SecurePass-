function validatePassword() {
    let password = document.getElementById("passwordInput").value; // Get input value

    // Initialize validation variables
    let hasNumber = false;
    let hasUppercase = false;
    let hasLowercase = false;
    let length = password.length;

    let resultMessage = "";

    // Check length
    if (length < 8) {
        resultMessage += "❌ Password must be at least 8 characters long.<br>";
    } else {
        // Loop through each character in the password
        for (let i = 0; i < length; i++) {
            let char = password[i];
            let charCode = password.charCodeAt(i);

            if (!isNaN(char)) hasNumber = true;  // Check if character is a number
            if (charCode >= 65 && charCode <= 90) hasUppercase = true;  // Uppercase
            if (charCode >= 97 && charCode <= 122) hasLowercase = true;  // Lowercase
        }

        // Checking validation conditions
        if (!hasUppercase) resultMessage += "❌ Password must contain at least one uppercase letter.<br>";
        if (!hasLowercase) resultMessage += "❌ Password must contain at least one lowercase letter.<br>";
        if (!hasNumber) resultMessage += "❌ Password must contain at least one number.<br>";

        // If all conditions are met
        if (hasUppercase && hasLowercase && hasNumber) {
            resultMessage = "✅ Strong password! 🎉";
        }
    }

    // Display result message
    document.getElementById("result").innerHTML = resultMessage;
}
