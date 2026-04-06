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
Descritivo: Use um `while` para contar regressivamente de 10 até 0.
***************************/

function decrescente(){

    let i = 10;

    while(i >= 0){
        console.log("Número: ", i);
        i--;
    }
}

decrescente();

/************************************************ COMENTÁRIO *****************************************************
A função decrescente cria a variável i iniciada em 10.
Em seguida, utiliza um laço while que continua executando enquanto i >= 0.
A cada repetição, o valor de i é exibido no console com a mensagem "Número:",
e depois é decrementado em 1 com i--.
Ao final, a função é chamada com decrescente(),
fazendo com que os números de 10 até 0 sejam exibidos no console em ordem decrescente.
*****************************************************************************************************************/