import gulp from 'gulp';
import browserify from 'browserify';
import source from 'vinyl-source-stream';
import gulpLoadPlugins from 'gulp-load-plugins';
import {exec} from 'child_process';
import {task} from 'gulp-shell';

const $ = gulpLoadPlugins();

const config = {
	scss: {
		src: 'src/scss/*.scss',
		dest: 'dist/css/style.css'
	},
	html: {
		src: 'src/*.html',
		dest: 'dist'
	},
	js: {
		src: ['src/js/*', 'src/js/**/*'],
		dest: 'dist/js'
	}
};

gulp.task('browserify', () => {
	let bundler = browserify({
		debug: false,
		entries: ['./src/js/main.js'],
		paths: ['./src/js']
	});

	return bundler
		.bundle()
		.pipe(source('main.js'))
		.pipe(gulp.dest('dist/js'));
});


gulp.task('html', () => {
	return gulp.src('src/*.html')
		.pipe($.plumber())
		.pipe(gulp.dest('dist'));
});

gulp.task('scss', () => {
	return gulp.src('src/scss/*.scss')
		.pipe($.sourcemaps.init())
		.pipe($.sass())
		.pipe($.autoprefixer({browsers: ['last 2 version']}))
		.pipe(gulp.dest('dist/css'));
});

gulp.task('watch', ['build'], (callback) => {
	gulp.watch(config.scss.src, ['scss']);
	gulp.watch(config.html.src, ['html']);
	gulp.watch(config.js.src, ['browserify']);
});

gulp.task('build', ['browserify', 'html', 'scss']);
gulp.task('serve', ['browserify', 'html', 'scss']);
