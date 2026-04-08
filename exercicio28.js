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
Descritivo: Crie uma função que retorne um objeto com `nome` e `idade` da pessoa.
*********/

// Função para criar um objeto com nome e idade
function criarPessoa(nome, idade) {
    return {
        nome: nome,
        idade: idade
    };
}
// Exemplo de uso:
const pessoa = criarPessoa("João", 30);
console.log(pessoa); // Isso irá imprimir: { nome: 'João', idade: 30 }


/*
A função `criarPessoa` recebe dois parâmetros, `nome` e `idade`, e retorna um objeto 
que contém essas informações. O exemplo de uso demonstra como chamar a função para criar
um objeto representando uma pessoa, e o resultado é impresso no console, mostrando o
nome e a idade da pessoa.
*/