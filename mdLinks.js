const fs = require('fs'); // file system
const colors = require('colors'); // modulo para darle color a mi texto.
const path = require('path'); // modulo para trabajar con rutas de archivos y directorios
const markdownLinkExtractor = require('markdown-link-extractor'); // modulo extrae links
const fetch = require('node-fetch');

module.exports = {

// Validar si mi archivo es md
  myFileMd : (absoluRoute) => {
    return new Promise((resolve,reject) =>{
      myFileMd = absoluRoute.filter(file => path.extname(file) === '.md');
      resolve(myFileMd);
    });
  },

// Leer el archivo, extraer link y guardarlos
  readFile: (myFileMd) => {
    // console.log('Hola'); //probando
    const markdown = fs.readFileSync(myFileMd).toString();
    // console.log(markdown.yellow);   
    const links = markdownLinkExtractor(markdown);
    const arrayUrl=[];
    return new Promise((resolve, reject) => {
      links.forEach(function (link) {
      console.log(link.green);
      arrayUrl.push(link);
        const text = links.text;
        const url = links.url;
        fetchArray=fetch(arrayUrl).then((response) => {
        return response.status();
        console.log(response.status);
      }).then((statusText)=>{
        console.log('status= ', response.statusText);
      }).catch((err) => {
        console.error(err);
    });
      });
      console.log('En este Archivo md se encontraron '.yellow + links.length + ' links'.yellow);
      resolve(links);
    });
  },
}
/* 
const linkObject = {
  href: url,
  text: text,
  file: markdown
};
return linkObject; */

/* // llamando a mis promesas
myFileMd(absoluRoute).then(readFile).then(resultado => {
  console.log(resultado);
}).catch((error) => {
  console.log('error al mostrar las promesas'.red);
  console.log(error);
}); */
