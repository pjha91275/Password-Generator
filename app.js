let lengthSlider = document.getElementById('lengthSlider');
let sliderValue = document.getElementById('sliderValue');
let password = document.getElementById('password');

sliderValue.textContent = lengthSlider.value;

lengthSlider.addEventListener("input", ()=>{
    sliderValue.textContent = lengthSlider.value;
})

let checkboxes = document.querySelectorAll('.checkbox');

Array.from(checkboxes).forEach(Element=>{
    Element.addEventListener('click',(e)=>{
        if(e.target.innerText == 'radio_button_unchecked'){
            e.target.innerText ='task_alt';
            e.target.nextElementSibling.nextElementSibling.checked = true;
        }
        else{
            e.target.innerText = 'radio_button_unchecked';
             e.target.nextElementSibling.nextElementSibling.checked = false;
        }
    })
})

let includeLabels = document.querySelectorAll('.row label');

Array.from(includeLabels).forEach(Element=>{
    Element.addEventListener('click',(e)=>{
        if(e.target.previousElementSibling.innerText == 'radio_button_unchecked'){
            e.target.previousElementSibling.innerText ='task_alt';
        }
        else{
            e.target.previousElementSibling.innerText = 'radio_button_unchecked';
        }
    })
})

let generateBtn = document.getElementById('generateBtn');

generateBtn.addEventListener('click',function(){
    let length =lengthSlider.value;

    let uppercase = document.getElementById('uppercase').checked;
    let lowercase = document.getElementById('lowercase').checked;
    let symbols = document.getElementById('symbols').checked;
    let numbers = document.getElementById('numbers').checked;

    let password_generated = generatePassword(length, uppercase,lowercase,symbols,numbers);

    password.value = password_generated;
})

function generatePassword(length, uppercase, lowercase, symbols, numbers) {
    let allChars = "";
    let guaranteedChars = [];

    const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerSet = "abcdefghijklmnopqrstuvwxyz";
    const symbolSet = "!@#$%^&*()";
    const numberSet = "0123456789";

    if (uppercase) {
        allChars += upperSet;
        guaranteedChars.push(randomChar(upperSet));
    }
    if (lowercase) {
        allChars += lowerSet;
        guaranteedChars.push(randomChar(lowerSet));
    }
    if (symbols) {
        allChars += symbolSet;
        guaranteedChars.push(randomChar(symbolSet));
    }
    if (numbers) {
        allChars += numberSet;
        guaranteedChars.push(randomChar(numberSet));
    }

    while (guaranteedChars.length < length) {
        guaranteedChars.push(randomChar(allChars));
    }

    return guaranteedChars.join('');
}

function randomChar(str) {
    return str[Math.floor(Math.random() * str.length)];
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}


let copyIcon = document.getElementById('copyIcon');

copyIcon.addEventListener('click', ()=>{
    if(password.value !=""){
        navigator.clipboard.writeText(password.value);
        copyIcon.innerText= 'check';

        setTimeout(()=>{
           copyIcon.innerText = 'content_copy';
        },3000);
    }
})

