const form = document.getElementById("formCadastroJogos")
const lista = document.getElementById("listaJogos")
form.addEventListener("submit", function(evento) {
    evento.preventDefault(); // Evita recarregar a página
    // Pega os valores do campo do formulário
    const nome = document.getElementById("titulo").value;
    const ano = document.getElementById("ano").value;
    const genero = document.getElementById("genero").value;
    const plataforma = document.getElementById("plataforma").value;
    // Criar um novo item na lista de jogos
    const novoJogo = document.createElement("li");
    novoJogo.innerText = `${nome} -- ${ano} -- Gênero: ${genero} -- Plataforma: ${plataforma}`;
    //Adiciona o novo item na lista
    lista.appendChild(novoJogo);
    //Limpa os campos do formulário
    form.reset();
});