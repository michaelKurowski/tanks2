
const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
      default: 'arcade',
      arcade: {
          gravity: { y: 0 }
      }
  },
  scene: {
      preload: preload,
      create: create
  }
}

let game = new Phaser.Game(config)

function preload () {
    this.load.setBaseURL('http://localhost:3200')
    this.load.image('tank', 'assets/tank.png')
}



let tank 


function create () {
    tank = this.physics.add.image(30, 30, 'tank')
    tank.setVelocity(0, 0)
    tank.setCollideWorldBounds(true)
}


addEventListener('keydown', ({ key }) => {
  switch(key) {
    case 'a':
      tank.setVelocity(-90, 0)
      break
    case 'w':
      tank.setVelocity(0, -90)
      break
    case 's':
      tank.setVelocity(0, 90)
      break
    case 'd':
      
      tank.setVelocity(90, 0)
      break
  }
})
addEventListener('keyup', ({ key }) => {
  switch(key) {
    case 'a':
    case 'w':
    case 's':
    case 'd':
      tank.setVelocity(0, 0)
      break
  }
})
