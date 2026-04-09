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
Descritivo: Crie uma função `criarMultiplicador(multiplicador)` que retorne uma função que multiplica qualquer número
pelo multiplicador (Closure).
*********/
function criarMultiplicador(multiplicador) {
    return function(numero) {
        return numero * multiplicador;
    };
}
// Exemplo de uso:
const multiplicarPor2 = criarMultiplicador(2);
console.log(multiplicarPor2(5));    

/*Cada arquivo deverá ter uma breve explicação do código em formato de comentário de
como o código resolve o problema proposto no exercício.
- O código define uma função `criarMultiplicador` que recebe um parâmetro `multiplicador`.
- A função retorna uma nova função anônima que recebe um parâmetro `numero` e retorna o resultado da multiplicação de `numero` pelo `multiplicador`.
- O código também inclui um exemplo de uso da função, onde a função `criarMultiplicador` é chamada com o valor 2 para criar uma nova função `multiplicarPor2`. Essa nova função é então chamada com o valor 5, resultando na multiplicação de 5 por 2, que é exibida no console.
*/