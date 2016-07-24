
var config = {
	scripts: "./output/",
	typescripts: "./src/**/*.ts"
};


var gulp = require("gulp"),
  $ = require("gulp-load-plugins")({ lazy: true }),
  del = require("del");


var tsProject = $.typescript.createProject("tsconfig.json", {
	noExternalResolve: true
});

function log(msg) {
	if (typeof (msg) === "object") {
		for (var item in msg) {
			if (msg.hasOwnProperty(item)) {
				$.util.log($.util.colors.blue(msg[item]));
			}
		}
	} else {
		$.util.log($.util.colors.blue(msg));
	}
}

function clean(path, done) {
	log("Cleaning: " + $.util.colors.blue(path));
	del(path).then(function () { //function (resultPaths) {
		log("Files cleaned");
		if (typeof done === "function") {
			done();
		}
	});
}

gulp.task("tslint", function () {
	var sourcePaths = [config.typescripts];

	return gulp.src(sourcePaths)
			.pipe($.tslint({ formatter: "verbose" }))
			.pipe($.tslint.report());
});

gulp.task("clean", function (done) {
	var sourcePaths = [config.typescripts];

	clean(sourcePaths, done);
});

gulp.task("tsc", ["tslint", "clean"], function () {

	var tsResult = tsProject.src()
					.pipe($.sourcemaps.init())
					.pipe($.plumber())
					.pipe($.typescript(tsProject));

	return tsResult.js
			.pipe(gulp.dest(config.scripts))
			.pipe($.uglify())
			.pipe($.rename({
				suffix: ".min"
			}))
			.pipe($.sourcemaps.write("."))
			.pipe(gulp.dest(config.scripts));

});

gulp.task("tsc-watcher", function () {
	gulp.watch([config.typescripts], ["tsc"]);
});
