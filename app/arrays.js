if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
          return i;
        }
      }
      return -1;
    },

    sum : function(arr) {
      var ret = 0;
      for (var i = 0; i < arr.length; i++) {
        ret += arr[i];
      }
      return ret;
    },

    remove : function(arr, item) {
      var ret = [];
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] !== item) {
          ret.push(arr[i]);
        }
      }
      return ret;
    },

    removeWithoutCopy : function(arr, item) {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
          arr.splice(i, 1);
          i--;
        }
      }
      return arr;
    },

    append : function(arr, item) {
      arr.push(item);
      return arr;
    },

    truncate : function(arr) {
      arr.pop();
      return arr;
    },

    prepend : function(arr, item) {
      arr.unshift(item);
      return arr;
    },

    curtail : function(arr) {
      arr.splice(0, 1);
      return arr;
    },

    concat : function(arr1, arr2) {
      return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
      arr.splice(index, 0, item);
      return arr;
    },

    count : function(arr, item) {
      var count = 0;
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
          count++;
        }
      }
      return count;
    },

    duplicates : function(arr) {
      var ret = [];
      var tmp = {};

      for (var i = 0; i < arr.length; i++) {
        var item = arr[i];
        if (!tmp[item]) {
          tmp[item] = 0;
        }
        tmp[item]++;
      }

      for (var item in tmp) {
        if (tmp[item] > 1) {
          ret.push(item);
        }
      }

      return ret;
    },

    square : function(arr) {
      var ret = [];
      for (var i = 0; i < arr.length; i++) {
        ret.push(arr[i] * arr[i]);
      }
      return ret;
    },

    findAllOccurrences : function(arr, target) {
      var ret = [];
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
          ret.push(i);
        }
      }
      return ret;
    }
  };
});
