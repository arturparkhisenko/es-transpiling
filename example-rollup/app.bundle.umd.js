(function(global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (factory());
}(this, (function() {
  'use strict';

  function appModule() {
    console.log('%c Module: Hello World!', 'background-color: #9FCA56; color: #000');
  }

  'use strict';

  console.info('%c rollup ', 'background: #333; color: #DCCD69');

  appModule();

})));
