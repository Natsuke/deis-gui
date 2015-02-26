/* global module, require */

var httpProxy = require('http-proxy');

module.exports = function (grunt){

  'use strict';

  require('time-grunt')(grunt);
  require('jit-grunt')(grunt);

  var appConfig = {
    app: require('./bower.json').appPath || 'app',
    dist: 'dist',
    proxy: {
      host: 'deis.local3.deisapp.com'
    }
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
              connect.static(appConfig.app),

              connect.compress({
                // Pass to connect.compress() the options
                // that you need, just for show the example
                // we use threshold to 1
                threshold: 1
              }),
              connect().use(
                '/api',
                (function () {
                  var proxy = httpProxy.createProxyServer({});

                  proxy.on('error', function (err, req, res) {
                    console.error(err);

                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.write('Error: ' + err.code);
                    res.end();
                  });

                  return function (req, res) {
                    delete req.headers['accept-encoding'];
                    req.headers.host = appConfig.proxy.host;
                    proxy.web(req, res, {
                      target: 'http://' + appConfig.proxy.host
                    });
                  };
                })()
              )
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
