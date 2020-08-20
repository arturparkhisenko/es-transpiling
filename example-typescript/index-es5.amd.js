define("empty", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function empty() { }
    exports.default = empty;
});
define("unused", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function unused() {
        return Math.random();
    }
    exports.default = unused;
});
define("zombie", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.generateName = exports.getRandomQuote = void 0;
    function getRandomQuote() {
        return Math.random() < 0.5 === true ? 'No guts, no gory.' : 'Me eat brains!';
    }
    exports.getRandomQuote = getRandomQuote;
    function generateName(name) {
        if (name === void 0) { name = 'Ghoul'; }
        return 'z' + name;
    }
    exports.generateName = generateName;
    function zombieFactory() {
        return {
            name: generateName(),
            damage: 42,
            say: getRandomQuote
        };
    }
    exports.default = zombieFactory;
});
define("index", ["require", "exports", "empty", "zombie", "zombie", "zombie", "zombie"], function (require, exports, empty_1, zombie_1, zombie, zombie_2, zombie_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.zombie = exports.zombieFactory = exports.getRandomQuote = exports.generateName = exports.empty = void 0;
    exports.empty = empty_1.default;
    exports.zombieFactory = zombie_1.default;
    exports.zombie = zombie;
    Object.defineProperty(exports, "getRandomQuote", { enumerable: true, get: function () { return zombie_2.getRandomQuote; } });
    Object.defineProperty(exports, "generateName", { enumerable: true, get: function () { return zombie_3.generateName; } });
    exports.default = { empty: empty_1.default, generateName: zombie_3.generateName, getRandomQuote: zombie_2.getRandomQuote, zombieFactory: zombie_1.default, zombie: zombie };
});
