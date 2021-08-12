'use strict';

const pesquisarCep = () =>{
    const cep = document.getElementById('cep').value;
    alert(cep);
}

document.getElementById('cep')
        .addEventListener('focusout', pesquisarCep);