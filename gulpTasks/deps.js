const gulp = require('gulp')
const uglify = require('gulp-uglify')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

gulp.task('deps', ['deps.js', 'deps.css', 'deps.fonts'])

gulp.task('deps.js', () => {
    return gulp.src([
        'bower_components/angular/angular.min.js',
        'bower_components/angular-ui-router/release/angular-ui-router.min.js',
        'bower_components/angular-sanitize/angular-sanitize.min.js',
        'bower_components/angular-animate/angular-animate.min.js',
        'bower_components/angular-touch/angular-touch.min.js',
        'bower_components/jquery/dist/jquery.min.js',
        'bower_components/jquery.easing/js/jquery.easing.min.js',
        'bower_components/bootstrap/dist/js/bootstrap.bundle.min.js',
        'node_modules/ui-bootstrap4/dist/ui-bootstrap-tpls.js',
        'bower_components/angular-scroll/angular-scroll.min.js',
        'bower_components/angular-lazy-img/release/angular-lazy-img.min.js',
        'bower_components/wow/dist/wow.min.js',
        'bower_components/angularUtils-disqus/dirDisqus.js',
        'bower_components/ng-parallax/angular-parallax.min.js'
    ])
    .pipe(uglify())
    .pipe(concat('deps.min.js'))
    .pipe(gulp.dest('public/js'))
})

gulp.task('deps.css', () => {
    return gulp.src([
        'bower_components/animate.css/animate.min.css',
        'bower_components/font-awesome/css/all.min.css',
        'bower_components/bootstrap/dist/css/bootstrap.min.css',
        'bower_components/css-hamburgers/dist/hamburgers.min.css'
    ])
    .pipe(uglifycss({ 'uglyComments': true }))
    .pipe(concat('deps.min.css'))
    .pipe(gulp.dest('public/css'))
})

gulp.task('deps.fonts', () => {
    return gulp.src([
        'bower_components/font-awesome/webfonts/*.*'
    ])
    .pipe(gulp.dest('public/fonts'))
})