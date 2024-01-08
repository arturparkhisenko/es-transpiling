(function(res) {
	if (typeof module !== "undefined") {
		module.exports = res;
	}
	return res;
})(
(function(global) {
  'use strict';
  // example-rome/src/empty.js
function ___R$example$rome$src$empty_js$default() {}


  // example-rome/src/unused.js
function ___R$example$rome$src$unused_js$default() {
		return Math.random();
	}


  // example-rome/src/zombie.js
const ___R$example$rome$src$zombie_js = {
		getRandomQuote: ___R$example$rome$src$zombie_js$getRandomQuote,
		generateName: ___R$example$rome$src$zombie_js$generateName,
		default: ___R$example$rome$src$zombie_js$default,
	};
	function ___R$example$rome$src$zombie_js$getRandomQuote() {
		return Math.random() < 0.5 === true ? "No guts, no gory." : "Me eat brains!";
	}

	function ___R$example$rome$src$zombie_js$generateName(name = "zGhoul") {
		return "z" + name;
	}

	function ___R$example$rome$src$zombie_js$default() {
		return {
			name: ___R$example$rome$src$zombie_js$generateName(),
			damage: 42,
			say: ___R$example$rome$src$zombie_js$getRandomQuote,
		};
	}


  // example-rome/src/index.js
const ___R$example$rome$src$index_js$zombie = ___R$example$rome$src$zombie_js;
	const ___R$example$rome$src$index_js$default = {
		empty: ___R$example$rome$src$empty_js$default,
		generateName: ___R$example$rome$src$zombie_js$generateName,
		getRandomQuote: ___R$example$rome$src$zombie_js$getRandomQuote,
		zombieFactory: ___R$example$rome$src$zombie_js$default,
		zombie: ___R$example$rome$src$zombie_js,
	};


  // example-rome/index.js
const ___R$example$rome$index_js = {
		get empty() {
			return ___R$example$rome$src$empty_js$default;
		},
		get generateName() {
			return ___R$example$rome$src$zombie_js$generateName;
		},
		get getRandomQuote() {
			return ___R$example$rome$src$zombie_js$getRandomQuote;
		},
		get zombieFactory() {
			return ___R$example$rome$src$zombie_js$default;
		},
		get zombie() {
			return ___R$example$rome$src$index_js$zombie;
		},
		get default() {
			return ___R$example$rome$index_js$default;
		},
	};
	const ___R$example$rome$index_js$default = {
		empty: ___R$example$rome$src$empty_js$default,
		generateName: ___R$example$rome$src$zombie_js$generateName,
		getRandomQuote: ___R$example$rome$src$zombie_js$getRandomQuote,
		zombieFactory: ___R$example$rome$src$zombie_js$default,
		zombie: ___R$example$rome$src$index_js$zombie,
	};


  return ___R$example$rome$index_js;
})(typeof global !== 'undefined' ? global : typeof window !== 'undefined' ? window : this));
//# sourceMappingURL=index.js.map