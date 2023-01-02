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
    showNumber.value += parseInt(buttonValue);

    console.log(buttonValue);
}

