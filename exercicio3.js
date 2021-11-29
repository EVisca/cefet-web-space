// Faça o exercício dos PARÁGRAFOS aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML

/*### Exercício 3: expandir/retrair parágrafos

No arquivo `exercicio3.js`, faça os botões "+" expadirem ou 
retrairem o texto dos parágrafos, alternadamente.

O arquivo `estilos.css` contém uma regra para uma classe chamada `.expandido`.
Ela contém as propriedades necessárias para que um parágrafo seja exibido
de forma completa, em vez de apenas a primeira linha:

```css
/* estilo inicial do parágrafo */
/*p {
    height: 1em;            /* parágrafo com altura de 1 linha apenas */
    //verflow: hidden;         /* oculta o que não couber no parágrafo */
   // text-overflow: ellipsis;  /* coloca reticências ao final od texto */
 // }
  
  /* estilo quando <p class="expandido"> */
 // p.expandido {
   // height: auto;             /* altura suficiente para mostrar tudo */
  //}*/
/*  ```
  
  Uma forma bem ruim de resolver seria criar uma função diferente para
  o `click` de cada parágrafo. Contudo, as 5 funções fariam exatamente
  a mesma coisa porém só apontando para um `<p>` diferente.
  
  Nesse caso, é melhor ter apenas 1 função e parametrizar qual parágrafo
  será expandido/retraído (OK). Para pegar todos os `.botao-expandir-retrair`
  é possível usar `document.querySelectorAll(...)`. Então, percorre-se
  esse vetor associando uma única função ao `click` deles. Mas como
  saber qual dos botões foi clicado?
  
  No caso, é possível, dentro da _callback_ de um evento, descobrir
  quem foi o **alvo do evento**. Para isso, é necessário usar o
  parâmetro `e` (ou `evt`, ou `evento`) da _callback_  de `click`
  para detectar que parágrafo contém o botão que foi clicado.
  
  Esse parâmetro possui informações sobre o evento, como **o elemento HTML
  que foi clicado** (`e.currentTarget`), as coordenadas (x,y) do mouse
  no momento do clique (`e.screenX` e `e.screenY`), qual botão do
  mouse foi usado (`e.button`) e [algumas outras coisas][click-event]. Veja
  mais no [FAQ](#faq).
  
  O `e.currentTarget` dentro da função de `click` aponta para o elemento HTML
  que foi alvo do evento, ou seja, o botão. Mas precisamos alterar o parágrafo
  pai do botão, e não o botão mesmo. Para tanto, você deve "navegar" no DOM:
  a partir do botão, pegar o pai dele, que é o parágrafo. Veja como
  [pegar o pai de um elemento no DOM][subindo-no-dom].
  
  Para expandir um parágrafo, basta colocar a classe `.expandido` nele e,
  para retraí-lo, basta remover essa classe. Veja o [FAQ](#faq) se tiver
  dúvidas sobre como colocar/remover uma classe em/de um elemento do DOM.
  Pode ser mais fácil alternar a classe (em vez de removê-la ou adicioná-la),
  como descrito [nos slides][alternando-uma-classe].
  
  Além de expandir/retrair o parágrafo, **o conteúdo do botão** deve alternar
  entre `-` e `+`, indicando se o próximo clique vai retrair ou expandir.
  O [FAQ](#faq) contém uma pergunta sobre como alterar o conteúdo de um elemento.*/

//Deus tenha piedade da minha alma, mas capaz que seja mais simples do que pareça

/* Nesse caso, é melhor ter apenas 1 função e parametrizar qual parágrafo
  será expandido/retraído (OK). Para pegar todos os `.botao-expandir-retrair`
  é possível usar `document.querySelectorAll(...)`.*/

let expandList = document.querySelectorAll(".botao-expandir-retrair");

function expand(elemento) {

    elemento.addEventListener('click', function(e) { 
        let elemento = e.currentTarget;
        let pExpand = elemento.parentNode;
        //object.classList ?
        pExpand.classList.toggle('expandido');

        elemento.innerHTML = (pExpande.classList.value=='expandido') ? '-': '+';
    });
};

//chamar de novo expadList com a function feita com o EventListener

expandList.forEach(expand);

//mais alguma coisa ainda?

