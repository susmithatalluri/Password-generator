function generatePassword() {
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const digits = "0123456789";
    const specials = "!@$#%^&*()-_+=<>?";
    let chars = "";
    let password = "";
    const length = document.getElementById("passwordLength").value;
    if (document.getElementById("lowercaseCb").checked) {
        chars += lowercase;
    }
    if (document.getElementById("uppercaseCb").checked) {
        chars += uppercase;
    }
    if (document.getElementById("digitsCb").checked) {
        chars += digits;
    }
    if (document.getElementById("specialsCb").checked) {
        chars += specials;
    }
    
    for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    document.getElementById("password").value = password;
}
function copyPassword() {
    const passwordInput = document.getElementById("password");
    passwordInput.select();
    document.execCommand("copy");
    alert("Password copied to clipboard!");
}
document.getElementById("passwordLength").addEventListener("input", function () {
    document.getElementById("passwordLengthValue").textContent = this.value;
});
