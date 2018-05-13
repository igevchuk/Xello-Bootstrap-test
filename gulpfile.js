var gulp = require("gulp");
var sass = require("gulp-sass");

// Copy third party libraries from /node_modules into /vendor
gulp.task("vendor", function() {
  // Bootstrap
  gulp
    .src([
      "./node_modules/bootstrap/dist/**/*",
      "!./node_modules/bootstrap/dist/css/bootstrap-grid*",
      "!./node_modules/bootstrap/dist/css/bootstrap-reboot*"
    ])
    .pipe(gulp.dest("./vendor/bootstrap"));
});

gulp.task("css", function() {
  return gulp
    .src("src/sass/style.scss")
    .pipe(
      sass({
        style: "compressed",
        loadPath: [
          "src/sass",
        ]
      })
    )
    .pipe(gulp.dest("src/css"));
});

gulp.task("watch", function() {
  gulp.watch("src/sass/*.scss", ["css"]);
});

// Default task
gulp.task("default", ["vendor"]);
