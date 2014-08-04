// Performs rewrites based on filerev and the useminPrepare configuration
module.exports = {
  html: ['dist/{,*/}*.html'],
  css: ['dist/styles/{,*/}*.css'],
  options: {
    assetsDirs: ['dist','dist/images']
  }
};