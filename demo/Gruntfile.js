// Generated on 2014-08-01 using generator-angular 0.9.5
'use strict';
module.exports = function (grunt) {
  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);
  // Define the configuration for all the tasks
  grunt.initConfig({
    watch: require('./tasks/options/watch.js'),
    connect: require('./tasks/options/connect.js'),
    clean: require('./tasks/options/clean.js'),
    autoprefixer: require('./tasks/options/autoprefixer.js'),
    wiredep: require('./tasks/options/wiredep.js'),
    coffee: require('./tasks/options/coffee.js'),
    compass: require('./tasks/options/compass.js'),
    filerev: require('./tasks/options/filerev.js'),
    useminPrepare: require('./tasks/options/useminPrepare.js'),
    usemin: require('./tasks/options/usemin.js'),
    imagemin: require('./tasks/options/imagemin.js'),
    svgmin: require('./tasks/options/svgmin.js'),
    htmlmin: require('./tasks/options/htmlmin.js'),
    ngmin: require('./tasks/options/ngmin.js'),
    cdnify: require('./tasks/options/cdnify.js'),
    copy: require('./tasks/options/copy.js'),
    concurrent: require('./tasks/options/concurrent.js')
  });
  grunt.registerTask('serve', 'Compile then start a connect web server', function (target) {
    grunt.task.run([
      'clean:server',
      'wiredep',
      'concurrent:server',
      'autoprefixer',
      'connect:livereload',
      'watch'
    ]);
  });
  grunt.registerTask('server', 'DEPRECATED TASK. Use the "serve" task instead', function (target) {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run(['serve:' + target]);
  });
  grunt.registerTask('build', [
    'clean:dist',
    'wiredep',
    'useminPrepare',
    'concurrent:dist',
    'autoprefixer',
    'concat',
    'ngmin',
    'copy:dist',
    'cdnify',
    'cssmin',
    'uglify',
    'filerev',
    'usemin',
    'htmlmin'
  ]);
  grunt.registerTask('default', ['build']);
};