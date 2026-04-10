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
Descritivo: Use `.reduce()` para transformar um array de objetos em um objeto somatório (ex: somar salários).
*********/

const funcionarios = [
    { nome: "João", salario: 2000 },
    { nome: "Maria", salario: 3000 },
    { nome: "Pedro", salario: 2500 }
];

const somaSalarios = funcionarios.reduce((total, funcionario) => {
    return total + funcionario.salario;
}, 0);

console.log("Soma dos salários:", somaSalarios);

/********************************************************************************************************** */
//Este programa define um array de objetos representando funcionários com seus respectivos salários e 
// utiliza o método .reduce() para percorrer todos os elementos, acumulando o valor dos salários em uma 
// variável total, exibindo ao final a soma de todos os valores no console.
/********************************************************************************************************** */
