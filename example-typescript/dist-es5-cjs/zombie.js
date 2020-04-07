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
