define([
    './get-bundler-name',
    './empty-unused'
], function(_getBundlerName, _emptyUnused) {
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

