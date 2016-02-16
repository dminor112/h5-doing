/**
 * Created by wenlinli on 2016/2/8.
 */
var gulp = require('gulp'),
    less = require('gulp-less'),
    imagemin = require('gulp-imagemin'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    clean = require('gulp-clean'),
    autoprefixer = require('gulp-autoprefixer'),
    notify = require('gulp-notify'),
    plumber = require('gulp-plumber');
//cache = require('gulp-cache'),
//tinypng = require('gulp-tinypng'), //tinypng
//    livereload = require('gulp-livereload'); //livereload
var src = 'src/';
var dist = 'dist//';
var paths = {
    html: src + '*.html',
    js: src + 'js/*.js',
    less: src +'less/*.less',
    css: [dist + 'css/*.css', '!' + dist + 'css/*min.css'],
    img: src + 'img/*'
};

gulp.task('cleanHtml', function() {
    return gulp.src(dist + 'html')
        .pipe(clean());
});

gulp.task('html', ['cleanHtml'], function() {
    return gulp.src(paths.html)
        .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
        //.pipe(livereload())
        .pipe(gulp.dest(dist))
    //.pipe(livereload());
});

gulp.task('cleanCss', function() {
    return gulp.src(dist + 'css')
        .pipe(clean());
});

gulp.task('less', ['cleanCss'], function() {
    return gulp.src(paths.less)
        .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
        .pipe(less())
        .pipe(gulp.dest(dist + 'css'));
    //.pipe(livereload());
});

gulp.task('cssprefixer', ['less'], function() {
    return gulp.src(paths.css)
        .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
        .pipe(autoprefixer({
            browsers: ['last 4 versions'],
            cascade: false
        }))
        .pipe(gulp.dest(dist + 'css'))
    //.pipe(livereload());
});

gulp.task('css', ['less', 'cssprefixer'], function() {
    gulp.src(paths.css)
        .pipe(minifycss())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest(dist + 'css'));
});

gulp.task('cleanImg', function() {
    return gulp.src(dist + 'img')
        .pipe(clean());
});

gulp.task('img', ['cleanImg'], function() {
    return gulp.src(paths.img)
        .pipe(imagemin())
        .pipe(gulp.dest(dist + 'img'));
    //.pipe(livereload());
});

gulp.task('cleanJs', function() {
    return gulp.src('dist/js')
        .pipe(clean());
});

gulp.task('js', ['cleanJs'], function() {
    return gulp.src(paths.js)
        .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
        .pipe(jshint({'expr':true}))
        .pipe(jshint.reporter('default'))
        .pipe(gulp.dest(dist + 'js'))
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest(dist + 'js'))
    //.pipe(livereload());
});


gulp.task('clean', function() {
    return gulp.src([dist + 'css', dist + 'js', dist + 'img'])
        .pipe(clean());
});

gulp.task('default', ['clean'], function() {
    gulp.start('img', 'html', 'css', 'js');
});

gulp.task('watch', function() {
    //livereload.listen();

    //����html
    gulp.watch(paths.html, function(event) {
        gulp.run('html');
    });

    //����css
    gulp.watch(paths.less, function(event) {
        gulp.run('css');
    });

    //����js
    gulp.watch(paths.js, function(event) {
        gulp.run('js');
    });

    //����ͼƬ
    var imgWatcher = gulp.watch(paths.img, function(event) {
        gulp.run('img');
    });

    //����ͼƬɾ��
    imgWatcher.on('change', function(event) {
        if (event.type == 'deleted') {
            gulp.run('img');
        }
    });
});
