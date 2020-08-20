(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.default = {}));
}(this, (function (exports) { 'use strict';

  function empty() {}

  function getRandomQuote() {
    return Math.random() < 0.5 === true ? 'No guts, no gory.' : 'Me eat brains!';
  }
  function generateName() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Ghoul';
    return 'z' + name;
  }
  function zombieFactory() {
    return {
      name: generateName(),
      damage: 42,
      say: getRandomQuote
    };
  }

  var zombie = /*#__PURE__*/Object.freeze({
    __proto__: null,
    getRandomQuote: getRandomQuote,
    generateName: generateName,
    'default': zombieFactory
  });

  var index = {
    empty: empty,
    generateName: generateName,
    getRandomQuote: getRandomQuote,
    zombieFactory: zombieFactory,
    zombie: zombie
  };

  exports.default = index;
  exports.empty = empty;
  exports.generateName = generateName;
  exports.getRandomQuote = getRandomQuote;
  exports.zombie = zombie;
  exports.zombieFactory = zombieFactory;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
