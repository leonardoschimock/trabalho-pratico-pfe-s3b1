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
Descritivo: Faça um script que receba a idade de uma pessoa e diga se ela pode votar (16 anos ou mais).
*********/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite sua idade: ", function(idade) {

    idade = Number(idade);

    if (idade >= 16) {
        console.log("Você pode votar.");
    } else {
        console.log("Você NÃO pode votar.");
    }

    rl.close();
});

/********************************************************************************************************** */
//Este programa solicita ao usuário que informe sua idade, converte o valor digitado para número e 
//verifica se ele é maior ou igual a 16 anos para determinar se a pessoa pode votar, exibindo a mensagem 
//correspondente no console e encerrando a execução.
/********************************************************************************************************** */
