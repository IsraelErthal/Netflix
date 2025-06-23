const form = document.getElementById("formCadastroSelecao")
const lista = document.getElementById("listaSelecao")
form.addEventListener("submit", function(evento) {
    evento.preventDefault(); // Evita recarregar a página
    // Pega os valores do campo do formulário
    const nome = document.getElementById("asia").value;
    const ano = document.getElementById("europa").value;
    const genero = document.getElementById("africa").value;
    const plataforma = document.getElementById("america").value;
    const america = document.getElementById("oceania").value;

    // Criar um novo item na lista de jogos
    const novoJogo = document.createElement("li");
    novoJogo.innerText = `${nome} -- ${ano} -- Gênero: ${genero} -- Plataforma: ${plataforma}`;
    //Adiciona o novo item na lista
    lista.appendChild(novoJogo);
    //Limpa os campos do formulário
    form.reset();
});l