module.exports = function(grunt) {
  var jsFileList = [
    //'js/libs/responsiveslides.min.js',
    'js/libs/respond.min.js'
  ];
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        stripBanners: true,
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
          '<%= grunt.template.today("yyyy-mm-dd") %> */',
      },
      dist: {
        src: [jsFileList],
        dest: 'js/build.js',
      },
    },
    casperjs: {
      options: {
        async: {
          parallel: false
        }
      },
      files: ['js/testing/*.js']
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'js/main.js',
        dest: 'js/main.min.js'
      }
    },
    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'expanded'
        },
        files: {                         // Dictionary of files
          'main.css': 'main.scss',       // 'destination': 'source'
          'widgets.css': 'widgets.scss'
        }
      }
    },
    watch: {
      less: {
        files: [
          'css/*.less',
          'css/**/*.less'
        ],
        tasks: ['less:development']
      },
      livereload: {
        // Browser live reloading
        // https://github.com/gruntjs/grunt-contrib-watch#live-reloading
        options: {
          livereload: false
        },
        files: [
          'css/style.css',
          'js/main.js',
          'templates/*.php',
          '*.php'
        ]
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  //grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-casperjs');

  // Default task(s).
  grunt.registerTask('default', ['concat','uglify']);

};