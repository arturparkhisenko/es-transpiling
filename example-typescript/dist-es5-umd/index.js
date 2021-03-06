(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./empty", "./zombie", "./zombie", "./zombie", "./zombie"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.zombie = exports.zombieFactory = exports.getRandomQuote = exports.generateName = exports.empty = void 0;
    var empty_1 = require("./empty");
    exports.empty = empty_1.default;
    var zombie_1 = require("./zombie");
    exports.zombieFactory = zombie_1.default;
    var zombie = require("./zombie");
    exports.zombie = zombie;
    var zombie_2 = require("./zombie");
    Object.defineProperty(exports, "getRandomQuote", { enumerable: true, get: function () { return zombie_2.getRandomQuote; } });
    var zombie_3 = require("./zombie");
    Object.defineProperty(exports, "generateName", { enumerable: true, get: function () { return zombie_3.generateName; } });
    exports.default = { empty: empty_1.default, generateName: zombie_3.generateName, getRandomQuote: zombie_2.getRandomQuote, zombieFactory: zombie_1.default, zombie: zombie };
});
