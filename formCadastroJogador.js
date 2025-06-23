const form = document.getElementById("formJogador");
const lista = document.getElementById("listaJogadores");
//função que quando alguém clicar no nbotão de enviar, vai pegar os valores
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita recarregar a página
    const nome = document.getElementById('nome').value;
    const habilidades = document.querySelectorAll('input[name = "habilidades"]:checked');
    const habilidadesArray = Array.from(habilidades).map(h => h.value);
    //Pega a posição do jogador
    const posicao = document.querySelector('input[name="posicao"]:checked').value;
    //pega a data de streia do jogador
    const dataEstreia = document.getElementById('estreia').value;
    //Adiciona o jogador na lista
    const jogadorItem = document.createElement('li');
    jogadorItem.innerHTML = `Nome: ${nome} <br>
    Habilidades: ${habilidadesArray.join(', ')}, <br>
    Posição: ${posicao} <br> 
    Data de Estreia: ${dataEstreia}`;
    lista.appendChild(jogadorItem);
    form.reset();
})
