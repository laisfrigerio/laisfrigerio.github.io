const gulp = require("gulp");
const sass = require("gulp-sass")(require('sass'));
const minify = require('gulp-csso');
const concat = require('gulp-concat');
const pug = require('gulp-pug');

function css() {
  return gulp.src('./resources/styles/app.scss')
    .pipe(sass({utputStyle: 'app', onError: console.error.bind(console, 'Sass error:')}))
    .pipe(minify(concat('app.css')))
    .pipe(gulp.dest('./css'));
}

function views() {
  return gulp.src([
    'resources/templates/index.pug',
    'resources/templates/educacao.pug',
    'resources/templates/projetos.pug',
  ])
  .pipe(pug())
  .pipe(gulp.dest('./'));
}

function watch() {
  gulp.watch('./resources/styles/**/*.scss', css)
  gulp.watch('./resources/templates/**/*.pug', views)
}

exports.css = css;
exports.views = views;
exports.watch = watch
exports.default = gulp.parallel(css, views);
