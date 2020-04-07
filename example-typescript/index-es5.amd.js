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
    exports.empty = empty_1.default;
    exports.zombieFactory = zombie_1.default;
    exports.zombie = zombie;
    exports.getRandomQuote = zombie_2.getRandomQuote;
    exports.generateName = zombie_3.generateName;
    exports.default = { empty: empty_1.default, generateName: zombie_3.generateName, getRandomQuote: zombie_2.getRandomQuote, zombieFactory: zombie_1.default, zombie: zombie };
});
