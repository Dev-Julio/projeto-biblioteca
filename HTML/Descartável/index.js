// Variáveis de DIV
const divTelaLogin = document.getElementById('div-tela-login');
const divCadastroUsuario = document.getElementById('div-cadastro-usuarios');

// Variáveis de botões e inputs
const btnCadastrarUser = document.getElementById('cadastrarUser');
const inputsCadastro = document.querySelectorAll('#form-cadastro-user input');
const telaDeCadastro = document.getElementById('tela-de-cadastro');

// Funções para funcionalidade do site

// Alterna para a tela de cadastro
telaDeCadastro.addEventListener('click', () => {
  divTelaLogin.style.display = 'none';
  divCadastroUsuario.style.display = 'inline';
});

// Verifica se todos os campos de input do cadastro estão preenchidos 
function verificarInputsCadastro() {
  const inputsCadastro = document.querySelectorAll('#form-cadastro-user input[type="text"], #form-cadastro-user input[type="password"]');
  return Array.from(inputsCadastro).every(input => input.value.trim() !== '');
}

// Limpa os campos do formulário de cadastro
function limparCamposCadastro() {
  const inputs = document.querySelectorAll('#form-cadastro-user input[type="text"], #form-cadastro-user input[type="password"]');
  inputs.forEach(input => input.value = '');
}

// Valida os inputs e alterna para a tela de login ou exibe um alerta
btnCadastrarUser.addEventListener('click', () => {
  if (verificarInputsCadastro()) {
    divTelaLogin.style.display = 'inline';
    divCadastroUsuario.style.display = 'none';
    limparCamposCadastro();
  }
  else {
    const camposNaoPreenchidos = document.getElementById('alert-campos-nao-preenchidos-cadastro');
    camposNaoPreenchidos.innerHTML = 'Preencha todos os campos corretamente!';
    setTimeout(() => {
      camposNaoPreenchidos.innerHTML = '';
    }, 2000);
  }
});

// Alterna a visibilidade da senha por 2 segundos
function verSenha() {
  let re = document.getElementById('re');
  if (senha.type === 'password') senha.type = 'text';

  setTimeout(() => {
    senha.type = 'password';
  }, 1500);
}