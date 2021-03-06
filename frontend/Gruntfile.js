module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-ng-annotate'); 


grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),
	//------- CSS Minify -------//
	cssmin: {
		combine: {
		  files: {
		    '../erehwon/static/styles/styles.css': ['css/styles.css']
		  }
		}
	},
	//------- SASS -------//
	sass: {
		dist: {
			files: {
				'css/styles.css': 'styles/styles.scss'
			}
		}
	},
	//------- Watch SASS -> CSS -------//
	watch: {
		sass: {
		  files: 'styles/**/*.scss',
		  tasks: ['sass']
		}
	},
	jspaths: {
        src: {
               js: ['app/**.js']
            },
            dest: {
                jsMin: '../erehwon/static/scripts/erehwon.min.js'
            }
    },
    uglify: {
        options: {
            compress: true,
            mangle: true,
            sourceMap: true
        },
        target: {
            src: 'app/min-safe-app.js',
            dest: '<%= jspaths.dest.jsMin %>'
        }
    },
    copy: {
	  img: {
	  	files: [
	    // includes files within path
	    {expand: true, src: ['img/*'], dest: '../erehwon/static/', filter: 'isFile'},
	    ],
	  },
	},
	ngAnnotate: {
	    options: {
	        singleQuotes: true
	    },
	    app: {
	        files: {
	        	'app/min-safe-app.js':['app/app.js'],
	       	}
	    }
	},
});


	grunt.registerTask('default', ['ngAnnotate', 'sass', 'cssmin', 'uglify', 'copy:img']);
}