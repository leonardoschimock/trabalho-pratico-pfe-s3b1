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
Descritivo: Encadeie `.filter()` e `.map()`: filtre pares e depois eleve ao quadrado.
***************************/

function separar(){

    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

    let arrayQuadrado = array
        .filter(num => num % 2 === 0)
        .map(num => num ** 2);

    console.log("Os numeros pares elevado ao quadrado da sua array são:", arrayQuadrado);
}

separar();

/************************************************ COMENTÁRIO *****************************************************
A função separar cria um array com números de 0 a 9.
Em seguida, usa filter para selecionar apenas os números pares (num % 2 === 0),
e depois map para elevar cada um desses números ao quadrado (num ** 2), armazenando o resultado em arrayQuadrado.
Para finalizar, o console.log exibe a mensagem junto com o novo array,
e a função é chamada com separar(), resultando nos valores [4, 16, 36, 64, 0].
*****************************************************************************************************************/