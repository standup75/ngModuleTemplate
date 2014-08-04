// Automatically inject Bower components into the app
module.exports = {
  options: {
    cwd: 'app'
  },
  app: {
    src: ['app/index.html'],
    ignorePath:  /\.\.\//
  },
  sass: {
    src: ['app/styles/{,*/}*.{scss,sass}'],
    ignorePath: /(\.\.\/){1,2}bower_components\//
  }
};