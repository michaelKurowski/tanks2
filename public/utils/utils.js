/*
  To sa nasze funkcje pomocnicze, nie musisz tego obczajac.

*/


async function createImage(config, url) {
  const myImage = new Image();


  return new Promise((resolve, reject) => {
    myImage.onload = function() {
      const image = new Konva.Image({
        ...config,
        image: myImage
      });
      resolve(image)
    };
    myImage.src = url
  })

}

export { createImage }
