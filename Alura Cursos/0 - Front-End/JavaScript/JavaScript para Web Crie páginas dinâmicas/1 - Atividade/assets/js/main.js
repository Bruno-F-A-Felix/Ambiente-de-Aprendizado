const listaDeButtons = document.querySelectorAll('.button');
const showNumber = document.querySelector('.number input');
let contador = 0;

while(contador < listaDeButtons.length){
    let vl = listaDeButtons[contador].value;

    listaDeButtons[contador++].onclick = function(){
        digita(vl);
    };
    showNumber.classList.remove("tremer");
}

function digita(buttonValue){
    let className = showNumber.classList[0];
    console.log(className);

    if(showNumber.value.length != 10 || showNumber.value.length < 10)
        showNumber.value += parseInt(buttonValue);
    else
        showNumber.classList.add("tremer");
}

