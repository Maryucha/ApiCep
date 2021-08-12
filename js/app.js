'use strict';

const preencherFormulario = (endereco) => {
    document.getElementById('endereco').value = endereco.logradouro;
    document.getElementById('numero').value = endereco.numero;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value = endereco.uf;
}

 const pesquisarCep = async() =>{
    const cep = document.getElementById('cep').value;
    const url= `http://viacep.com.br/ws/${cep}/json/`;

    const dados = await fetch(url);
    const endereco = await dados.json();
    preencherFormulario(endereco);

    //ele faz tudo é assincrono e tras uma pomisse ai eu pego apenas a responsse e trato ela pelo metodo json
   // fetch(url).then(response => response.json()).then(console.log);
}

document.getElementById('cep')
        .addEventListener('focusout', pesquisarCep);