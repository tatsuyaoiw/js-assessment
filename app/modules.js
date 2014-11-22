if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    createModule : function(str1, str2) {
      var greeting = str1 || 'hello';
      var name = str2 || 'matt';

      return {
        greeting: greeting,
        name: name,
        sayIt: function() {
          return this.greeting + ', ' + this.name;
        }
      };
    }
  };
});

