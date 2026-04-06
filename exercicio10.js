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
Descritivo: Verifique se um caractere informado é uma vogal ou consoante.
***************************/

function verificarVogalConsoante(letra) {
    letra = letra.toLowerCase();

    if ("aeiou".includes(letra)) {
        console.log("É Vogal");
    } else {
        console.log("É Consoante");
    }
}

verificarVogalConsoante("a");

/************************************************ COMENTÁRIO *****************************************************
A função verificarVogalConsoante recebe uma letra e a converte para minúscula com toLowerCase(),
garantindo que funcione com letras maiúsculas ou minúsculas.
Em seguida, usa um if para verificar se a letra está na string "aeiou" com o método includes();
Se estiver, exibe "É Vogal" no console, caso contrário, exibe "É Consoante".
Por fim, a função é chamada com "a", resultando em "É Vogal".
Um detalhe importante é que o código não valida a entrada,
então qualquer caractere que não seja vogal será tratado como consoante.
*****************************************************************************************************************/