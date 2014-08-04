// Empties folders to start fresh
module.exports = {
  dist: {
    files: [{
      dot: true,
      src: [
        'demo/app/scripts/ngModuleTemplate.js',
        'ngModuleTemplate.js',
        'demo/app/styles/ngModuleTemplate.css',
        'ngModuleTemplate.css'
      ]
    }]
  }
};