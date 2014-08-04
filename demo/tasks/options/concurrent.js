module.exports = {
  server: [
    'coffee:dist',
    'compass:server'
  ],
  dist: [
    'coffee',
    'compass:dist',
    'imagemin',
    'svgmin'
  ]
};