//Pega o formulario pelo seu id
const formCadastro = document.getElementById('formCadastro')
//2. Adiciona um evento de submit(enviar) ao formulário 
formCadastro.addEventListener
('submit', function(evento){
    evento.preventDefault();//evita recarregar a pagina
    //3. Pega os valores do campo do formulario
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const cpf = document.getElementById('cpf').value;
    const telefone = document.getElementById('telefone').value;
    const dataNascimento = document.getElementById('dataNascimento').value;
    //4. Cria um objeto junto com os valores
    // 5. Mostrar o resultado na tela
document.getElementById('resultado').innerHTML = 
`<p>Nome: ${nome} </p> <br>
<p>Email: ${email}</p><br>
<p>Senha: ${senha} </p><br>
<p>Cpf: ${cpf}</p><br>
<p>Telefone: ${telefone}</p><br>
<p>DataNascimento: ${dataNascimento}</p><br>`;
})
