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
Descritivo: Dado um array de números, use um loop para encontrar o maior valor. 
*********/

// Função para encontrar o maior número em um array
function encontrarMaiorNumero(array) {
    if (array.length === 0) {
        return null; // Retorna null se o array estiver vazio
    }
    let maior = array[0]; // Inicializa o maior número com o primeiro elemento do array
    for (let i = 1; i < array.length; i++) {
        if (array[i] > maior) {
            maior = array[i]; // Atualiza o maior número se encontrar um número maior
        }
    }
    return maior; // Retorna o maior número encontrado
}

// Exemplo de uso
const numeros = [3, 7, 2, 9, 5];
const resultado = encontrarMaiorNumero(numeros);
console.log(`O maior número no array é: ${resultado}`);


/*
A função encontrarMaiorNumero recebe um array de números como parâmetro. 
Ela verifica se o array está vazio e retorna null nesse caso.
Em seguida, ela inicializa a variável `maior` com o primeiro elemento do array e utiliza um loop `for` para iterar pelos elementos restantes. 
Se encontrar um número maior, atualiza a variável `maior`. 
Por fim, retorna o maior número encontrado.
*/