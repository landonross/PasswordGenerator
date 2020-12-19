//All possible characters to choose from
const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*=-_";

// All variables to pull from to generate a random password and save it
const generateEl = document.getElementById("generate");
const upperEl = document.getElementById("upper");
const lowerEl = document.getElementById("lower");
const numberEl = document.getElementById("number");
const symbolEl = document.getElementById("symbol");
const copyEl = document.getElementById("copy");
const pwEl = document.getElementById("pw");
const lenEl = document.getElementById("len")

// These are the functions to pull random uppercase, lowercase, numbers, and symbols to form a password.
function getLowercase() {
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

function getUppercase() {
    return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

function getNumber() {
    return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}

//This is the function for when you press the button to generate what has been inputed and output into the text box
function generatePassword() {
    const len = lenEl.value;

    if (len < 8) {
        alert("Must be atleast 8 characters long")
        return (len === "")
    }
    else if (len > 128) {
        alert("Cannot be longer than 128 characters long")
        return (len === "")
    }

    let password = "";

    if (upperEl.checked) {
        password += getUppercase();
    }

    if (lowerEl.checked) {
        password += getLowercase();
    }

    if (numberEl.checked) {
        password += getNumber();
    }

    if (symbolEl.checked) {
        password += getSymbol();
    }

    for (let i = password.length; i < len; i++) {
        const x = generateX();
        password += x;
    }

    pwEl.innerText = password;
}

//This function is for pushing the newly formed password to the textbox provided on the page.
//I looked up various examples of how to do this on different slackoverflow's
function generateX() {
    const xs = [];
    if (upperEl.checked) {
        xs.push(getUppercase());
    }

    if (lowerEl.checked) {
        xs.push(getLowercase());
    }

    if (numberEl.checked) {
        xs.push(getNumber());
    }

    if (symbolEl.checked) {
        xs.push(getSymbol());
    }

    if (xs.length === 0) return "";

    return xs[Math.floor(Math.random() * xs.length)];
}

generateEl.addEventListener("click", generatePassword);