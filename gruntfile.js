module.exports = function(grunt) {

  grunt.initConfig({
   
    nggettext_extract: {
    pot: {
      files: {
        'po/template.pot': ['index.html']
      }
    },
  },
   nggettext_compile: {
            all: {
                files: {
                    'translations/translations.js': ['po/*.po']
                }
           },
        },

  });

  //load gettext(translation)
    grunt.loadNpmTasks('grunt-angular-gettext');

  //transalation text extract task
    grunt.registerTask('extract', ['nggettext_extract']);

    //translation compile task
    grunt.registerTask('compile', ['nggettext_compile']);

};
  