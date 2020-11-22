import { createImage } from './utils/utils.js'


// Tu sobie robimy playera
let playerA = {
  hp: 20,
  image: null
}

  /*
    Ta funkcja odpala sie co 10ms. to jest nasza glowna petla gry, mozna tu np. napisac pociskom by sie przesuwaly.
  */
async function gameTick({layer, stage}) {

}

  /*
    Ta funkcja odpala sie na poczatku gry
  */
async function startGame({layer, stage}) {


  const tankImageUrl = 
  'https://previews.123rf.com/images/yummytime/yummytime1609/yummytime160900630/62111150-tank-icon-on-white-background-created-for-mobile-web-decor-print-products-applications-icon-isolated.jpg'

  // Tworzymy obrazek
  const myTankImage = await createImage({
    // pozycja obrazka
    x: 200,
    y: 50,
    // wielkosc obrazka
    width: 100,
    height: 100
  }, tankImageUrl)

  // przypisujemy obrazek do playera
  playerA.image = myTankImage

  // Dodajemy nasz obrazek na plansze
  layer.add(myTankImage)
}


// tu sobie robimy obsluge klawiszy
addEventListener('keydown', ({ key }) => {
  const x = playerA.image.x()
  const y = playerA.image.y()
  switch(key) {
    case 'a':
      playerA.image.x( x - 100 )
      break
    case 'w':
      playerA.image.y( y - 100 )
      break
    case 's':
      playerA.image.y( y + 100 )
      break
    case 'd':
      playerA.image.x( x + 100 )
      break
  }
})

export { startGame, gameTick }