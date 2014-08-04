// Renames files for browser caching purposes
module.exports = {
  demodist: {
    src: [
      'dist/scripts/{,*/}*.js',
      'dist/styles/{,*/}*.css',
      'dist/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
      'dist/styles/fonts/*'
    ]
  }
};