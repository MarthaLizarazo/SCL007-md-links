const fs = require('fs'); // file system
/* // Leo mi archivo
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
  }); */
  const myFile = (myFileMd) => {
    return new Promise((resolve, reject) => {
      fs.readFile(myFileMd, 'utf8', (err, data) => {
        if (err) throw err;
        console.log(err);
        resolve(data);
        console.log(myFile);
      })
    });
  }

-------------------------------------------------- ejemplo--------------- INDEX
  let mdlinks = require('./promises').mdlinks;

const pathUrl = process.argv[2];
const option = process.argv[3];
const optionNext = process.argv[4];

if(require.main === module){
  mdlinks(pathUrl, option, optionNext).then((response) => {
    console.log(response); 
  }, (error) =>{
     console.log(error);
  });
}
module.exports.mdlinks = mdlinks; 