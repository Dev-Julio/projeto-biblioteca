// Variáveis de DIV
const paginaLogin = document.getElementById('pagina-login');
const paginaCadastro = document.getElementById('pagina-cadastro-usuario');

// Variáveis de botões e inputs
const voltarPaginaLogin = document.getElementById('voltar-pagina-login');
const mudarParaPaginaCadastro = document.getElementById('ir-para-pagina-de-cadastro');
const finalizarCadastroUsuario = document.getElementById('btn-cadastrar-usuario');
const finalizarLoginUsuario = document.getElementById('efetuar-login');
const presetFormatCPFlogin = document.getElementById('CPF-login');
const presetFormatCPFcadastro = document.getElementById('CPF-cadastro');

// Essa função irá limpar os campos do formulário de login, ao retornar para a pagina de cadastro
function limparInputsLogin() {
  const inputs = document.querySelectorAll('#formulario-login input[type="text"], #formulario-login input[type="password"]');
  inputs.forEach(input => input.value = '');
}

// Essa função irá limpar os campos do formulário de cadastro, ao retornar para a página de login
function limparInputsCadastro() {
  const inputs = document.querySelectorAll('#formulario-cadastro input[type="text"], #formulario-cadastro input[type="password"]');
  inputs.forEach(input => input.value = '');
}

// Essa função irá verificar se os inputs da página de login estão preenchidos corretamente
function barrarInputsVazioLogin() {
  const inputs = document.querySelectorAll('#formulario-login input[type="text"], #formulario-login input[type="password"]');
  return Array.from(inputs).every(input => input.value.trim() !== '');
}

// Essa função vai impedir que durante o cadastro de usuários, alguma das informações fiquem faltando
function barrarInputsVazioCadastro() {
  const inputs = document.querySelectorAll('#formulario-cadastro input[type="text"], #formulario-cadastro input[type="password"]');
  return Array.from(inputs).every(input => input.value.trim() !== '');
}

// Função responsável por mostrar a senha que o usuário digitou
function revelarSenha() {
  const revelarSenhaLogin = document.getElementById('senha-login');
  const revelarSenhaCadastro = document.getElementById('senha-cadastro');
  const btnRevelaSenhaLogin = document.getElementById('btn-ver-senha-login');
  const btnRevelaSenhaCadastro = document.getElementById('btn-ver-senha-cadastro');

  if (revelarSenhaLogin.type === 'password') revelarSenhaLogin.type = 'text';
  btnRevelaSenhaLogin.style.display = 'none';

  setTimeout(() => revelarSenhaLogin.type = 'password', btnRevelaSenhaLogin.style.display = 'inline', 1500);

  if (revelarSenhaCadastro.type === 'password') revelarSenhaCadastro.type = 'text';
  btnRevelaSenhaCadastro.style.display = 'none';

  setTimeout(() => revelarSenhaCadastro.type = 'password', btnRevelaSenhaCadastro.style.display = 'inline', 1500);
}

// Essa função é responsável por validar o CPF, login e cadastro
function validarCPF(inputCPF) {
  if (!/^\d/.test(inputCPF)) {
    return 'O CPF deve começar com um número.';
  } else if (isNaN(inputCPF.replace(/[\.\-]/g, ''))) {
    return 'Preencha o CPF apenas com números.';
  } else if (inputCPF.length < 14) {
    return 'Preencha o CPF corretamente.';
  } else if (inputCPF === '.' || inputCPF === '-') {
    return 'Preencha o CPF corretamente.';
  }
  return true; // Se o CPF estiver dentro dos parametros definidos, será retornado um valor TRUE
}

// Essa função é responsável por exibir os alertas de erro das validações do CPF
function exibirAlerta(elemento, mensagem) {
  elemento.innerHTML = mensagem; 
  setTimeout(() => alertaElement.innerHTML = '', 2500);
}

// Aqui refere-se ao botão voltar, presente na tela de cadastro, ao clicar nele, você retorna à página de login
voltarPaginaLogin.addEventListener('click', () => {
  paginaLogin.style.display = 'inline';
  paginaCadastro.style.display = 'none';
  limparInputsLogin();
  limparInputsCadastro();
});

// Aqui a tela de login é ocultada e a página de cadastro aparece
mudarParaPaginaCadastro.addEventListener('click', () => {
  paginaLogin.style.display = 'none';
  paginaCadastro.style.display = 'inline';
  limparInputsCadastro();
  limparInputsLogin();
});

// Aqui vai ser responsável por adicionar os '.' e os '-' no CPF do login, automaticamente
presetFormatCPFlogin.addEventListener('keypress', () => {
  let preset = presetFormatCPFlogin.value.length;

  if (preset === 3 || preset === 7) presetFormatCPFlogin.value += '.';
  if (preset === 11) presetFormatCPFlogin.value += '-';
});

// Aqui é realizada a validação do login
finalizarLoginUsuario.addEventListener('click', () => {
  if (barrarInputsVazioLogin()) {
    const alertaInputsVazioLogin = document.getElementById('alerta-campos-incompletos-login');
    const resultadoValidacaoLogin = validarCPF(document.getElementById('CPF-login').value);

    if (resultadoValidacaoLogin === true) {
      paginaLogin.style.display = 'none';
      // Aqui adiciona o código para redirecionar o usuário para o HTML do acervo da biblioteca
    } else exibirAlerta(alertaInputsVazioLogin, resultadoValidacaoLogin)

  } else {
    const alertaInputsVazioLogin = document.getElementById('alerta-campos-incompletos-login');
    exibirAlerta(alertaInputsVazioLogin, 'Preencha todos os campos corretamente!');
  }
});

// Aqui vai ser responsável por adicionar os '.' e os '-' no CPF do cadastro, automaticamente
presetFormatCPFcadastro.addEventListener('keypress', () => {
  let preset = presetFormatCPFcadastro.value.length;

  if (preset === 3 || preset === 7) presetFormatCPFcadastro.value += '.';
  if (preset === 11) presetFormatCPFcadastro.value += '-';
});

// Aqui finaliza o cadastro dos usuários, manda os valores pro banco de dados
adicionar.addEventListener('click', () => {
  if (barrarInputsVazioCadastro()) {
    const alertaInputsVazioCadastro = document.getElementById('alerta-campos-incompletos-cadastro');
    const resultadoValidacaoCadastro = validarCPF(document.getElementById('CPF-cadastro').value);

    if (resultadoValidacaoCadastro === true) {
      paginaCadastro.style.display = 'none';
      paginaLogin.style.display = 'inline';
    } else exibirAlerta(alertaInputsVazioCadastro, resultadoValidacaoCadastro)

  } else {
    const alertaInputsVazioCadastro = document.getElementById('alerta-campos-incompletos-cadastro');
    exibirAlerta(alertaInputsVazioCadastro, 'Preencha todos os campos corretamente!');
  }
});