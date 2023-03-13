const display = document.querySelector("#display");// O querySelector retorna o primeiro elemento dentro do documento.

const buttons = document.querySelectorAll("button")//retorna uma lista de elementos presentes no documento.

buttons.forEach((btn) => {
    btn.addEventListener("click",() => {
        if(btn.id === "=") {
            display.value = eval (display.value);
        } else if (btn.id === "ac" ){
            display.value ="";
        } else if(btn.id === "de") {
            display.value = display.value.slide(0, -1)
        } else {
            display.value += btn.id;
        }
    })
})

//A declaração const cria uma variável cujo o valor é fixo, ou seja, uma constante somente leitura. Isso não significa que o valor é imutável, apenas que a variável constante não pode ser alterada ou retribuída.

//O querySelector retorna o primeiro elemento dentro do documento

//=== (Valor e Tipo igual) - é usado para a comparação entre duas variáveis, mas isso irá verificar o tipo estrito, o que significa que ele irá verificar o tipo de dados e comparar dois valores.
//O método slice() percorre a string ou o array para selecionar a faixa de valores determinada por parâmetro. A primeira posição de uma string ou array é a posição de número 0.
//O operador de atribuição encurtado += pode ser utilizado para concatenar strings.