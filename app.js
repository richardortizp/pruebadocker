import { Jimp } from "jimp";

const inputPath = "./input.jpeg";
const outputPath = "./output.jpg";

Jimp.read(inputPath)
  .then(image => {
    return image
      .greyscale()
      .write(outputPath)
      .then(() => {
        console.log(`Imagen convertida a blanco y negro y guardada como ${outputPath}`);
      });
  })
  .catch(err => {
    console.error('Error al procesar la imagen:', err);
  });