// Esta função é chamada quando o botão "Verificar" é clicado
function validarNumero() {
  // Obtém o elemento de entrada do usuário com o ID 'numeroInput'
  const input = document.getElementById('numeroInput');
  
  // Converte o valor do campo de entrada em um número de ponto flutuante
  const numero = parseFloat(input.value);
  
  // Obtém o elemento onde as mensagens serão exibidas
  const mensagem = document.getElementById('mensagem');

  try {
    // Verifica se o valor é um número válido (não é NaN)
    if (isNaN(numero)) {
      // Se não for um número válido, lança um erro com uma mensagem
      throw new Error('Entrada inválida. Por favor, forneça um número válido.');
    } else {
      // Se for um número válido, exibe a mensagem de número válido
      mensagem.textContent = 'Número válido: ' + numero;
    }
  } catch (error) {
    // Se ocorrer um erro, exibe a mensagem de erro
    mensagem.textContent = 'Erro: ' + error.message;
  } finally {
    // Limpa o campo de entrada, independentemente de ter ocorrido uma exceção ou não
    input.value = '';
  }
}
