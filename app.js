document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
      {
        name: 'bulbasaur',
        img: 'images/bulbasaur-pokemon.png'
      },
      {
        name: 'pikachu',
        img: 'images/pikachu-pokemon.png'
      },
      {
        name: 'jigglypuff',
        img: 'images/jigglypuff-pokemon.png'
      },
      {
        name: 'charizard',
        img: 'images/charizard-pokemon.png'
      },
      {
        name: 'eevee',
        img: 'images/eevee-pokemon.png'
      },
      {
        name: 'squirtle',
        img: 'images/squirtle-pokemon.png'
      },
      {
        name: 'bulbasaur',
        img: 'images/bulbasaur-pokemon.png'
      },
      {
        name: 'pikachu',
        img: 'images/pikachu-pokemon.png'
      },
      {
        name: 'jigglypuff',
        img: 'images/jigglypuff-pokemon.png'
      },
      {
        name: 'charizard',
        img: 'images/charizard-pokemon.png'
      },
      {
        name: 'eevee',
        img: 'images/eevee-pokemon.png'
      },
      {
        name: 'squirtle',
        img: 'images/squirtle-pokemon.png'
      },
    ]
    
    cardArray.sort(() => 0.5 - Math.random())
    const griddisplay = document.querySelector('#grid')

    function createboard () {
        for(let i=0;i< 10 ; i++){
        const  card = document.createElement('img')
        card.setAttribute('src','images/icon-pokeball.png') 
        card.setAttribute('data-id',i)
        griddisplay.appendChild(card)
        console.log(card,i);
        }
    }



    console.log(cardArray);
})
