# Projeto de Validação de Número

Este é um projeto simples que permite aos usuários inserir um número em um campo de entrada e verificar se o número é válido. Caso contrário, ele exibirá uma mensagem de erro.

## Funcionamento

O projeto consiste em uma página da web com um campo de entrada, um botão "Verificar" e uma área para exibir mensagens. Quando o usuário insere um valor no campo de entrada e clica no botão "Verificar", o JavaScript é acionado para validar o número.

O JavaScript funciona da seguinte maneira:

1. Obtém o elemento de entrada do usuário usando `document.getElementById('numeroInput')`.
2. Converte o valor do campo de entrada em um número de ponto flutuante usando `parseFloat(input.value)`.
3. Obtém o elemento onde as mensagens serão exibidas usando `document.getElementById('mensagem')`.

Em seguida, o código usa uma estrutura `try...catch...finally` para lidar com a validação do número:

- Na seção `try`, ele verifica se o número é um número válido (não é `NaN`). Se não for válido, ele lança um erro com uma mensagem específica.
- Na seção `catch`, ele captura qualquer erro que possa ter ocorrido e exibe uma mensagem de erro.
- Na seção `finally`, ele limpa o campo de entrada, independentemente de ter ocorrido uma exceção ou não.

## Como Usar

1. Abra o arquivo HTML no seu navegador.
2. Insira um número no campo de entrada.
3. Clique no botão "Verificar".
4. A mensagem de validação ou erro será exibida abaixo do botão.

## Tecnologias Utilizadas

- HTML: A estrutura da página da web.
- CSS: O estilo da página, incluindo a formatação e cores.
- JavaScript: A lógica por trás da validação de números e exibição de mensagens.

Sinta-se à vontade para usar este projeto como base para aprender sobre tratamento de exceções em JavaScript e criar suas próprias aplicações de validação de entrada de dados.
