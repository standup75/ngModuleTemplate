module.exports = {
  demodist: {
    files: [{
      expand: true,
      cwd: 'app/images',
      src: '{,*/}*.svg',
      dest: 'dist/images'
    }]
  }
};