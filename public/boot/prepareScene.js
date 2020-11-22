/*
  Ten kod spina nasza gre z biblioteka do latwego rysowania obrazkow, nie musisz tego obczajac.
*/

function prepareScene() {
  const stage = new Konva.Stage({
    container: 'game-view',
    width: 800,
    height: 800,
  })
  
  const layer = new Konva.Layer()
  
  stage.add(layer)

  return { layer, stage }
}

export default prepareScene
