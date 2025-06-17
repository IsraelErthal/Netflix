//Aqui vamos pegar o form e a lista para exiir os filmes
const form = document.getElementById("formFilme")
const lista = document.getElementById("listaFilmes")
//Adiciona um evento de submit ao formulário
form.addEventListener("submit", function(evento) {
    evento.preventDefault(); // Evita recarregar a página
    // Pega os valores do campo do formulário
    const titulo = document.getElementById("titulo").value;
    const ano = document.getElementById("ano").value;
    const genero = document.getElementById("genero").value;
    // Criar um novo item na lista de filmes
    const novoFilme = document.createElement("li");
    novoFilme.innerText = `${titulo} -- ${ano} -- Gênero: ${genero}`;
    //Adiciona o novo item na lista
    lista.appendChild(novoFilme);
    //Limpa os campos do formulário
    form.reset();
});