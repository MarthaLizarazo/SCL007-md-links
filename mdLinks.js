const fs = require('fs'); // file system
const colors = require('colors');
// modulo para darle color a mi texto. Lo llamo colocando . + el nombre del color (.green)
const path = require('path'); // modulo para trabajar con rutas de archivos y directorios
//const marked = require('marked'); // modulo para links buenos
const markdownLinkExtractor = require('markdown-link-extractor');
const fetch = require('node-fetch');
let mdLinks = {};
let validate = false;
let stats = false;

const route = process.argv[2];
let absoluRoute = path.resolve(route);
// console.log(route);

// guardar mis archivos en un arreglo
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

// leo un archivo //
/* const myFile = (fileAll) => {
  return new Promise((resolve, reject) => {
    let file;
    try {
      file = fs.readFile(fileAll, 'utf8', (err, data) => {
      resolve(data);
      })
    }catch (err) {
      reject('No es un archivo o directorio');
    }
  });
} */

const myFile = (fileAll) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileAll, 'utf8', function(err, data){
      if (err) throw err;
      resolve(data.toString());
    })
  });
}


arrayFile(absoluRoute).then(myFileMd).then(myFile).then(resultado => {
  console.log(resultado);
}).catch(() => {
  console.log('error al mostrar las promesas');
});



// ** path es la ruta (absoluta o relativa) y objeto es un arreglo **//
// RECURSION //

/* mdLinks.mdLinks = (path, objeto) => {
  return new Promise((resolve, reject) => { // mi promesa trae una solucion o una falla
  // si es distinta  a mi ruta muestro mje de falla con color //
    if (!path) reject('Ingresar ruta'.red);
    path = path1.resolve(path); 
    if (objeto) {
      if (objeto.validate) validate = true;
      if (objeto.stats) stats = true; validate = true;
    }
  })*/