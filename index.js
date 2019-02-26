const fs = require('fs'); // file system
const colors = require ('colors'); // modulo para darle color a mi texto. Lo llamo colocando . + el nombre del color (.green)
const path = require('path'); // modulo para trabajar con rutas de archivos y directorios
const marked = require('marked'); // modulo para links buenos


/*
module.exports = () => {
  // ...
};
*/
/*
console.log('probando color'.blue);

fs.readFile('./readme.md', 'utf-8', (err, data) => {
  if (err) throw err;
  const file = data;
  console.log(file);
});

fs.readlink(file, (err, data1) => {
  if (err) throw err;
  console.log(data1);
});
*//
 // Valido si es archivo ******
const readFile = (path) => {
  if (fs.existsSync(path)) {
      console.log('existe la ruta');
      // Verificamos que sea un archivo, por que una ruta puede ser valida, pero ser una carpeta
      if(fs.statSync(path).isFile()) {
          // Verificamos que sea un archivo .md
          const arrCadenas = path.split('.');
          if (arrCadenas[1] === 'md'){
              return true;
          }
      }
  }
  return false;
};