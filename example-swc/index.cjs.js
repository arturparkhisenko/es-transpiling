'use strict';
var _getBundlerName = _interopRequireDefault(require('./get-bundler-name'));
var _emptyUnused = _interopRequireDefault(require('./empty-unused'));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var name = _getBundlerName.default();
console.log(name);

