/*
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

Descritivo:
Verifica login e exibe o resultado no console.
*/

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite o usuário: ", function(usuario) {
    rl.question("Digite a senha: ", function(senha) {

        if (usuario === "admin" && senha === "1234") {
            console.log("Acesso Permitido");
        } else {
            console.log("Acesso Negado");
        }

        rl.close();
    });
});