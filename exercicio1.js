// Faça o exercício da equação de GRAVITAÇÃO UNIVERSAL aqui - OK
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML - OK

/*
### Exercício 1: cálculo de fórmula

Neste exercício você deve calcular a fórmula da gravitação universal, como
dada na própria página. O código deve ser feito em `exercicio1.js` e
esse arquivo ainda não foi incluído na página.

Para isso, você deve associar um evento de `click` ao botão `#calcular` e,
nessa função, calcular o valor da força gravitacional e preencher o valor
de `#resultado`.

Lembre-se que você pode recuperar/definir o valor de
um atributo HTML de um elemento assim:

```js
// pegando valor
let valor = algumEl.nomeDoAtributo

// definindo
algumEl.nomeDoAtributo = 'novo valor

*/

let gButton = document.querySelector('#calcular');
//obrigado VSC pelos atalhos

gButton.addEventListener('click', function() {

    //Massas M1 e m2:
    let massa1 = document.querySelector('#massa1');
    let massa2 = document.querySelector('#massa2');

    //Distancia d:
    let distancia = document.querySelector('#distancia');
    
    //Constante de gravitação universal G:
    let constante = document.querySelector('#constante');

    //Resultado da formula para os valores dados:
    let resultado = document.querySelector('#resultado');

    //                      G * M1 * m2    /    d^2
    resultado.value = ((constante.value*massa1.value*massa2.value)/(distancia.value**2)).toPrecision(5);
    //"O método toPrecision() retorna uma string que representa o valor do objeto Number com uma precisão específica."
});

//pendente de incluir no arquivo => <script src="jogo.js"></script>
//resolvido - script ao fim do article resolveu o mmomento de inicialização
//git fora do ar? 17:42
//github caiu mesmo - https://twitter.com/githubstatus/status/1464699752298262536