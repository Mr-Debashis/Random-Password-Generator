const passwordBox = document.getElementById('password');
const passLenght = 12;
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowerCase = 'abcdefghijklmnopqrstuvwxyz'
const numbers = '0123456789'
const symbols = '$#%|/@&\='
const allCharacters = upperCase + lowerCase + numbers + symbols;

function createPassword() {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while (passLenght > password.length) {
        password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
    }
    passwordBox.value = password
}




const clickBTN = document.querySelector('#gen-btn').addEventListener('click', () => {
    createPassword()
})



function copyPass (){
    passwordBox.select();
    document.execCommand('copy');
}

const copyBTN = document.querySelector('#copy-icon').addEventListener('click', () => {
    copyPass()
})
