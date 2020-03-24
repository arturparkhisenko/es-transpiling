define([
    'exports',
    './empty',
    './unused',
    './zombie'
], function(_exports, _empty, _unused, zombie) {
    'use strict';
    _empty = _interopRequireDefault(_empty);
    _unused = _interopRequireDefault(_unused);
    zombie = _interopRequireWildcard(zombie);
    Object.defineProperty(_exports, '__esModule', {
        value: true
    });
    Object.defineProperty(_exports, 'empty', {
        enumerable: true,
        get: function() {
            return _empty.default;
        }
    });
    Object.defineProperty(_exports, 'generateName', {
        enumerable: true,
        get: function() {
            return zombie.generateName;
        }
    });
    Object.defineProperty(_exports, 'getRandomQuote', {
        enumerable: true,
        get: function() {
            return zombie.getRandomQuote;
        }
    });
    Object.defineProperty(_exports, 'zombieFactory', {
        enumerable: true,
        get: function() {
            return zombie.default;
        }
    });
    _exports.zombie = _exports.default = void 0;
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
    _exports.zombie = zombie;
    var _default = {
        empty: _empty.default,
        generateName: zombie.generateName,
        getRandomQuote: zombie.getRandomQuote,
        zombieFactory: zombie.default,
        zombie: zombie
    };
    _exports.default = _default;
});

