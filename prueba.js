const fs = require('fs'); // file system
// Leo mi archivo
const myFile = (fileAll) => {
    return new Promise((resolve, reject) => {
      fs.readFile(fileAll, 'utf8', (err, data) => {
        if (err) throw err.red;
        const lee = data;
        console.log(lee.red);
        resolve(myFile());
      })
    });
  }
  arrayFile(absoluRoute).then(myFileMd).then(myFile).then(resultado => {
    console.log(resultado);
  }).catch(() => {
    console.log('error al mostrar las promesas');
  });