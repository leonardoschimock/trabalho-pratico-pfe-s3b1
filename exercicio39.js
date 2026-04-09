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
Descritivo: Ordene um array de números em ordem crescente.
*********/
const numeros = [5, 2, 9, 1, 5, 6];
numeros.sort((a, b) => a - b);
console.log(`Números ordenados: ${numeros}`);

/*Cada arquivo deverá ter uma breve explicação do código em formato de comentário de
como o código resolve o problema proposto no exercício.
- O código define um array `numeros` contendo uma série de números desordenados.
- Utiliza o método `.sort()` para ordenar os números em ordem crescente, passando uma função de comparação que subtrai `b` de `a`. Isso garante que os números sejam ordenados corretamente.
- O resultado é um array de números ordenados, que é então exibido no console.
*/
