const fs = require('fs'); // file system
const colors = require('colors'); // modulo para darle color a mi texto.
const path = require('path'); // modulo para trabajar con rutas de archivos y directorios
const markdownLinkExtractor = require('markdown-link-extractor');
const fetch = require('node-fetch');
let mdLinks = {};
let validate = false;
let stats = false;

module.exports = {
// Leer mi archivo
  readFile : (absoluRoute)=>{
    console.log('Hola'); //probando
    const markdown = fs.readFileSync(absoluRoute).toString(); 
    //console.log(markdown.yellow);   
    const links = markdownLinkExtractor(markdown);  
    return new Promise((resolve,reject) =>{
      links.forEach(function (link) { 
        console.log(link.yellow);
      });
      resolve(link);
    }); 
  },
  // Validar si mi archivo es md
  myFileMd : (absoluRoute) => {
    return new Promise((resolve,reject) =>{
      const myFileMd = absoluRoute.filter(file => path.extname(file) === '.md');
      resolve(myFileMd);
      console.log('es MD'.blue);
    });
  },
}


/*   // llamando a mis promesas
arrayFile(absoluRoute).then(myFileMd).then(resultado => {
  console.log(resultado);
}).catch((error) => {
  console.log('error al mostrar las promesas'.red);
  console.log(error);
});
 */