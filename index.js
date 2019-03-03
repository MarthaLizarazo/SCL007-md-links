// Llamar a los módulos Node que vamos a usar
const path = require('path');
const mdlink = require('./mdLinks.js');

// Obtengo la ruta y la transformo en absoluta
if (require.main === module){
  const route = process.argv[2];
  let absolutePath = path.resolve(route);
  if (mdlink.myFileMd(absolutePath)) {
    mdlink.readFile(absolutePath); // ruta absoluta
    console.log(absolutePath.magenta.bgWhite);
    //mdlink.validateUrl();
  }
  console.log('Si es un archivo md = '.bgBlue + route.red);

}