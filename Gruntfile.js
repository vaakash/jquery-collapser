module.exports = function(grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        uglify: {
            options: {
                banner: '/*jQuery collapser v<%= pkg.version %> - (c) 2020 <%= pkg.author %>*/'
            },
            my_target: {
                files: {
                    'dist/jquery.collapser.min.js': ['src/jquery.collapser.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['uglify']);

};