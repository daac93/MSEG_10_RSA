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



describe('cenfo-rsa', function() {
  describe('Cenfo-rsa convertirNumeroEnASCII - caso 1', function() {
    it('Debe devolver true si 109 para letra = m', function() {
      assert.equal(rsa.convertirNumeroEnASCII(bigInt(109)), 'm');
    });
  });
});
describe('cenfo-rsa', function() {
  describe('Cenfo-rsa convertirStringAHexadecimal - caso 1', function() {
    it('Debe devolver true si hola mundo para Hexadecimal = 686f6c61206d756e646f', function() {
      assert.equal(rsa.convertirStringAHexadecimal('hola mundo'), '686f6c61206d756e646f');
    });
  });
});
describe('cenfo-rsa', function() {
  describe('Cenfo-rsa convertirStringAHexadecimal - caso 1', function() {
    it('Debe devolver true si proyecto final para Hexadecimal = 70726f796563746f2066696e616c', function() {
      assert.equal(rsa.convertirStringAHexadecimal('proyecto final'), '70726f796563746f2066696e616c');
    });
  });
});
describe('cenfo-rsa', function() {
  describe('Cenfo-rsa encriptar - caso 1', function() {
    it('Debe devolver true si encriptar(Lorem ipsum dolor sit amet.) = 30737354030698936222115415441797276786017459202286968483441081018018539223148045141025163376359361049522564212119525820592289598022098408275350099807627037062605205849239393949085896742178943743065412108904221244866874071325081464463216476050789351218745974312031397406233136589006856792898358789945948949855815617118142176 ', function() {
      assert.equal(rsa.encriptar("Lorem ipsum dolor sit amet."), "30737354030698936222115415441797276786017459202286968483441081018018539223148045141025163376359361049522564212119525820592289598022098408275350099807627037062605205849239393949085896742178943743065412108904221244866874071325081464463216476050789351218745974312031397406233136589006856792898358789945948949855815617118142176");
    });
  });
});
describe('cenfo-rsa', function() {
  describe('Cenfo-rsa encriptar - caso 2', function() {
    it('Debe devolver true si encriptar(test) = 28398488382729219270761165135453002903829459968 ', function() {
      assert.equal(rsa.encriptar("test"), "28398488382729219270761165135453002903829459968");
    });
  });
});
describe('cenfo-rsa', function() {
  describe('Cenfo-rsa encriptar - caso 3', function() {
    it('Debe devolver true si encriptar("") = 0', function() {
      assert.equal(rsa.encriptar(""), "0");
    });
  });
});
describe('cenfo-rsa', function() {
  describe('Cenfo-rsa desencriptar - caso 1', function() {
    it('Debe devolver true si desencriptar(30737354030698936222115415441797276786017459202286968483441081018018539223148045141025163376359361049522564212119525820592289598022098408275350099807627037062605205849239393949085896742178943743065412108904221244866874071325081464463216476050789351218745974312031397406233136589006856792898358789945948949855815617118142176) = Lorem ipsum dolor sit amet.', function() {
      var C = rsa.encriptar("Lorem ipsum dolor sit amet.");
      assert.equal(rsa.desencriptar(C), "Lorem ipsum dolor sit amet.");
    });
  });
});
describe('cenfo-rsa', function() {
  describe('Cenfo-rsa desencriptar - caso 2', function() {
    it('Debe devolver true si desencriptar(28398488382729219270761165135453002903829459968) = test', function() {
      var C = rsa.encriptar("test");
      assert.equal(rsa.desencriptar(C), "test");
    });
  });
});
describe('cenfo-rsa', function() {
  describe('Cenfo-rsa desencriptar - caso 2', function() {
    it('Debe devolver true si desencriptar(0) = ""', function() {
      assert.equal(rsa.desencriptar(0), "");
    });
  });
});
