// Compiles Sass to CSS and generates necessary files if requested
module.exports = {
  options: {
    javascriptsDir: 'app/scripts',
    fontsDir: 'app/styles/fonts',
    importPath: './bower_components',
    httpImagesPath: '/images',
    httpGeneratedImagesPath: '/images/generated',
    httpFontsPath: '/styles/fonts',
    relativeAssets: false,
    assetCacheBuster: false,
    raw: 'Sass::Script::Number.precision = 10\n',
    cssDir: '.tmp/styles',
    sassDir: 'app/styles',
    imagesDir: 'app/images',
  },
  dist: {
    options: {
      generatedImagesDir: 'dist/images/generated'
    }
  },
  server: {
    options: {
      debugInfo: true,
      generatedImagesDir: '.tmp/images/generated'
    }
  }
};