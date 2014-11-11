if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function(data, dirName) {
      var listOfFiles = [];
      var dirs = [];

      findFiles(data);

      function findFiles(dir) {
        dirs.push(dir.dir);

        for (var i = 0; i < dir.files.length; i++) {
          var file = dir.files[i];
          if (typeof file === 'string') {
            if (!dirName || dirs.indexOf(dirName) > -1) {
              listOfFiles.push(file);
            }
          } else {
            findFiles(file);
          }
        }

        dirs.pop(dir.dir);
      }

      return listOfFiles;
    },

    permute: function(arr) {
      var ret = [];
      var tmp = [];

      function process(arr) {
        for (var i = 0; i < arr.length; i++) {
          var elem = arr.splice(i, 1)[0];
          tmp.push(elem);
          if (arr.length !== 0) {
            process(arr);
          } else {
            ret.push(tmp.slice());
          }
          arr.splice(i, 0, elem);
          tmp.pop();
        }
      }

      process(arr);
      return ret;
    }
  };
});
