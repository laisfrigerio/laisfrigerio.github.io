const gulp = require("gulp");
const babel = require("gulp-babel");
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

function js() {
  return gulp.src('resources/scripts/app.js')
  .pipe(babel({
    presets: ['@babel/env']
  }))
  .pipe(gulp.dest('./js'));
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
  gulp.watch('./resources/scripts/**/*.js', js)
  gulp.watch('./resources/templates/**/*.pug', views)
}

exports.css = css;
exports.js = js;
exports.views = views;
exports.watch = watch
exports.default = gulp.parallel(css, js, views);
