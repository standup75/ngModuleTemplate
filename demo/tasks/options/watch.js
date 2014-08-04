// Watches files for changes and runs tasks based on the changed files
module.exports = {
  bower: {
    files: ['bower.json'],
    tasks: ['wiredep']
  },
  coffee: {
    files: ['app/scripts/{,*/}*.{coffee,litcoffee,coffee.md}'],
    tasks: ['newer:coffee:dist']
  },
  compass: {
    files: ['app/styles/{,*/}*.{scss,sass}'],
    tasks: ['compass:server', 'autoprefixer']
  },
  gruntfile: {
    files: ['Gruntfile.js']
  },
  livereload: {
    options: {
      livereload: '<%= connect.options.livereload %>'
    },
    files: [
      '.tmp/styles/{,*/}*.css',
      '.tmp/scripts/{,*/}*.js',
      'demo/{,*/}*.html',
      'demo/styles/{,*/}*.css',
      'demo/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
    ]
  }
};