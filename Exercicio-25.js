/**********
Curso: Engenharia de Software
Disciplina: Programação Front-End
Professor: José Carlos Flores
Turma: ESOFT3B
Componentes:
25212854-2 - Arthur de Andrade Malvaso
25034198-2 - Carlos Eduardo dos Santos da Silva
25216341-2 - Isadora Tereza Taques Fernandes
25357718-2 - Jean Carlos Siqueira dos Santos
25363487-2 - Leonardo Schimock Silveira
25363611-2 - Thiago de Barros Inácio
Data: 01 de Abril de 2026
Descritivo: Faça uma função que receba um array e retorne a soma de seus elementos.
*********/
function somarArray(arr) {
  let soma = 0;
  for (let i = 0; i < arr.length; i++) {
    soma += arr[i];
  }
  return soma;
}

const arrayNumeros = [1, 2, 3, 4, 5];
const resultadoSoma = somarArray(arrayNumeros);
console.log(`A soma dos elementos do array é: ${resultadoSoma}`);

/*Cada arquivo deverá ter uma breve explicação do código em formato de comentário de
como o código resolve o problema proposto no exercício:
- O código define uma função `somarArray` que recebe um array `arr` como parâmetro.
- A função inicializa uma variável `soma` com o valor 0.
- Utiliza um loop `for` para iterar sobre cada elemento do array, adicionando o valor de cada elemento à variável `soma`.
- Após o loop, a função retorna o valor total da soma dos elementos do array.
- O código também inclui um exemplo de uso da função, onde um array de números é criado e a função `somarArray` é chamada para calcular a soma dos elementos, que é então exibida no console.
*/