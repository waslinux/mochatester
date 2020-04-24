const assert = require('assert') 
const Math = require('../src/math.js');
//chai ferramenta de asserts
const expect = require('chai').expect;

let value = 0;

describe('Math class', function() {
    //hooks beforeEach, before, after, afterEach
    this.beforeEach(function(){
        value = 0;
    })
    it('Sum two numbers', function(done) {
        const math = new Math();
        this.timeout(3000);
        value = 5

        math.sum(value, 5, value =>{
            expect(value).to.equal(10)
            done();
        });
    });
    it('Verificando se o Objeto está recebendo name corretamente', function(){ //.only executa só um teste, também pode usar o .skip
        const obj = {
            name: 'Wander Augusto'
        };
        const obj2 = {
            name: 'Wander Augusto'
        };
      //  expect(obj).to.have.property('name').equal('Wander Augusto') //testando objetos

      expect(obj).to.deep.equal(obj2) //compara os valores profundamente
    });
});