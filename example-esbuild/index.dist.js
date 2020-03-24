((modules, entryPoint) => {
  let global = function() {
    return this;
  }();
  let cache = {};
  let require = (target, arg) => {
    if (typeof target === "number") {
      let module = cache[target], exports;
      if (!module) {
        module = cache[target] = {
          exports: {}
        };
        modules[target].call(global, require, module.exports, module);
      }
      exports = module.exports;
      if (arg && (!exports || !exports.__esModule)) {
        if (!exports || typeof exports !== "object") {
          exports = {};
        }
        if (!("default" in exports)) {
          Object.defineProperty(exports, "default", {
            get: () => module.exports,
            enumerable: true
          });
        }
      }
      return exports;
    }
    arg.__esModule = () => true;
    for (let name in arg) {
      Object.defineProperty(target, name, {
        get: arg[name],
        enumerable: true
      });
    }
  };
  return require(entryPoint);
})({
  1(require, index) {
    // ../src/empty.js
    function empty2() {
    }

    // ../src/unused.js
    function unused3() {
      return Math.random();
    }

    // ../src/zombie.js
    var exports = {};
    require(exports, {
      default: () => default4,
      generateName: () => generateName,
      getRandomQuote: () => getRandomQuote
    });
    function getRandomQuote() {
      return Math.random() < 0.5 === true ? "No guts, no gory." : "Me eat brains!";
    }
    function generateName(name = "zGhoul") {
      return "z" + name;
    }
    function zombieFactory() {
      return {
        name: generateName(),
        damage: 42,
        say: getRandomQuote
      };
    }

    // ../src/index.js
    require(index, {
      default: () => default5,
      empty: () => default2,
      generateName: () => generateName,
      getRandomQuote: () => getRandomQuote,
      zombie: () => exports,
      zombieFactory: () => default4
    });
    const default5 = {
      empty: default2,
      generateName,
      getRandomQuote,
      zombieFactory: default4,
      zombie: exports
    };
  }
}, 1);
