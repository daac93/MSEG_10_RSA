// libreria de RSA
// Libreria Assert de Mocha
// mas ejemplos en: https://mochajs.org/

var assert = require('assert');
var util = require('cenfo-util');
var rsa = require('cenfo-rsa');
var bigInt = require("big-integer");
// Funcion GDC
describe('cenfo-util', function() {
  describe('GDC calcular Maximo Comun Divisor divisor  - caso 1', function() {
    it('Debe devolver true si gdc(7,18)=1', function() {
      assert.equal(util.gdc(bigInt(7),bigInt(18)),bigInt(1));
    });
  });
});
describe('cenfo-util', function() {
  describe('GDC calcular Maximo Comun Divisor divisor  - caso 2', function() {
    it('Debe devolver true si gdc(8,15)=1', function() {
      assert.equal(util.gdc(bigInt(8),bigInt(15)),bigInt(1));
    });
  });
});
describe('cenfo-util', function() {
  describe('GDC calcular Maximo Comun Divisor divisor  - caso 3', function() {
    it('Debe devolver true si gdc(10,77)=1', function() {
      assert.equal(util.gdc(bigInt(10),bigInt(77)),bigInt(1));
    });
  });
});
describe('cenfo-util', function() {
  describe('GDC calcular Maximo Comun Divisor divisor  - caso 4', function() {
    it('Debe devolver true si gdc(90,27)=9', function() {
      assert.equal(util.gdc(bigInt(90),bigInt(27)),bigInt(9));
    });
  });
});
describe('cenfo-util', function() {
  describe('GDC calcular Maximo Comun Divisor divisor  - caso 5', function() {
    it('Debe devolver true si gdc(15,85)=5', function() {
      assert.equal(util.gdc(bigInt(15),bigInt(85)),bigInt(5));
    });
  });
});

describe('cenfo-util', function() {
  describe('Obtener n=p*q - caso 1', function() {
    it('Debe devolver true si n=101009*101287 = 10230898583 ', function() {
      assert.equal(util.obtener_n(bigInt(101009),bigInt(101287)),bigInt(10230898583));
    });
  });
});
describe('cenfo-util', function() {
  describe('Obtener n=p*q - caso 2', function() {
    it('Debe devolver true si n=104161 *104729 = 10908677369 ', function() {
      assert.equal(util.obtener_n(bigInt(104161),bigInt(104729)),bigInt(10908677369));
    });
  });
});
describe('cenfo-util', function() {
  describe('Obtener n=p*q - caso 3', function() {
    it('Debe devolver true si n=103123 *103981  = 10722832663 ', function() {
      assert.equal(util.obtener_n(bigInt(103123),bigInt(103981) ),bigInt(10722832663));
    });
  });
});

describe('cenfo-util', function() {
  describe('Obtener r = (p-1)*(q-1)- caso 1', function() {
    it('Debe devolver true  r=(101009-)*(101287-1) = 10722625560', function() {
      assert.equal(util.obtener_e(bigInt(101009),bigInt(101287)),bigInt(10722625560));
    });
  });
});
describe('cenfo-util', function() {
  describe('Obtener r = (p-1)*(q-1)- caso 2', function() {
    it('Debe devolver true  r=(104161-)*(104729-1) = 10908468480', function() {
      assert.equal(util.obtener_e(bigInt(104161),bigInt(104729)),bigInt(10908468480));
    });
  });
});
describe('cenfo-util', function() {
  describe('Obtener r = (p-1)*(q-1)- caso 3', function() {
    it('Debe devolver true  r=(103123-)*(103981-1) = 10230696288', function() {
      assert.equal(util.obtener_e(bigInt(103123),bigInt(103981)),bigInt(10230696288));
    });
  });
});



describe('cenfo-util', function() {
  describe('Cenfo-util obtener_numToAscii - caso 1', function() {
    it('Debe devolver true si 109,101,110,115,97,106,101 para palabra = mensaje', function() {
      assert.equal(util.obtener_numToAscii('bigInt(10910111011597106101)'), 'mensaje');
    });
  });
});

describe('cenfo-util', function() {
  describe('Cenfo-util obtener_msgtoHexa - caso 1', function() {
    it('Debe devolver true si hola mundo para Hexadecimal = 686f6c61206d756e646f', function() {
      assert.equal(util.obtener_msgtohexa('hola mundo)'), '686f6c61206d756e646f');
    });
  });
});

describe('cenfo-util', function() {
  describe('Cenfo-util obtener_msgtoHexa - caso 1', function() {
    it('Debe devolver true si proyecto final para Hexadecimal = 70726f796563746f2066696e616c', function() {
      assert.equal(util.obtener_msgtohexa('proyecto final)'), '70726f796563746f2066696e616c');
    });
  });
});