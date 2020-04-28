module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		jshint: {
		  files: [
		  	'gruntfile.js', 
		  	'js/simpleClock.js' ]
		},

		uglify: {
			options: {
				manage:false,
			},
			my_target: {
				files: 	[ 
					{'js/simpleClock.min.js': ['js/simpleClock.js'] },
				]
			}
		},
		
 		cssmin: {
			target:{ 	
				files: [{	
					expand: true,
					cwd:'css/',	// dir to look in
					src: [ '*.css', '!*.min.css'],	// exclude already minified css files
					dest: 'css/',
					ext: '.min.css'
				}]
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	//grunt.registerTask('default', ['jshint','cssmin','uglify']);
	grunt.registerTask('default', ['jshint','uglify','cssmin']);
};
