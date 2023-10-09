let passbox = document.getElementById('passbox');
let inputslider = document.getElementById('inputslider');
let slidervalue = document.getElementById('slidervalue');
let lowercase = document.getElementById('lowercase');
let uppercase = document.getElementById('uppercase');
let numbers = document.getElementById('numbers');
let symbols = document.getElementById('symbols');
let genbtn = document.getElementById('genbtn');
let copyicons = document.getElementById('copyicons');

//showing input slider value
slidervalue.textContent = inputslider.value;
inputslider.addEventListener('input',()=>{
    slidervalue.textContent = inputslider.value;
})

genbtn.addEventListener('click',()=>{
    passbox.value = genaratePassword();
})
let lowerChar = "abcdefghijklmnopqrstuvwxyz";
let upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allNums = "0123456789";
let allsymbols = "~!@#$%^&*";

function genaratePassword(){
    let genPassword = "";
    let allChars="";
    // genPassword = Math.floor(Math.random()*10)
    // return genPassword;
    allChars +=lowercase.checked ? lowerChar : "";
    allChars +=uppercase.checked ? upperChar : "";
    allChars +=numbers.checked ? allNums : "";
    allChars +=symbols.checked ? allsymbols : "";

    if(allChars == ""||allChars.length == 0){
        return genPassword;
    }

    let i=0;
    while(i<inputslider.value){
        genPassword += allChars . charAt(Math.floor(Math.random()*allChars.length));
        i++;

    }
    return genPassword;
}

copyicons.addEventListener('click',()=>{
    if(passbox.value!="" || passbox.value.length>=1){
        navigator.clipboard.writeText(passbox.value);
        copyicons.innerText = "check";
        copyicons.title = "Password Copied";


        setTimeout(()=>{
            copyicons.innerHTML = "content_copy";
            copyicons.title = "";
        },3000)
    }
    
})