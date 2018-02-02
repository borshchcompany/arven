/* eslint-disable import/no-extraneous-dependencies */
import gulp from "gulp";
import browserSync from "browser-sync";
import autoprefixer from "autoprefixer";
import plumber from "gulp-plumber";
import gulpLoadPlugins from "gulp-load-plugins";

const $ = gulpLoadPlugins();
const reload = browserSync.reload;

const paths = {
	gulpFile: "gulpfile.babel.js"
};

const BROWSERS = [
	"Explorer >= 9",
	"Edge >= 12",
	"ie_mob >= 10",
	"Firefox >= 30",
	"Chrome >= 35",
	"Safari >= 7",
	"Opera >= 23",
	"iOS >= 7",
	"Android 2.3",
	"Android >= 4",
	"bb >= 10"
];

// Lint JavaScript
gulp.task("lint", () =>
	gulp
		.src([paths.gulpFile])
		.pipe($.eslint())
		.pipe($.eslint.format())
		.pipe($.if(!browserSync.active, $.eslint.failAfterError()))
);

// Copy font-awesome files
gulp.task("font-awesome", () =>
	gulp
		.src(["node_modules/font-awesome/fonts/*"])
		.pipe(gulp.dest("media/fonts"))
		.pipe($.size({ title: "font-awesome" }))
);

// Compile and automatically prefix stylesheets
gulp.task("styles", () =>
	// For best performance, don't add Less partials to `gulp.src`
	gulp
		.src([
			"media/less/cs.less",
			"media/less/ps.less",
			"media/less/cs/ckeditor.less",
			"media/less/swimcloud/swimcloud.less"
		])
		.pipe(
			plumber({
				errorHandler: function(error) {
					console.log(error.message);
					this.emit("end");
				}
			})
		)
		.pipe($.less())
		.pipe($.postcss([autoprefixer({ browsers: BROWSERS })]))
		// Minify Styles
		.pipe($.if("*.css", $.csso()))
		.pipe(gulp.dest("media/css"))
		.pipe($.size({ title: "styles" }))
);

// Watch files for changes & reload
gulp.task("serve", ["styles"], () => {
	browserSync({
		notify: false,
		proxy: "dev.collegeswimming.com"
	});

	gulp.watch(["templates/**/*.html"], reload);
	gulp.watch(["media/less/**/*.{less,css}"], ["styles", reload]);
	gulp.watch(["media/js/**/*.js"], reload);
});

// Default
// will be run if you simply call `gulp` from the terminal
gulp.task("default", ["font-awesome", "styles", "lint"]);
