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
Descritivo: Crie uma função que converta graus Celsius para Fahrenheit.
*********/

// Função para converter graus Celsius para Fahrenheit
function celsiusParaFahrenheit(celsius) {
    const fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}
// Exemplo de uso:
const temperaturaCelsius = 25;
const temperaturaFahrenheit = celsiusParaFahrenheit(temperaturaCelsius);
console.log(`${temperaturaCelsius}°C é igual a ${temperaturaFahrenheit}°F`);


/*
A função `celsiusParaFahrenheit` recebe um valor em graus Celsius como parâmetro, 
realiza a conversão para Fahrenheit usando a fórmula (C * 9/5) + 32,
e retorna o resultado. No exemplo de uso, a função é chamada com o valor 25°C,
e o resultado é impresso no console, mostrando a equivalência em Fahrenheit.
*/