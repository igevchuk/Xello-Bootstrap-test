var gulp = require("gulp");
var sass = require("gulp-sass");

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

