(() => {
  var __defineProperty = Object.defineProperty;
  var __commonJS = (callback, module) => () => {
    if (!module) {
      module = {exports: {}};
      callback(module.exports, module);
    }
    return module.exports;
  };
  var __markAsModule = (target) => {
    return __defineProperty(target, "__esModule", {value: true});
  };
  var __export = (target, all) => {
    __markAsModule(target);
    for (var name in all)
      __defineProperty(target, name, {get: all[name], enumerable: true});
  };

  // ../src/index.js
  var require_src = __commonJS((exports) => {
    __export(exports, {
      default: () => src_default,
      empty: () => empty,
      generateName: () => generateName,
      getRandomQuote: () => getRandomQuote,
      zombie: () => zombie_exports,
      zombieFactory: () => zombieFactory
    });
    var src_default = {empty, generateName, getRandomQuote, zombieFactory, zombie: zombie_exports};
  });

  // ../src/empty.js
  function empty() {
  }

  // ../src/unused.js

  // ../src/zombie.js
  const zombie_exports = {};
  __export(zombie_exports, {
    default: () => zombieFactory,
    generateName: () => generateName,
    getRandomQuote: () => getRandomQuote
  });
  function getRandomQuote() {
    return Math.random() < 0.5 === true ? "No guts, no gory." : "Me eat brains!";
  }
  function generateName(name = "Ghoul") {
    return "z" + name;
  }
  function zombieFactory() {
    return {
      name: generateName(),
      damage: 42,
      say: getRandomQuote
    };
  }
  require_src();
})();
