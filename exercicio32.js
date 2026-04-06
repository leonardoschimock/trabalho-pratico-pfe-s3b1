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
Descritivo: Dado um array de nomes, transforme-o em uma string separada por vírgulas.
***************************/

function nomes(){

    let nomesArray = ["Marina", "Cadu", "José", "Sarah"];

    let nomesSeparados = nomesArray.join(", ");

    console.log(nomesSeparados);
}

nomes();

/************************************************ COMENTÁRIO *****************************************************
A função nomes cria um array chamado nomesArray com alguns nomes.
Em seguida, utiliza o método join(", ") para transformar esse array em uma única string,
separando cada nome por vírgula e espaço, armazenando o resultado em nomesSeparados.
Depois, o console.log exibe essa string no console. Por fim, a função é chamada com nomes(),
fazendo com que os nomes sejam mostrados no formato: "Marina, Cadu, José, Sarah".
*****************************************************************************************************************/