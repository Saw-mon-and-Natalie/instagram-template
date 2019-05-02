const webpackConfig = require('./webpack-config');
 
module.exports = function(grunt) {
  grunt.initConfig({
    webpack: {
      options: {
        stats: !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
      },
      prod: webpackConfig,
      dev: Object.assign({ watch: true }, webpackConfig)
    },
    pug: {
      compile: {
        options: {
          data: {
            debug: false
          }
        },
        files: {
          'dist/index.html': ['src/template.pug']
        }
      }
    },
    copy: {
      main: {
        files: [
          {expand: true, cwd: 'src/', src: 'style.css', dest: 'dist/'},
          {expand: true, cwd: 'src/', src: 'js/*.js', dest: 'dist/'}
        ]
      }
    },
    clean: ['dist']
  });
 
  grunt.loadNpmTasks('grunt-webpack');
  grunt.loadNpmTasks('grunt-contrib-pug');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('build', ['clean', 'pug', 'copy'])
};