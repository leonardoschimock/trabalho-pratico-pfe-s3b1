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
Descritivo: Imprima apenas os números pares de 0 a 20 usando `continue`.
*********/

for (let i = 0; i <= 20; i++) {

    if (i % 2 !== 0) {
        continue;
    }

    console.log(i);
}

/********************************************************************************************************** */
//Este programa realiza uma contagem de 0 a 20 utilizando um laço for e utiliza a instrução continue para 
// pular os números ímpares, exibindo no console apenas os valores pares antes de encerrar a execução.
/********************************************************************************************************** */
