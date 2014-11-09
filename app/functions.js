if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
      return fn.apply(this, arr);
    },

    speak : function(fn, obj) {
      return fn.apply(obj);
    },

    functionFunction : function(str1) {
      return function(str2) {
        return str1 + ', ' + str2;
      }
    },

    makeClosures : function(arr, fn) {
      var ret = [];
      var makeFn = function(val) {
        return function() {
          return fn(val);
        };
      };
      for (var i = 0; i < arr.length; i++) {
        ret.push(makeFn(arr[i]));
      }
      return ret;
    },

    partial : function(fn, str1, str2) {
      return function(str3) {
        return fn(str1, str2, str3);
      };
    },

    useArguments : function() {
      var ret = 0;
      for (var i = 0; i < arguments.length; i++) {
        ret += arguments[i];
      }
      return ret;
    },

    callIt : function(fn) {
      var args = [];
      for (var i = 0; i < arguments.length; i++) {
        args.push(arguments[i]);
      }
      args.shift();
      fn.apply(this, args);
    },

    partialUsingArguments : function(fn) {
      var args = [];
      for (var i = 0; i < arguments.length; i++) {
        args.push(arguments[i]);
      }
      args.shift();
      return function () {
        for (var i = 0; i < arguments.length; i++) {
          args.push(arguments[i]);
        }
        return fn.apply(this, args);
      }
    },

    curryIt : function(fn) {
      return function(x) {
        return function(y) {
          return function(z) {
            return fn(x, y, z);
          };
        };
      };
    }
  };
});
