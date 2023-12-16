const btnEl=document.querySelector('.btn')
const inputEl=document.getElementById('input')
const copyIconEl=document.querySelector('.fa-copy')
const alertEl=document.querySelector('.alert-container')

btnEl.addEventListener('click',()=>{
    generatePassword()
})

copyIconEl.addEventListener('click',()=>{
    copyPassword()
    if(inputEl.value){
        alertEl.classList.remove('active')
    setTimeout(()=>{
        alertEl.classList.add('active')
    }, 3500)
    }
})

function generatePassword(){
    const characters='0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const passwordLength=13;
    let password='';
    for (let index = 0; index < passwordLength; index++) {
        const randomNumber=Math.floor(Math.random()*characters.length)
        password+=characters.substring(randomNumber, randomNumber+1)
        //console.log(randomNumber, password);
    }
    inputEl.value=password
    alertEl.innerText=password+' copied!'
}

function copyPassword(){
    inputEl.select()
    inputEl.setSelectionRange(0,9999)
    navigator.clipboard.writeText(inputEl.value)
}