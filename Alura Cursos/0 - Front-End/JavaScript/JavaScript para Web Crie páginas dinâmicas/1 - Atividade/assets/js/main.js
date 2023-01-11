const listaDeButtons = document.querySelectorAll('.button');
const showNumber = document.querySelector('.number input');
let contador = 0;

while(contador < listaDeButtons.length){
    let vl = listaDeButtons[contador].value;

    listaDeButtons[contador++].onclick = function(){
        digita(vl);
    };
}

function digita(buttonValue){
    if(showNumber.value.length != 10 || showNumber.value.length < 10)
        showNumber.value += parseInt(buttonValue);
    else{
        let phoneNumber = document.querySelector('input[type="tel"]');
        console.log(phoneNumber.value);
    }
}

