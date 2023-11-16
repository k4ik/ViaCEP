async function searchCEP(cep) {
    try {
        const cepData = await((await fetch(`https://viacep.com.br/ws/${cep}/json/`)).json());

        let logradouro = document.getElementById("logradouro");
        let complemento = document.getElementById("complemento");
        let bairro = document.getElementById("bairro");
        let localidade = document.getElementById("localidade");
        let ddd = document.getElementById("ddd");
        logradouro.innerHTML = `Logradouro: ${cepData.logradouro}`;
        complemento.innerHTML = `Complemento: ${cepData.complemento}`;
        bairro.innerHTML = `Bairro: ${cepData.bairro}`;
        localidade.innerHTML = `Localidade: ${cepData.localidade}`;
        ddd.innerHTML = `DDD: ${cepData.ddd}`;

        let container = document.querySelector(".container");
        container.style.display = "block";

        console.log(cepData);
        return cepData;
    } catch (error) {
        console.log(error);
        alert("CEP desconhecido ou inválido, verifique se você inseriu o CEP corretamente!");
    }; 
};

let input = document.getElementById("input");
input.value = "";
let form = document.getElementById("form");

form.addEventListener('submit', function(event) {
    event.preventDefault();

    searchCEP(input.value);
}); 