if (typeof define !== 'function') { var define = require('amdefine')(module); }

/**
 * This file defines an object with some methods. Some of these methods are
 * populated incorrectly; your job is to fix them. Other methods are not
 * populated at all; your job is to fill them out.
 */
define(function() {
  return {
    globals : function() {
      var myObject = {
        name : 'Jory'
      };

      return myObject;
    },

    functions : function(flag) {
      if (flag) {
        return 'a';
      }
      return 'b';
    },

    parseInt : function(num) {
      // If the input string begins with "0x" or "0X",
      // radix is 16 (hexadecimal) and the remainder
      // of the string is parsed.
      return parseInt(num, 10);
    },

    identity : function(val1, val2) {
      return val1 === val2;
    }
  };
});
