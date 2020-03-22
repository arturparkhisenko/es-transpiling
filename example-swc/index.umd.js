(function(global, factory) {
    if (typeof define === 'function' && define.amd) {
        define([
            './get-bundler-name',
            './empty-unused'
        ], factory);
    } else if (typeof exports !== 'undefined') {
        factory(require('./get-bundler-name'), require('./empty-unused'));
    } else {
        var mod = {
            exports: {
            }
        };
        factory(global.getBundlerName, global.emptyUnused);
        global.index = mod.exports;
    }
})(this, function(_getBundlerName, _emptyUnused) {
    'use strict';
    _getBundlerName = _interopRequireDefault(_getBundlerName);
    _emptyUnused = _interopRequireDefault(_emptyUnused);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }
    var name = _getBundlerName.default();
    console.log(name);
});

