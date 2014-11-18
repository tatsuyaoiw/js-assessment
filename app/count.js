if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    count : function (start, end) {
      var timeoutId;

      function process() {
        console.log(start);
        start++;

        if (start <= end) {
          timeoutId = setTimeout(process, 100);
        }
      }

      process();

      var counter = {
        cancel: function() {
          timeoutId && clearTimeout(timeoutId);
        }
      };

      return counter;
    }
  };
});