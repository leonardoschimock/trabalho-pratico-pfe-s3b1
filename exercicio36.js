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
Descritivo:  Use `.reduce()` para somar todos os elementos de um array.
*********/

// Função para somar todos os elementos de um array usando .reduce()
function somarArray(array) {
    return array.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
}
// Exemplo de uso:
const numeros = [1, 2, 3, 4, 5];
const soma = somarArray(numeros);
console.log(`A soma dos elementos do array é: ${soma}`);


/*
A função `somarArray` utiliza o método `.reduce()` para iterar sobre os elementos 
do array e acumular a soma. 
O primeiro parâmetro da função de callback é 
o `acumulador`, que mantém a soma acumulada, e o segundo 
parâmetro é o `valorAtual`, que representa o elemento atual do array.
O segundo argumento passado para `.reduce()` é o valor inicial 
do acumulador, que é 0 neste caso.
No exemplo de uso, a função é chamada com um 
array de números de 1 a 5, e o resultado da soma é impresso no console.
*/