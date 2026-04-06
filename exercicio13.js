/**************************
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
Descritivo: Calcule a soma de todos os números de 1 a 100 usando um loop.
***************************/

function somarAte100(){

    let valorSomado = 0;

    for(let i = 1; i <= 100; i++){
        valorSomado += i;
    }

    console.log("Soma: ", valorSomado);
}

somarAte100();

/************************************************ COMENTÁRIO *****************************************************
A função somarAte100 cria uma variável valorSomado iniciada em 0 para armazenar a soma.
Em seguida, utiliza um laço for que começa em i = 1 e vai até i <= 100,
incrementando de 1 em 1. A cada repetição, o valor de i é somado a valorSomado usando +=.
Ao final do loop, a função exibe no console "Soma:" junto com o valor total acumulado,
que corresponde à soma de todos os números de 1 até 100 (5050).
*****************************************************************************************************************/