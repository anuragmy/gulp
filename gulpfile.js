const uglify = require("gulp-uglify");
const gulp = require("gulp");
const babel = require("gulp-babel");
const scriptspath = "public/scripts/**/*.js";

gulp.task("scripts", function() {
  console.log("scripts are strated");
  return gulp
    .src(scriptspath, { base: "public/" })
    .pipe(uglify())
    .pipe(gulp.dest("public/dist"));
  // .pipe(
  //   babel({
  //     presets: ["es2015"]
  //   })
  // )
  //   return gulp
  //     .src("public/scripts/*.js")
  //     .pipe(
  //       babel({
  //         presets: ["es2015"]
  //       })
  //     )
  //     .pipe(uglify())
  //     .pipe(gulp.dest("public/dist"));
});

gulp.task("watch", function() {
  console.log("watch task running");
  require("./server");
  gulp.watch(scriptspath, ["scripts"]);
});
