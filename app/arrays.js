if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
      /*
      if (Array.prototype.indexOf) { return arr.indexOf(item); }
      */

      for (var i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
          return i;
        }
      }

      return -1;
    },

    sum : function(arr) {
      var sum = 0;
      for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
      }
      return sum;
    },

    remove : function(arr, item) {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
          arr.splice(i, 1);
          i--;
        }
      }
      return arr;
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
      // arr.splice(-1);
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
      var occurences = 0;
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
            occurences++;
        }
      }
      return occurences;
    },

    duplicates : function(arr) {
      var duplicates = [];
      var tmp = {};
      for (var i = 0; i < arr.length; i++) {
        var elem = arr[i];
        if (!tmp[elem]) {
          tmp[elem] = 0;
        }
        tmp[elem]++;
      }
      for (var key in tmp) {
        if (tmp[key] > 1) {
          duplicates.push(key);
        }
      }
      return duplicates;
    },

    square : function(arr) {
      for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * arr[i];
      }
      return arr;
    },

    findAllOccurrences : function(arr, target) {
      var occurrences = [];
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
          occurrences.push(i);
        }
      }
      return occurrences;
    }
  };
});
