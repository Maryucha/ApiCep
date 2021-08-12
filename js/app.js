"use strict";

const preencherFormulario = (endereco) => {
  document.getElementById("endereco").value = endereco.logradouro;
  document.getElementById("numero").value = endereco.numero;
  document.getElementById("bairro").value = endereco.bairro;
  document.getElementById("cidade").value = endereco.localidade;
  document.getElementById("estado").value = endereco.uf;
  document.getElementById("numero").value = "Digite o número";
};

const limparFormulario = () => {
  document.getElementById("endereco").value = "";
  document.getElementById("numero").value = "";
  document.getElementById("bairro").value = "";
  document.getElementById("cidade").value = "";
  document.getElementById("estado").value = "";
  document.getElementById("numero").value = "";
  document.getElementById("cep").value = "";
};

const asNumero = (numero) => /^[0-9]+$/.test(numero);
const cepValido = (cep) => cep.length == 8 && asNumero(cep);

const pesquisarCep = async () => {
  const cep = document.getElementById("cep").value;
  const url = `http://viacep.com.br/ws/${cep}/json/`;

  if (cepValido(cep)) {
    const dados = await fetch(url);
    const endereco = await dados.json();
    if (endereco.hasOwnProperty("erro")) {
      alert(
        "Endereço não encontrado! Cadastre esse cep em https://viacep.com.br/cep/"
      );
      limparFormulario();
    } else {
      preencherFormulario(endereco);
    }
  } else {
    alert(
        "O CEP digitado não é válido."
      );
    limparFormulario();
  }
};

document.getElementById("cep").addEventListener("focusout", pesquisarCep);
