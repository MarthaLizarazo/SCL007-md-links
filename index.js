// Llamar a los módulos Node que vamos a usar
const path = require('path');
const mdlink = require('./mdLinks.js');

// Obtengo la ruta y la transformo en 
if (require.main === module){
  const route = process.argv[2];
  let absolutePath = path.resolve(route);
  if (mdlink.myFileMd(absolutePath)) {
    mdlink.arrayFile(absolutePath); // ruta absoluta
    console.log(absolutePath.green);
  }
  console.log(route.red);
}