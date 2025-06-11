import { Jimp } from "jimp";

const inputPath = "./input.jpeg";
const outputPath = "./output.jpeg";

Jimp.read(inputPath)
  .then(image => {
    return image
      .greyscale()
      .writeAsync(outputPath)
      .then(() => {
        console.log(`Imagen convertida a blanco y negro y guardada como ${outputPath}`);
      });
  })
  .catch(err => {
    console.error('Error al procesar la imagen:', err);
  });