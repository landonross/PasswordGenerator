var password = document.getElementById("password");

// Function to generate combination of password characters */
function generateP() {
    var pass = '';
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
        'abcdefghijklmnopqrstuvwxyz0123456789@#$';
// prompt to ask how many characters they want for the password
    var length = prompt("How many characters do you want?")
    for (i = 1; i <= [length]; i++) {
        var char = Math.floor(Math.random()
            * str.length + 1);
            
        pass += str.charAt(char)
    }

    return pass;
}

function passwordRun() {
    password.innerHTML = generateP();
} 