// Generated on 2014-08-01 using generator-angular 0.9.5
'use strict';
module.exports = function (grunt) {
  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);
  // Define the configuration for all the tasks
  grunt.initConfig({
    clean: require('./tasks/options/clean.js'),
    coffee: require('./tasks/options/coffee.js'),
    compass: require('./tasks/options/compass.js'),
    copy: require('./tasks/options/copy.js')
  });
  grunt.registerTask('build', [
    'clean',
    'coffee',
    'compass',
    'copy'
  ]);
  grunt.registerTask('default', ['build']);
};