import { createImage } from './utils/utils.js'



let playerA = {
  hp: 20,
  image: null
}

async function gameTick({layer, stage}) {
  /*
    To jest nasza petla, odpala sie co 10ms
  */
}


async function startGame({layer, stage}) {
  /*
    Ten kod odpala sie na poczatku gry
  */

  const tankImageUrl = 
  'https://previews.123rf.com/images/yummytime/yummytime1609/yummytime160900630/62111150-tank-icon-on-white-background-created-for-mobile-web-decor-print-products-applications-icon-isolated.jpg'

  // Tworzymy obrazek
  const myTankImage = await createImage({
    x: 200,
    y: 50,
    width: 100,
    height: 100
  }, tankImageUrl)
  playerA.image = myTankImage
  // Dodajemy nasz obrazek na plansze
  layer.add(myTankImage)
}

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
  console.log(playerA.image)
})

export { startGame, gameTick }