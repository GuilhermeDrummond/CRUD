document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar o envio padrão do formulário

        const inputElement = document.querySelector('.input');
        const valorInput = inputElement.value;
        console.log( valorInput);

        // Chama a função para adicionar um novo parágrafo com o valor do input
        addParagrafo(valorInput);

        // Limpa o valor do input após enviar o formulário
        inputElement.value = '';
    });
});

function addParagrafo(valorInput) {

    // Criar uma nova div
    const novaDiv = document.createElement("div");
    novaDiv.classList.add('paragrafo'); // Adiciona a mesma classe da div existente

    // Criar um novo parágrafo
    const novoParagrafo = document.createElement("p");
    novoParagrafo.textContent = valorInput;

    // Adicionar o novo parágrafo à nova div
    novaDiv.appendChild(novoParagrafo);

    // Criar a div dos botões
    const divBotoes = document.createElement("div");
    divBotoes.classList.add('button');

    // Criar botão delete
    const botaoDelete = document.createElement("button");
    botaoDelete.classList.add('delete');
    botaoDelete.textContent = "🗑️";
    divBotoes.appendChild(botaoDelete);

    // Criar botão edit
    const botaoEdit = document.createElement("button");
    botaoEdit.classList.add('edit');
    botaoEdit.textContent = "✏️";
    divBotoes.appendChild(botaoEdit);

    // Adicionar a div de botões à nova div
    novaDiv.appendChild(divBotoes);

    // Adicionar a nova div à tela
    document.body.appendChild(novaDiv);
}
