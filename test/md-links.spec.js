//const mdLinks = require('../');
const mdLinks = require('./mdLinks.js');

describe(
  'mdLinks.validateIsMarkDown() Deberia validar si es archivo md',
  () => {
    test('Deberia retornar false para un archivo que no es md', () => {
      expect(mdLinks.validateIsMarkDown('./md/file.js')).toBe(false);
    });
    test('Deberia retornar true para un archivo md', () => {
      expect(mdLinks.validateIsMarkDown('./md/file.md')).toBe(true);
    });
  });
describe(
  'mdLinks.markdownLinkExtractor() Deberia extraer los links de un texto',
  () => {
    test('Deberia retornar un arreglo con un objecto para un texto con links', () => {
      expect(mdLinks.markdownLinkExtractor('', '[GitHub](http://github.com)', 6))
        .toEqual([{ 
          'href': 'http://github.com',
          'line': 6,
          'path': '',
          'text': 'GitHub' 
        }]);
    });
    test('Deberia retornar un arreglo vacio si no  hay link', () => {
      expect(mdLinks.markdownLinkExtractor('', 'hola, este es el contenido', 9)).toEqual([]);
    });
  });

/* describe('mdLinks', () => {

  it('should...', () => {
    console.log('FIX ME!');
  });

});
 */