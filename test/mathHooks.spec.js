const assert = require('assert') //
const Math = require('../src/math.js');

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
            assert.equal (value, 10);//verifica se dois valores são iguais
            done();
        });
    });
    it('Multiply two numbers', function(){ //.only executa só um teste, também pode usar o .skip
        const math = new Math();
        assert.equal(math.multiply(value,5),0);
    });
});