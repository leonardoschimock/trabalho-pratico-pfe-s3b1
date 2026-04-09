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
Descritivo: Crie uma Higher-Order Function que receba uma função e retorne outra função que execute a primeira
duas vezes.
*********/
function executarDuasVezes(func) {
    return function(...args) {
        func(...args);
        func(...args);
    };
}
// Exemplo de uso:
const dizerOla = (nome) => console.log(`Olá, ${nome}!`);
const dizerOlaDuasVezes = executarDuasVezes(dizerOla);
dizerOlaDuasVezes("Flores"); // Saída: "Olá, Flores!" (duas vezes)    


/*Cada arquivo deverá ter uma breve explicação do código em formato de comentário de
como o código resolve o problema proposto no exercício.
- O código define uma função `executarDuasVezes` que é uma Higher-Order Function, ou seja, ela recebe outra função como argumento e retorna uma nova função.
- A função retornada é uma função anônima que aceita um número variável de argumentos (usando o operador rest `...args`).
- Dentro da função anônima, a função original (`func`) é chamada duas vezes com os mesmos argumentos.
- O código também inclui um exemplo de uso, onde a função `dizerOla` é definida para imprimir uma mensagem de saudação. A função `executarDuasVezes` é usada para criar uma nova função `dizerOlaDuasVezes`, que quando chamada, executa a saudação duas vezes.
*/