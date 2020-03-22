(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
}((function () { 'use strict';

  function getBundlerName() {
    return 'Rollup';
  }

  var name = getBundlerName();
  console.log(name);

})));
