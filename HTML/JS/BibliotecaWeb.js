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

  setTimeout(() => {
    revelarSenhaLogin.type = 'password';
    btnRevelaSenhaLogin.style.display = 'inline';
  }, 1500);

  if (revelarSenhaCadastro.type === 'password') revelarSenhaCadastro.type = 'text';
  btnRevelaSenhaCadastro.style.display = 'none';

  setTimeout(() => {
    revelarSenhaCadastro.type = 'password';
    btnRevelaSenhaCadastro.style.display = 'inline';
  }, 1500);
}

// Aqui vai ser responsável por adicionar os '.' e os '-' no CPF do login, automaticamente
presetFormatCPFlogin.addEventListener('keypress', () => {
  let preset = presetFormatCPFlogin.value.length;

  if (preset === 3 || preset === 7) presetFormatCPFlogin.value += '.';
  if (preset === 11) presetFormatCPFlogin.value += '-';
});

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

// Aqui é realizada a validação do login
finalizarLoginUsuario.addEventListener('click', () => {
  if (barrarInputsVazioLogin()) {
    const alertaInputsVazioLogin = document.getElementById('alerta-campos-incompletos-login');
    const inputCPFLogin = document.getElementById('CPF-login').value;

    if (!/^\d/.test(inputCPFLogin)) {
      alertaInputsVazioLogin.innerHTML = 'O CPF deve começar com um número.';
    } else if (isNaN(inputCPFLogin.replace(/[\.\-]/g, ''))) {
      alertaInputsVazioLogin.innerHTML = 'Preencha o CPF apenas com números.';
    } else if (inputCPFLogin.length < 14) {
      alertaInputsVazioLogin.innerHTML = 'Preencha o CPF corretamente.';
    } else if (inputCPFLogin === '.' || inputCPFLogin === '-') {
      alertaInputsVazioLogin.innerHTML = 'Preencha o CPF corretamente.';
    } else {
      paginaLogin.style.display = 'none';
      // Aqui adiciona o código para redirecionar o usuário para o HTML do acervo da biblioteca
    }

    setTimeout(() => {
      alertaInputsVazioLogin.innerHTML = '';
    }, 2500);

  } else {
    const alertaInputsVazioLogin = document.getElementById('alerta-campos-incompletos-login');
    alertaInputsVazioLogin.innerHTML = 'Preencha todos os campos corretamente!';

    setTimeout(() => {
      alertaInputsVazioLogin.innerHTML = '';
    }, 2500);
  }
});

// Aqui vai ser responsável por adicionar os '.' e os '-' no CPF do cadastro, automaticamente
presetFormatCPFcadastro.addEventListener('keypress', () => {
  let preset = presetFormatCPFcadastro.value.length;

  if (preset === 3 || preset === 7) presetFormatCPFcadastro.value += '.';
  if (preset === 11) presetFormatCPFcadastro.value += '-';
});

// Aqui finaliza o cadastro dos usuários, manda os valores pro banco de dados
finalizarCadastroUsuario.addEventListener('click', () => {
  if (barrarInputsVazioCadastro()) {
    const alertaInputsVazioCadastro = document.getElementById('alerta-campos-incompletos-cadastro');
    const inputCPFCadastro = document.getElementById('CPF-cadastro').value;

    if (!/^\d/.test(inputCPFCadastro)) {
      alertaInputsVazioCadastro.innerHTML = 'O CPF deve começar com um número.';
    } else if (isNaN(inputCPFCadastro.replace(/[\.\-]/g, ''))) {
      alertaInputsVazioCadastro.innerHTML = 'Preencha o CPF apenas com números.';
    } else if (inputCPFCadastro.length < 14) {
      alertaInputsVazioCadastro.innerHTML = 'Preencha o CPF corretamente.';
    } else if (inputCPFCadastro === '.' || inputCPFCadastro === '-') {
      alertaInputsVazioCadastro.innerHTML = 'Preencha o CPF corretamente.';
    } else {
      paginaCadastro.style.display = 'none';
      // Aqui adiciona o código para redirecionar o usuário para o HTML do acervo da biblioteca
    }

    setTimeout(() => {
      alertaInputsVazioCadastro.innerHTML = '';
    }, 2500);

  } else {
    const alertaInputsVazioCadastro = document.getElementById('alerta-campos-incompletos-cadastro');
    alertaInputsVazioCadastro.innerHTML = 'Preencha todos os campos corretamente!';

    setTimeout(() => {
      alertaInputsVazioCadastro.innerHTML = '';
    }, 2500);
  }
});