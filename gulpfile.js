var gulp = require('gulp'),
	browserify = require('browserify'),
	source = require('vinyl-source-stream'),
	plumber = require('gulp-plumber'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	sourcemaps = require('gulp-sourcemaps');

var config = {
	scss: {
		src: 'src/scss/*.scss',
		dest: 'dist/css/style.css'
	},
	html: {
		src: 'src/*.html',
		dest: 'dist'
	},
	js: {
		src: 'src/js/*',
		dest: 'dist/js'
	}
};

gulp.task('browserify', function() {
	var bundler = browserify({
		debug: false,
		entries: [
			'./src/js/main.js'
		],
		paths: [
			'./src/js'
		]
	});

	return bundler
		.bundle()
		.pipe(source('main.js'))
		.pipe(gulp.dest('dist/js'));
});

gulp.task('html', function() {
	return gulp.src('src/*.html')
		.pipe(plumber())
		.pipe(gulp.dest('dist'));
});

gulp.task('scss', function() {
		return gulp.src('src/scss/*.scss')
						.pipe(sourcemaps.init())
						.pipe(sass())
						.pipe(autoprefixer({browsers: ['last 2 version']}))
						.pipe(gulp.dest('dist/css/style.css'));
});

gulp.task('watch', ['build'], function(callback) {
	gulp.watch(config.scss.src, ['scss']);
	gulp.watch(config.html.src, ['html']);
	gulp.watch(config.js.src, ['browserify']);
});

gulp.task('build', ['browserify', 'html', 'scss']);
gulp.task('serve', ['browserify', 'html', 'scss']);
