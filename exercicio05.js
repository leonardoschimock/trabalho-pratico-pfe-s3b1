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
Descritivo: Verifique se um ano é bissexto (divisível por 4, mas não por 100, exceto se for divisível por 400).
*********/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite um ano: ", function(ano) {

    ano = Number(ano);

    if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
        console.log("O ano é bissexto.");
    } else {
        console.log("O ano NÃO é bissexto.");
    }

    rl.close();
});

/********************************************************************************************************** */
//Este programa solicita ao usuário que informe um ano, converte o valor digitado para número e verifica se 
// ele é bissexto com base nas regras de divisibilidade por 4, 100 e 400, exibindo uma mensagem 
// correspondente no console antes de encerrar a execução.
/********************************************************************************************************** */
