var expect = require('chai').expect;
var cervezas = require('./index');
var _ = require('lodash')

describe('cervezas', function () {
    describe('todas', function () {
        it('Debería ser un array de objetos', function (done) {
            expect(cervezas.todas).to.satisfy(isArrayOfObjects);
            function isArrayOfObjects(array){
                return array.every(function(item){
                    return typeof item === 'object';
                });
            }
            done();
        }); 
        it('Debería incluir la cerveza Ambar', function (done) {
            expect(cervezas.todas).to.satisfy(contieneAmbar);
            function contieneAmbar (array){
                return _.some(array, { 'nombre': 'ÁMBAR ESPECIAL' });
            }
            done();
        }); 

    });
    describe('alazar', function () {
        it('Debería mostrar un elemento de la lista de cervezas', function (done) {
            var cerveza = cervezas.alazar();
            expect(cervezas.todas).to.include(cerveza);
            done();
        });
    });
});