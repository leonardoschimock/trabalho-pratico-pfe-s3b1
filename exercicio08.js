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
Descritivo: Verifique se três lados informados podem formar um triângulo e, se sim, classifique-o (Equilátero,
Isósceles, Escaleno).
*********/

function classificarTriangulo(lado1, lado2, lado3) {
    if (lado1 <= 0 || lado2 <= 0 || lado3 <= 0) {
        return "Os lados devem ser maiores que zero.";
    }

    if (lado1 >= lado2 + lado3 || lado2 >= lado1 + lado3 || lado3 >= lado1 + lado2) {
        return "Os lados não formam um triângulo.";
    }

    if (lado1 === lado2 && lado2 === lado3) {
        return "Triângulo Equilátero.";
    } else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
        return "Triângulo Isósceles.";
    } else {
        return "Triângulo Escaleno.";
    }
}

// Exemplo de uso:
const ladoA = 5;
const ladoB = 5;
const ladoC = 5;
console.log(classificarTriangulo(ladoA, ladoB, ladoC)); // Triângulo Equilátero.

/*
O código define uma função `classificarTriangulo` que recebe três lados 
como parâmetros. A função primeiro verifica se os lados são maiores que 
zero, depois verifica se eles podem formar um triângulo usando a desigualdade 
triangular. Se os lados formarem um triângulo, a função classifica o tipo 
de triângulo (Equilátero, Isósceles ou Escaleno) com base na igualdade dos 
lados. O resultado é retornado como uma string. O exemplo de uso mostra como 
chamar a função e imprimir o resultado para um triângulo equilátero. 
*/