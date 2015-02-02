/* global module, require */

module.exports = function (grunt){

  'use strict';

  require('time-grunt')(grunt);
  require('jit-grunt')(grunt);

  var appConfig = {
    app: require('./bower.json').appPath || 'app',
    dist: 'dist'
  };

  grunt.initConfig({

    app: appConfig,

    watch: {
      bower: {
        files: ['bower.json'],
        tasks: ['wiredep']
      },
      js: {
        files: ['<%= app.app %>/scripts/**/*.js'],
        tasks: ['newer:jshint:all'],
        options: {
          livereload: '<%= connect.options.livereload %>'
        }
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= app.app %>/**/*.html'
        ]
      }
    },

    connect: {
      options: {
        port: 9000,
        hostname: 'localhost',
        livereload: 35729
      },
      livereload: {
        options: {
          middleware: function(connect) {
            return [
              connect().use(
                '/bower_components',
                connect.static('./bower_components')
              ),
              connect.static(appConfig.app)
            ];
          }
        }
      }
    },

    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: {
        src: [
          'Gruntfile.js',
          '<%= app.app %>/scripts/**/*.js'
        ]
      },
      clean: {
        server: '.tmp'
      }
    },

    wiredep: {
      app: {
        src: ['<%= app.app %>/index.html'],
        ignorePath: /\.\.\//
      }
    }
  });

  grunt.registerTask('serve', 'Compile and lauch a connect web server', function(){
    grunt.task.run([
      'wiredep',
      'connect:livereload',
      'watch'
    ]);
  });
};
