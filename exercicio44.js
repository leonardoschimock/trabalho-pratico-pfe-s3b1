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

function executarDuasVezes(funcao) {
    return function() {
        funcao();
        funcao();
    };
}

// Exemplo de uso:
function dizerOla() {
    console.log("Olá!");
}
const dizerOlaDuasVezes = executarDuasVezes(dizerOla);
dizerOlaDuasVezes(); // Isso irá imprimir "Olá!" duas vezes no console.


/*
A função `executarDuasVezes` é uma Higher-Order Function que recebe uma 
função como argumento e retorna uma nova função. A função retornada, 
quando chamada, executa a função original duas vezes. No exemplo de uso, 
a função `dizerOla` é passada para `executarDuasVezes`, resultando em 
uma nova função `dizerOlaDuasVezes` que, quando chamada, 
imprime "Olá!" duas vezes no console.
*/

