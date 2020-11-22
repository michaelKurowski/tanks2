/*
  Ten kod sprawa ze nasza gra dziala, nie musisz tego obczajac
*/

import prepareScene from './prepareScene.js'
import { gameTick, startGame } from '../game.js'
const { layer, stage } = prepareScene()

start()

function start() {
  startDrawingObjects()
  startGameLoop({ layer, stage })
  startGame({ layer, stage })
}

function startGameLoop() {
  setInterval(() => {
    gameTick({stage, layer})
  }, 10)
}

function startDrawingObjects() {

  setInterval(() => {
    requestAnimationFrame(drawObjects)
  }, (1000/60))
}

function drawObjects() {
  layer.batchDraw()
}