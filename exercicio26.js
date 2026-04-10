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
Descritivo: Crie uma função com parâmetro padrão: `digaOla(nome = 'Visitante')`.
*********/

function digaOla(nome = 'Visitante') {
    console.log("Olá,", nome);
}

digaOla();
digaOla("Leonardo");

/********************************************************************************************************** */
//Este programa define uma função chamada digaOla que possui um parâmetro com valor padrão, permitindo 
// que, caso nenhum nome seja informado, a função utilize “Visitante” como valor, exibindo uma saudação 
// personalizada no console conforme o argumento fornecido.
/********************************************************************************************************** */
