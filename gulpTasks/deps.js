const gulp = require('gulp')
const uglify = require('gulp-uglify')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

gulp.task('deps', ['deps.js', 'deps.css', 'deps.fonts'])

gulp.task('deps.js', () => {
    return gulp.src([
        'node_modules/angular/angular.min.js',
        'node_modules/angular-ui-router/release/angular-ui-router.min.js',
        'node_modules/angular-ui-mask/dist/mask.min.js',
        'node_modules/angular-sanitize/angular-sanitize.min.js',
        'node_modules/angular-animate/angular-animate.min.js',
        'node_modules/angular-touch/angular-touch.min.js',
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/jquery.easing/jquery.easing.min.js',
        'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
        'node_modules/ui-bootstrap4/dist/ui-bootstrap-tpls.js',
        'node_modules/angular-scroll/angular-scroll.min.js',
        'node_modules/wowjs/dist/wow.min.js',
        'bower_components/ng-parallax/angular-parallax.min.js',
        'node_modules/angularjs-toaster/toaster.min.js'
    ])
    .pipe(uglify())
    .pipe(concat('deps.min.js'))
    .pipe(gulp.dest('public/js'))
})

gulp.task('deps.css', () => {
    return gulp.src([
        // 'node_modules/@fortawesome/fontawesome-free/css/all.css',
        'node_modules/animate.css/animate.min.css',
        'node_modules/bootstrap/dist/css/bootstrap.min.css',
        'node_modules/hamburgers/dist/hamburgers.min.css',
        'node_modules/angularjs-toaster/toaster.min.css'
    ])
    .pipe(uglifycss({ 'uglyComments': true }))
    .pipe(concat('deps.min.css'))
    .pipe(gulp.dest('public/css'))
})

gulp.task('deps.fonts', () => {
    return gulp.src([
        'node_modules/@fortawesome/fontawesome-free/webfonts/*.*'
    ])
    .pipe(gulp.dest('public/fonts'))
})