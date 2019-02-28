const fs = require('fs'); // file system
const colors = require('colors');
// modulo para darle color a mi texto. Lo llamo colocando . + el nombre del color (.green)
const path = require('path'); // modulo para trabajar con rutas de archivos y directorios
//const marked = require('marked'); // modulo para links buenos
const markdownLinkExtractor = require('markdown-link-extractor');
const fetch = require('node-fetch');
//let mdLinks = {};
let validate = false;
let stats = false;

const route = process.argv[2];
let absoluRoute = path.resolve(route);
// console.log(route);

// guardar mis rutas de archivos en un arreglo
const arrayFile = (absoluRoute)=>{
  const fileAll = [];
  return new Promise((resolve,reject) =>{
    fileAll.push(absoluRoute);
    resolve(fileAll);
  });
}

// Validar si mi archivo es md
const myFileMd = (fileAll) => {
  return new Promise((resolve,reject) =>{
      let myFileMd = fileAll.filter(file => path.extname(file) === '.md');
      resolve(myFileMd);
  });
}

// Leo mi archivo
const myFile = (fileAll) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileAll, 'utf8', (err, data) => {
      if (err) // throw err;
      console.log(err);
      else
      resolve(data.toString());
    })
  });
}


arrayFile(absoluRoute).then(myFileMd).then(resultado => {
  console.log(resultado);
}).catch(() => {
  console.log('error al mostrar las promesas'.red);
});

//module.exports=mdLinks;

// extraer links
//const markdownLinkExtractor = require


//MARCE
/* // funcion para saber si es carpeta o archivo
const mdLinksFileOrFolder = function nombre (path, option) {
console.log(path);
const rutaUsuario = String(path).trim(); //el trim elimina los epacios
if (String(mdLinksFileOrFolder).indexOf())
}
 */