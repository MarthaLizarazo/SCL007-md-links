const fs = require('fs'); // file system
const colors = require('colors'); // modulo para darle color a mi texto.
const path = require('path'); // modulo para trabajar con rutas de archivos y directorios
const markdownLinkExtractor = require('markdown-link-extractor');
const fetch = require('node-fetch');
let mdLinks = {};
let validate = false;
let stats = false;

module.exports = {
// guardar mis rutas de archivos en un arreglo
  arrayFile : (absoluRoute)=>{
    console.log('Hola');
    const fileAll = [];
    return new Promise((resolve,reject) =>{
      fileAll.push(absoluRoute);
      resolve(fileAll);
    }); 
  },
  // Validar si mi archivo es md
  myFileMd : (fileAll) => {
    return new Promise((resolve,reject) =>{
      let myFileMd = fileAll.filter(file => path.extname(file) === '.md');
      resolve(myFileMd);
      console.log(fileAll.blue);
    });
  },
}
var markdown = fs.readFileSync('./README.md').toString();    
var links = markdownLinkExtractor(markdown);    
links.forEach(function (link) {
    console.log(link);
});


/*   // llamando a mis promesas
arrayFile(absoluRoute).then(myFileMd).then(resultado => {
  console.log(resultado);
}).catch((error) => {
  console.log('error al mostrar las promesas'.red);
  console.log(error);
});
 */




/* // Leo mi archivo
const myFile = (myFileMd) => {
  return new Promise((resolve, reject) => {
    fs.readFile(myFileMd, 'utf8', (err, data) => {
      if (err) throw err;
      console.log(err);
      resolve(data);
      console.log(data);
    })
  });
} */

/* mdLinks=() */



//MARCEeee
/* // funcion para saber si es carpeta o archivo
const mdLinksFileOrFolder = function nombre (path, option) {
console.log(path);
const rutaUsuario = String(path).trim(); //el trim elimina los epacios
if (String(mdLinksFileOrFolder).indexOf())
}
 */

