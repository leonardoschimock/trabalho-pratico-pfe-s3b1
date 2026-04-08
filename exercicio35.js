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
Utiliza o método .find() para localizar o primeiro número maior que 10 em um array.
*/

let numeros = [5, 8, 119, 12, 3, 20, 15, 10];

let resultado = numeros.find(num => num > 10);

console.log("Primeiro número maior que 10:", resultado);