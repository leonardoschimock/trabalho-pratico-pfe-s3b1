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
Descritivo: Verifique se um array contém o elemento "Maçã" usando `.includes()`.
***************************/

function procurarMaca(){

    let array = ["Banana", "Maçã", "Uva"];

    if(array.includes("Maçã")){
        console.log("Essa array contém Maçã");
    } else {
        console.log("Essa array não contém Maçã");
    }
}

procurarMaca();

/************************************************ COMENTÁRIO *****************************************************
A função procurarMaca cria um array com algumas frutas.
Em seguida, utiliza um if com o método includes("Maçã") para verificar se o valor está presente no array.
Se estiver, exibe no console "Essa array contém Maçã"; caso contrário, exibe "Essa array não contém Maçã".
Para finalizar, a função é chamada com procurarMaca(),
fazendo com que a verificação seja executada e a mensagem correspondente seja exibida.
*****************************************************************************************************************/