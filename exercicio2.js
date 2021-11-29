// Faça o exercício da GALERIA DE IMAGENS aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML
/* 
### Exercício 2: galeria de imagens

Agora você vai criar uma galeria de imagens. Os botões `#anterior`
e `#proximo` devem permitir que o usuário alterne a imagem que está
sendo exibida e o código para isso deve ser feito no arquivo `exercicio2.js`.

A ideia geral é usar eventos de `click` nos botões e alterar o
caminho (atributo `src`) da imagem `#slide` (ver [FAQ](#faq) como trocar
um atributo de um elemento HTML). Algo que pode ajudar é manter uma variável
que indique o **índice da imagem atual**. => um "array" com a posição da imagem
dentre todas da galeria?

Ao abrir `exercicio2.js` alunos atenciosos vão reparar que as imagens 
foram dadas como um **vetor de objetos** da seguinte forma:

```js
const imagens = [
  {
    nome: 'nome-da-imagem.webp',
    descricao: 'O texto alternativo que a descreve'
  },
  ...
];
```

Além do atributo `src`, defina também o `alt` com o texto descritivo.
Para acessar uma propriedade de um objeto, lembre-se no [FAQ](#faq).
E também repare que as imagens estão hospedadas em um servidor web.
Portanto, seus caminhos devem ser concatenas (servidor e nome) para
que sejam encontradas.

Por fim, faça com que a galeria seja "circular": ao ultrapassar a 
última ou a primeira imagem, ela deve voltar para a primeira ou a última,
respectivamente. Veja o [FAQ](#faq) se precisar de ideias sobre isso.*/


const servidorDasImagens = 'https://fegemo.github.io/cefet-web/images/osiris'; //"files not found"?
const imagens = [


    {
      arquivo: '01-modelo-artistico-da-sonda.webp',
      descricao: 'Imagem em 3D mostrando a sonda tocando um asteróide. ' +
        'A sonda tem forma de caixa com dois painéis solares em suas ' +
        'laterais e, na parte de baixo, um pequeno braço sai e encosta ' +
        'no asteróide'
    },
    {
      arquivo: '02-lancamento-atlas-v-em-2017.webp',
      descricao: 'Foto de foguete na vertical no momento de seu ' +
        'lançamento. Ele possui bandeiras da NASA, dos EUA e da empresa ' +
        'ULA e está com o motor sendo ligado, saindo fogo e fumaça'
    },
    {
      arquivo: '03-distanciamento-da-sonda-da-terra.webp',
      descricao: 'Foto do espaço quase toda preta mostrando a Terra bem ' +
        'pequena no canto esquerdo e, no canto direito, a lua ainda menor'
    },
    {
      arquivo: '04-aproximacao-da-sonda-ao-bennu-em-2018.webp',
      descricao: 'Foto do espaço mostrando o asteróide Bennu que tem ' +
        'a forma de um paralelepípedo com base losangular aproximadamente ' +
        'e a superfície acinzentada'
    },
    {
      arquivo: '05-mapeamento-do-asteroide.webp',
      descricao: 'Animação de uma forma tridimensional um pouco ovalada ' +
        'representada usando diversas cores e girando em torno do eixo vertical ' +
        'representando a superfície do asteróide'
    },
    {
      arquivo: '06-local-de-pouso.webp',
      descricao: 'Foto do local de pouso da sonda Osiris-Rex no ' +
        'asteróide Bennu mostrando uma pequena clareira em um ' +
        'terreno bem acidentado, com muitas pedras. No centro há ' +
        'um desenho no formato da sonda'
    },
    {
      arquivo: '07-touch-and-go-e-detritos-suspensos-em-2020.webp',
      descricao: 'Foto do asteróide Bennu com vários regolitos (pedras) ' +
        'sendo suspensos após a sonda ter encostado para coletar amostras ' +
        'da sua superfície'
    },
    {
      arquivo: '08-sonda-distanciando-e-voltando-para-terra.webp',
      descricao: 'Foto do asteróide Bennu com ele retratado em ' +
        'menos da metade e com baixa iluminação, mostrando sua superfície ' +
        'acinzentada'
    }
  ];

  //botoes 'anterior' e 'proximo' => [query-selector-all]: https://fegemo.github.io/cefet-web/classes/js2/#selecionando-varios-elementos


  let anterior = document.querySelector('#anterior'); //#anterior e não anterior

  let proximo = document.querySelector('#proximo'); 

 // slide

  let slide = document.querySelector('#slide');

  //setar o indice das imagems para a galeria

  let index = 0; let i = 0;

  let imgDescription = (slide.src.substring(servidorDasImagens.length)); //será isso mesmo? 


  for(i; i< imagens.length; i++) {
    if (imagens[i].arquivo == imgDescription) //fazer algo que sirva pra designar a descrição da dita imagem
    {
      index = i;
    }

  }

  //query para ambos anterior e proximo, e forma de percorrer as imagens feitos. 
  //Fazer algum handler de evento para os ditos 2 botões

/* A ideia geral é usar eventos de `click` nos botões e alterar o
caminho (atributo `src`) da imagem `#slide`*/

  anterior.addEventListener('click', function()
  {
    if (index > 0)
    {
      index = index--;
    }
    else 
    {
      index = (imagens.length-1); //regredir no indice
      //só funciona uma única vez
    }

    slide.src = servidorDasImagens + '/' + imagens[index].arquivo;
    slide.alt = servidorDasImagens + '/' + imagens[index].descricao; //"The alt property sets or returns the value of the alt attribute of an image."

  });

  proximo.addEventListener('click', function()
  {
    if (index < (imagens.length-1)) //avançar no indice
    {
      index = index++;
    }
    else index = 0;
    
    //concatenar as strings
    slide.src = servidorDasImagens + '/' + imagens[index].arquivo;
    slide.alt = servidorDasImagens + '/' + imagens[index].descricao; //"The alt property sets or returns the value of the alt attribute of an image."

  });

  //pendente de ser inserido no index.html
  //<script src ="exercicio2.js"></script>