# mdLinks

## Archivos Markdown

Markdown es un lenguaje de marcado, que facilita la aplicación de formato a un texto, empleando una serie de caracteres de una forma especial. En principio, fue pensado para elaborar textos cuyo destino iba a ser la web con más rapidez y sencillez que si estuviésemos empleando directamente HTML. Y si bien ese suele ser el mejor uso que podemos darle, también podemos emplearlo para cualquier tipo de texto, independientemente de cual vaya a ser su destino.

## mdLinks

Version 0.1.0

Autor: Martha Lizarazo

mdLinks es un módulo que permite extraer link de un archivo tipo md (markdown).

Lenguaje aplicado JavaScript para ser ejecutada con Node.js

Funciones:
- Devuelve una ruta relativa en ruta Adsoluta.
- Filtra si la ruta ingresada es un archivo tipo md.
- Extrae los links archivo tipo md.
- Muestra los link encontrados en el archivo md.
- Opción de estadísticas de enlaces en los archivos.
- Se puede usar por medio de la terminal

### Instalacion

npm install -g https://github.com/MarthaLizarazo/SCL007-md-links.git

### Uso
Linea de comandos
La ruta ingresada puede ser absoluta o relativa y puede ser un archivo o un directorio

$ md-links ./some/example.md

./some/example.md:10 http://algo.com/2/3/ Link a algo
./some/example.md:15 https://otra-cosa.net/algun-doc.html algún doc
./some/example.md:40 http://google.com/ Google
$ md-links ./some/example.md --validate

./some/example.md:10 http://algo.com/2/3/ ok 200 Link a algo
./some/example.md:15 https://otra-cosa.net/algun-doc.html fail 404 algún doc
./some/example.md:40 http://google.com/ ok 301 Google
$ md-links ./some/example.md --stats

total: 3 ok : 2 fails: 1

### Importar el modulo
mdLinks(path, options)

Argumentos

path: Ruta absoluta o relativa al archivo.

options: Un objeto con las siguientes propiedades:

validate: Valor que determina si se desea validar los links encontrados en el archivo. (tipo de dato booleano)
stats: Valor que determina si se desea obtener estadisticas de los enlaces del archivo. (tipo de dato booleano)

Valor de retorno

Una promesa con un arreglo de objetos, cada objeto representa un link y contiene las siguientes propiedades:

href: URL encontrada.
text: Texto que aparecía dentro del link.
file: Ruta del archivo donde se encontró el link.
line: Linea donde se encontró el link.





