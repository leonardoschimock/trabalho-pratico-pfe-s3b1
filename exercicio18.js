/*
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

Descritivo:
Gera os 10 primeiros números da sequência de Fibonacci no console.
*/

let a = 0;
let b = 1;

for (let i = 1; i <= 10; i++) {
    console.log(a);
    
    let proximo = a + b;
    a = b;
    b = proximo;
}