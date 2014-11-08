if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext : function(fn, obj) {
      return fn.apply(obj);
    },

    alterObjects : function(constructor, greeting) {
      constructor.prototype.greeting = greeting;
    },

    iterate : function(obj) {
      var propNames = Object.getOwnPropertyNames(obj);
      var ret = [];
      for (var i = 0; i < propNames.length; i++) {
        var propName = propNames[i];
        var propValue = obj[propName];
        ret.push(propName + ': ' + propValue);
      }
      return ret;
    }
  };
});
