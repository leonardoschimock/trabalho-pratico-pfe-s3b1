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
Descritivo:  Crie uma função `operacao(a, b, callback)` que execute o callback com a e b
*********/

function operacao(a, b, callback) {
  return callback(a, b);
}
// Exemplo de uso:
const soma = (x, y) => x + y;
const multiplicacao = (x, y) => x * y;

console.log(operacao(5, 3, soma)); // 8
console.log(operacao(5, 3, multiplicacao)); // 15

/*Cada arquivo deverá ter uma breve explicação do código em formato de comentário de
como o código resolve o problema proposto no exercício.
- O código define uma função `operacao` que recebe três parâmetros: `a`, `b` e `callback`.
- A função executa o `callback` com os valores de `a` e `b` e retorna o resultado.
- O código também inclui exemplos de uso da função, onde duas funções diferentes (`soma` e `multiplicacao`) são passadas
- como callback, demonstrando como a função genérica pode ser utilizada com diferentes operações.
*/
