(function(global) {
  'use strict';
  // project-example-rome/example-src/mpty.js
function ___R$project$example$rome$example$src$mpty_js$default() {}

  // project-example-rome/example-src/unused.js
function ___R$project$example$rome$example$src$unused_js$default() {
    return Math.random();
  }

  // project-example-rome/example-src/zombie.js
const ___R$project$example$rome$example$src$zombie_js = {
    getRandomQuote: ___R$project$example$rome$example$src$zombie_js$getRandomQuote,
    generateName: ___R$project$example$rome$example$src$zombie_js$generateName,
    default: ___R$project$example$rome$example$src$zombie_js$default,
  };
  function ___R$project$example$rome$example$src$zombie_js$getRandomQuote() {
    return Math.random() < 0.5 === true ? 'No guts, no gory.' : 'Me eat brains!';
  }

  function ___R$project$example$rome$example$src$zombie_js$generateName(name = 'zGhoul') {
    return 'z' + name;
  }

  function ___R$project$example$rome$example$src$zombie_js$default() {
    return (
      {
        name: ___R$project$example$rome$example$src$zombie_js$generateName(),
        damage: 42,
        say: ___R$project$example$rome$example$src$zombie_js$getRandomQuote,
      }
    );
  }

  // project-example-rome/example-src/index.js
const ___R$project$example$rome$example$src$index_js$zombie = ___R$project$example$rome$example$src$zombie_js
  const ___R$project$example$rome$example$src$index_js$default = {empty: ___R$project$example$rome$example$src$mpty_js$default, generateName: ___R$project$example$rome$example$src$zombie_js$generateName, getRandomQuote: ___R$project$example$rome$example$src$zombie_js$getRandomQuote, zombieFactory: ___R$project$example$rome$example$src$zombie_js$default, zombie: ___R$project$example$rome$example$src$zombie_js};

  // project-example-rome/index.js
const ___R$project$example$rome$index_js = {
    get empty() {
      return (
        ___R$project$example$rome$example$src$mpty_js$default
      );
    },

    get generateName() {
      return (
        ___R$project$example$rome$example$src$zombie_js$generateName
      );
    },

    get getRandomQuote() {
      return (
        ___R$project$example$rome$example$src$zombie_js$getRandomQuote
      );
    },

    get zombieFactory() {
      return (
        ___R$project$example$rome$example$src$zombie_js$default
      );
    },

    get zombie() {
      return (
        ___R$project$example$rome$example$src$index_js$zombie
      );
    },

    get default() {
      return (
        ___R$project$example$rome$index_js$default
      );
    },
  };
  const ___R$project$example$rome$index_js$default = {empty: ___R$project$example$rome$example$src$mpty_js$default, generateName: ___R$project$example$rome$example$src$zombie_js$generateName, getRandomQuote: ___R$project$example$rome$example$src$zombie_js$getRandomQuote, zombieFactory: ___R$project$example$rome$example$src$zombie_js$default, zombie: ___R$project$example$rome$example$src$index_js$zombie};

  return ___R$project$example$rome$index_js;
})(typeof global !== 'undefined' ? global : typeof window !== 'undefined' ? window : this);
