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
Descritivo: Use `.filter()` para criar um novo array apenas com números pares.
*********/
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosPares = numeros.filter(num => num % 2 === 0);
console.log(`Números pares: ${numerosPares}`);

/*Cada arquivo deverá ter uma breve explicação do código em formato de comentário de
como o código resolve o problema proposto no exercício.
- O código define um array `numeros` contendo os números de 1 a 10.
- Utiliza o método `.filter()` para criar um novo array `numerosPares`, onde a função de callback verifica se cada número é par (ou seja, se o resto da divisão por 2 é igual a 0).
- O resultado é um array contendo apenas os números pares, que é então exibido no console.
*/
