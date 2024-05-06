const form = document.getElementById('form-cadastro');
let linhas = '';
const nomes = [];
const telefones = [];

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNome = document.getElementById('nome-nome');
    const inputTelefone = document.getElementById('tel-tel');

    if (nomes.includes(inputNome.value)) {
        alert(`O nome: ${inputNome.value} já foi inserido`);
    } else {
        nomes.push(inputNome.value);
        telefones.push(inputTelefone.value);

        let linha = '<tr>';
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputTelefone.value}</td>`;
    linha += '</tr>';

    linhas += linha;
    }
    
    inputNome.value = '';
    inputTelefone.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}