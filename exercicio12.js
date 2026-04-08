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
Descritivo: Use um `for` para imprimir a tabuada do 5 (de 1 a 10).
*********/

// Função para imprimir a tabuada do 5
function imprimirTabuadaDoCinco() {
    const numero = 5;
    console.log(`Tabuada do ${numero}:`);
    for (let i = 1; i <= 10; i++) {
        const resultado = numero * i;
        console.log(`${numero} x ${i} = ${resultado}`);
    }
}

// Chamar a função para imprimir a tabuada do 5
imprimirTabuadaDoCinco();


/*
A função imprimirTabuadaDoCinco utiliza um loop `for` para iterar de 1 a 10. 
Em cada iteração, ela calcula o resultado da multiplicação do número 5 pelo índice `i` 
e imprime a expressão e o resultado no console. 
O exemplo de uso chama a função para exibir a tabuada do 5 no console.
*/