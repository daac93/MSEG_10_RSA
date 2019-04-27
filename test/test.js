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
      assert.equal(util.gdc(bigInt(7), bigInt(18)).toString(), "1");
    });
  });
});
describe('cenfo-util', function() {
  describe('GDC calcular Maximo Comun Divisor divisor  - caso 2', function() {
    it('Debe devolver true si gdc(8,15)=1', function() {
      assert.equal(util.gdc(bigInt(8), bigInt(15)).toString(), "1");
    });
  });
});
describe('cenfo-util', function() {
  describe('GDC calcular Maximo Comun Divisor divisor  - caso 3', function() {
    it('Debe devolver true si gdc(10,77)=1', function() {
      assert.equal(util.gdc(bigInt(10), bigInt(77)).toString(), "1");
    });
  });
});
describe('cenfo-util', function() {
  describe('GDC calcular Maximo Comun Divisor divisor  - caso 4', function() {
    it('Debe devolver true si gdc(90,27)=9', function() {
      assert.equal(util.gdc(bigInt(90), bigInt(27)).toString(), "9");
    });
  });
});
describe('cenfo-util', function() {
  describe('GDC calcular Maximo Comun Divisor divisor  - caso 5', function() {
    it('Debe devolver true si gdc(15,85)=5', function() {
      assert.equal(util.gdc(bigInt(15), bigInt(85)).toString(), "5");
    });
  });
});

describe('cenfo-util', function() {
  describe('Obtener n=p*q - caso 1', function() {
    it('Debe devolver true si n=101009*101287 = 10230898583 ', function() {
      assert.equal(util.obtener_n(bigInt(101009), bigInt(101287)).toString(), "10230898583");
    });
  });
});
describe('cenfo-util', function() {
  describe('Obtener n=p*q - caso 2', function() {
    it('Debe devolver true si n=104161 *104729 = 10908677369 ', function() {
      assert.equal(util.obtener_n(bigInt(104161), bigInt(104729)).toString(), "10908677369");
    });
  });
});
describe('cenfo-util', function() {
  describe('Obtener n=p*q - caso 3', function() {
    it('Debe devolver true si n=103123 *103981  = 10722832663 ', function() {
      assert.equal(util.obtener_n(bigInt(103123), bigInt(103981)).toString(), "10722832663");
    });
  });
});

describe('cenfo-util', function() {
  describe('Obtener e de p=104161, q=104729)- caso 1', function() {
    it('Debe devolver true e(101009, 101287) = 5', function() {
      assert.equal(util.obtener_e(bigInt(101009), bigInt(101287)).toString(), "5");
    });
  });
});
describe('cenfo-util', function() {
  describe('Obtener e de p=104161, q=104729)- caso 2', function() {
    it('Debe devolver true e(104161, 104729) = 11', function() {
      assert.equal(util.obtener_e(bigInt(104161), bigInt(104729)).toString(), "11");
    });
  });
});
describe('cenfo-util', function() {
  describe('Obtener e de p=103123, q=103981)- caso 3', function() {
    it('Debe devolver true e(104161, 104729) = 7', function() {
      assert.equal(util.obtener_e(bigInt(103123), bigInt(103981)).toString() , "7");
    });
  });
});


describe('cenfo-util', function() {
  describe('Obtener d de p=11, q=13)- caso 2', function() {
    it('Debe devolver true e(11, 13) = 103', function() {
      util.obtener_e(bigInt(11), bigInt(13));
      util.obtener_n(bigInt(11), bigInt(13));
      assert.equal(util.obtener_d().toString() , "103");
    });
  });
});



describe('cenfo-rsa', function() {
  describe('Cenfo-rsa encriptar - caso 1', function() {
    it('Debe devolver true si encriptar(Lorem ipsum dolor sit amet.) = 438976 1367631 1481544 1030301 1295029 32768 1157625 1404928 1520875 1601613 1295029 32768 1000000 1367631 1259712 1367631 1481544 32768 1520875 1157625 1560896 32768 912673 1295029 1030301 1560896 97336', function() {
      assert.equal(rsa.encriptar("Lorem ipsum dolor sit amet."), "438976 1367631 1481544 1030301 1295029 32768 1157625 1404928 1520875 1601613 1295029 32768 1000000 1367631 1259712 1367631 1481544 32768 1520875 1157625 1560896 32768 912673 1295029 1030301 1560896 97336");
    });
  });
});
describe('cenfo-rsa', function() {
  describe('Cenfo-rsa encriptar - caso 2', function() {
    it('Debe devolver true si encriptar(test) = 1560896 1030301 1520875 1560896 ', function() {
      assert.equal(rsa.encriptar("test"), "1560896 1030301 1520875 1560896");
    });
  });
});
describe('cenfo-rsa', function() {
  describe('Cenfo-rsa encriptar - caso 3', function() {
    it('Debe devolver true si encriptar("") = ""', function() {
      assert.equal(rsa.encriptar(""), "");
    });
  });
});
describe('cenfo-rsa', function() {
  describe('Cenfo-rsa desencriptar - caso 1', function() {
    it('Debe devolver true si desencriptar(970299 1367631 1331000 1520875 1030301 970299 1560896 1030301 1560896 1601613 1481544 32768 912673 1000000 1157625 1404928 1157625 1520875 970299 1157625 1331000 1092727 32768 1030301 1259712 1157625 1560896) = Lorem ipsum dolor sit amet.', function() {
      var C = rsa.encriptar("consectetur adipiscing elit");
      assert.equal(rsa.desencriptar(C), "consectetur adipiscing elit");
    });
  });
});
describe('cenfo-rsa', function() {
  describe('Cenfo-rsa desencriptar - caso 2', function() {
    it('Debe devolver true si desencriptar(1560896 1030301 1520875 1560896) = test', function() {
      var C = rsa.encriptar("test");
      assert.equal(rsa.desencriptar(C), "test");
    });
  });
});
