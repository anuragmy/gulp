const uglify = require("gulp-uglify");
const gulp = require("gulp");
const babel = require("gulp-babel");
const scriptspath = "public/scripts/**/*.js";
const livereload = require('gulp-livereload');
const concat = require('gulp-concat');

gulp.task('styles', function() {
  console.log('styles added');
  //specifying the order
  return gulp.src(['public/css/relaod.css','public/css/**/*.css'])
  .pipe(concat('styles.css'))
  .pipe(gulp.dest('public/dist'))
  .pipe(livereload());

});

gulp.task("scripts", function() {
  console.log("scripts are strated");
  return gulp
    .src(scriptspath, { base: "public/" })
    .pipe(uglify())
    .pipe(gulp.dest("public/dist"))
    .pipe(livereload());
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
  livereload.listen();
  gulp.watch(scriptspath, ["scripts"]);
});
