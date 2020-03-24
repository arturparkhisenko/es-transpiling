'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
Object.defineProperty(exports, 'empty', {
    enumerable: true,
    get: function() {
        return _empty.default;
    }
});
Object.defineProperty(exports, 'generateName', {
    enumerable: true,
    get: function() {
        return zombie.generateName;
    }
});
Object.defineProperty(exports, 'getRandomQuote', {
    enumerable: true,
    get: function() {
        return zombie.getRandomQuote;
    }
});
Object.defineProperty(exports, 'zombieFactory', {
    enumerable: true,
    get: function() {
        return zombie.default;
    }
});
exports.zombie = exports.default = void 0;
var _empty = _interopRequireDefault(require('./empty'));
var _unused = _interopRequireDefault(require('./unused'));
var zombie = _interopRequireWildcard(require('./zombie'));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
        return obj;
    } else {
        var newObj = {
        };
        if (obj != null) {
            for(var key in obj){
                if (Object.prototype.hasOwnProperty.call(obj, key)) {
                    var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {
                    };
                    if (desc.get || desc.set) {
                        Object.defineProperty(newObj, key, desc);
                    } else {
                        newObj[key] = obj[key];
                    }
                }
            }
        }
        newObj.default = obj;
        return newObj;
    }
}
exports.zombie = zombie;
var _default = {
    empty: _empty.default,
    generateName: zombie.generateName,
    getRandomQuote: zombie.getRandomQuote,
    zombieFactory: zombie.default,
    zombie: zombie
};
exports.default = _default;

