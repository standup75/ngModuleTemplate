// Compiles Sass to CSS and generates necessary files if requested
module.exports = {
  options: {
    javascriptsDir: 'scripts',
    fontsDir: 'styles/fonts',
    importPath: './bower_components',
    httpImagesPath: '/images',
    httpGeneratedImagesPath: '/images/generated',
    httpFontsPath: '/styles/fonts',
    relativeAssets: false,
    assetCacheBuster: false,
    raw: 'Sass::Script::Number.precision = 10\n',
    cssDir: '',
    sassDir: 'styles',
    imagesDir: 'images',
  },
  dist: {
    options: {
      generatedImagesDir: 'images/generated'
    }
  }
};