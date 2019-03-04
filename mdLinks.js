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
      links.forEach((link) => {
      console.log(link.green);
      arrayUrl.push(link);
        const text = links.text;
        const href = links.url;
        const fetchArray=fetch(arrayUrl).then((res) => {
          const linkObjeto = {
            href: res.url,
            text: res.text,
            file: res.markdown,
            statusLink: res.status,
            statusText: res.statusText
          };
          return linkObjeto;
          
      }).then((statusLink)=>{
        console.log('status= ', res.statusLink);
      }).catch((err) => {
        console.error(err);
    });
      });
      console.log('En este Archivo md se encontraron '.yellow + links.length + ' links'.yellow);
      resolve(links);
    });
  },
}

/* // llamando a mis promesas
myFileMd(absoluRoute).then(readFile).then(resultado => {
  console.log(resultado);
}).catch((error) => {
  console.log('error al mostrar las promesas'.red);
  console.log(error);
}); */
