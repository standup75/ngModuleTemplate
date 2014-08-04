// Compiles CoffeeScript to JavaScript
module.exports = {
  options: {
    sourceMap: false,
    sourceRoot: ''
  },
  dist: {
    files: [{
      expand: true,
      cwd: 'app',
      src: 'scripts/{,*/}*.coffee',
      dest: '.tmp',
      ext: '.js'
    }]
  }
};