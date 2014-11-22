if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
      return fn.apply(this, arr);
    },

    speak : function(fn, obj) {
      return fn.apply(obj);
    },

    functionFunction : function(str) {
      return function(val) {
        return str + ', ' + val;
      };
    },

    makeClosures : function(arr, fn) {
      var ret = [];

      function func(x) {
        return function square() {
            return fn(x);
        }
      }

      for (var i = 0; i < arr.length; i++) {
        ret.push(func(arr[i]));
      }

      return ret;
    },

    partial : function(fn, str1, str2) {
      return function(str3) {
        return fn(str1, str2, str3);
      }
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
      var func = args.shift();
      func.apply(this, args);
    },

    partialUsingArguments : function(fn) {
      var args = [];
      for (var i = 0; i < arguments.length; i++) {
        args.push(arguments[i]);
      }
      var func = args.shift();

      return function() {
        var moreArgs = [];
        for (var i = 0; i < arguments.length; i++) {
          moreArgs.push(arguments[i]);
        }
        return fn.apply(null, args.concat(moreArgs));
      };
    },

    curryIt : function(fn) {
      function applyArguments(fn, arguments) {
        return fn.apply(null, arguments);
      }

      function getArgumentAccumulator(accumulatedArguments, expectedArgumentsCount) {
        return function (currentArgument) {
          accumulatedArguments.push(currentArgument);

          var allArgumentsProvided = accumulatedArguments.length === expectedArgumentsCount;

          if (allArgumentsProvided) {
            return applyArguments(fn, accumulatedArguments);
          } else {
            return getArgumentAccumulator(accumulatedArguments, expectedArgumentsCount);
          }
        };
      }

      return getArgumentAccumulator([], fn.length);
    }
  };
});
