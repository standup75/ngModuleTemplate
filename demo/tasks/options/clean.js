// Empties folders to start fresh
module.exports = {
  dist: {
    files: [{
      dot: true,
      src: [
        '.tmp',
        'dist/{,*/}*',
        '!dist/.git*'
      ]
    }]
  },
  server: '.tmp'
};