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
Descritivo: Crie uma função `areaRetangulo(base, altura)` que retorne a área.
***************************/

function areaRetangulo(base, altura){

    let areaTotal = base * altura;

    return areaTotal;
}

console.log("A área total do retângulo é:", areaRetangulo(100, 30), "metros quadrados" );

/************************************************ COMENTÁRIO *****************************************************
A função areaRetangulo recebe dois parâmetros, base e altura,
e calcula a área multiplicando esses valores (base * altura),
armazenando o resultado em areaTotal. Em seguida, a função retorna esse valor com return.
Depois, o console.log chama a função passando 100 e 30 como argumentos,
recebe o resultado (3000) e exibe a mensagem "A área total do retângulo é: 3000 metros quadrados" no console.
*****************************************************************************************************************/