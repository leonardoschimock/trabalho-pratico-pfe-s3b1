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
Descritivo: Crie uma função que receba uma string e retorne-a invertida.
***************************/

function inverterTexto(texto){

    let textoInvertido = texto.split("").reverse().join("");

    return textoInvertido;
}

console.log(inverterTexto("EFP ed alua an SJ odnednerpa somatsE"));

/************************************************ COMENTÁRIO *****************************************************
A função inverterTexto recebe um texto e o transforma em um array de caracteres com split("").
Em seguida, inverte a ordem desses caracteres com reverse() e junta tudo novamente em uma string com join(""),
armazenando o resultado em textoInvertido, que é retornado pela função.
Depois, o console.log chama a função passando a frase informada e exibe no console o texto invertido corretamente.
*****************************************************************************************************************/