const listaDeButtons = document.querySelectorAll('.button');
let contador = 0;

while(contador < listaDeButtons.length){
    let vl = listaDeButtons[contador].value;

    listaDeButtons[contador++].onclick = function(){
        digita(vl);
    };
}

function digita(buttonValue){
    console.log(buttonValue);
}

