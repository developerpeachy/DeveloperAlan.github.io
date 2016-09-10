module.exports = function(grunt) {

    grunt.initConfig({
        connect: {
            server: {
                options: {
                    port: 9001,
                    base: './dist/',
                    keepalive: "true"
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
};
