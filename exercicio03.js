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
Descritivo: Escreva uma função que receba dois números e retorne o maior deles. 
*********/

function maiorNumero(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else if (num2 > num1) {
        return num2;
    } else {
        return "Os números são iguais.";
    } 
}

// Exemplo de uso:
const numero1 = 10;
const numero2 = 20;
const resultado = maiorNumero(numero1, numero2);
console.log(`O maior número entre ${numero1} e ${numero2} é: ${resultado}`);


/* 
A função maiorNumero recebe dois parâmetros, num1 e num2.
Ela compara os dois números usando estruturas condicionais (if, else if, else) 
para determinar qual é o maior. Se num1 for maior que num2, a função retorna num1. 
Se num2 for maior que num1, a função retorna num2. 
Se ambos os números forem iguais, a função retorna uma mensagem 
indicando que os números são iguais. O exemplo de uso 
demonstra como chamar a função e exibir o resultado no console.
*/