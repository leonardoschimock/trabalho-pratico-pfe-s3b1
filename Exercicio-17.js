
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
Descritivo: Calcule o fatorial de um número informado (ex: 5! = 5*4*3*2*1)
*********/

const calcularFatorial = (n) => {
    if (n < 0) {
        return "Fatorial não é definido para números negativos.";
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    let fatorial = 1;
    for (let i = n; i > 1; i--) {
        fatorial *= i;
    }
    return fatorial;
};

const numero = parseInt(prompt("Digite um número para calcular o fatorial:"));
if (!isNaN(numero)) {
    const resultado = calcularFatorial(numero);
    console.log(`${numero}! = ${resultado}`);
} else {
    console.log("Erro: Digite um número válido");
}


/*Cada arquivo deverá ter uma breve explicação do código em formato de comentário de
como o código resolve o problema proposto no exercício: 
- O código define uma arrow function `calcularFatorial` que recebe um número `n` como parâmetro.
- A função verifica se o número é negativo e retorna uma mensagem de erro, pois o fatorial não é definido para números negativos.
- Se o número for 0 ou 1, a função retorna 1, pois o fatorial de ambos é 1.
- Para números maiores que 1, a função utiliza um loop `for` para multiplicar `fatorial` pelo valor de `i`, que decrementa de `n` até 2.
- O resultado do fatorial é retornado ao final da função.
- O código também inclui uma solicitação ao usuário para digitar um número e valida se a entrada é um número válido antes de calcular o fatorial.

*/