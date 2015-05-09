/*global -$ */
'use strict';
// generated on 2015-05-07 using generator-gulp-webapp 0.3.0
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
var sourcemaps = require('gulp-sourcemaps');
var postcss = require('gulp-postcss');
var sass = require('gulp-ruby-sass'),
  streamqueue = require('streamqueue');

var reload = browserSync.reload;

gulp.task('styles', function () {

  return gulp.src('app/styles/main.css')
    .pipe(sourcemaps.init())
    .pipe(postcss([
      require('autoprefixer-core')({browsers: ['last 1 version']})
    ]))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('.tmp/styles'))
    .pipe(reload({stream: true}));
});

gulp.task('jshint', function () {
  return gulp.src('app/scripts/**/*.js')
    .pipe(reload({stream: true, once: true}))
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish'))
    .pipe($.if(!browserSync.active, $.jshint.reporter('fail')));
});

gulp.task('html', ['styles'], function () {
  var assets = $.useref.assets({searchPath: ['.tmp', 'app', '.']});

  return gulp.src('app/*.html')
    .pipe(assets)
    .pipe($.if('*.js', $.uglify()))
    .pipe($.if('*.css', $.csso()))
    .pipe(assets.restore())
    .pipe($.useref())
    .pipe($.if('*.html', $.minifyHtml({conditionals: true, loose: true})))
    .pipe(gulp.dest('dist'));
});

gulp.task('images', function () {
  return gulp.src('app/images/**/*')
    .pipe($.cache($.imagemin({
      progressive: true,
      interlaced: true,
      // don't remove IDs from SVGs, they are often used
      // as hooks for embedding and styling
      svgoPlugins: [{cleanupIDs: false}]
    })))
    .pipe(gulp.dest('dist/images'));
});

gulp.task('fonts', function () {
  return gulp.src(require('main-bower-files')({
    filter: '**/*.{eot,svg,ttf,woff,woff2}'
  }).concat('app/fonts/**/*'))
    .pipe(gulp.dest('.tmp/fonts'))
    .pipe(gulp.dest('dist/fonts'));
});

gulp.task('extras', function () {
  return gulp.src([
    'app/*.*',
    '!app/*.html'
  ], {
    dot: true
  }).pipe(gulp.dest('dist'));
});

gulp.task('clean', require('del').bind(null, ['.tmp', 'dist']));

gulp.task('serve', ['styles', 'fonts'], function () {
  browserSync({
    notify: false,
    port: 9000,
    server: {
      baseDir: ['.tmp', 'app'],
      routes: {
        '/bower_components': 'bower_components'
      }
    }
  });

  // watch for changes
  gulp.watch([
    'app/*.html',
    'app/scripts/**/*.js',
    'app/images/**/*',
    '.tmp/fonts/**/*'
  ]).on('change', reload);

  gulp.watch('app/styles/**/*.css', ['styles']);
  gulp.watch('scss/**/*.scss', ['sass']);
  gulp.watch('app/fonts/**/*', ['fonts']);
  gulp.watch('bower.json', ['wiredep', 'fonts']);
});

// inject bower components
gulp.task('wiredep', function () {
  var wiredep = require('wiredep').stream;

  gulp.src('app/*.html')
    .pipe(wiredep({
      ignorePath: /^(\.\.\/)*\.\./
    }))
    .pipe(gulp.dest('app'));
});

gulp.task('build', ['jshint', 'html', 'images', 'fonts', 'extras'], function () {
  return gulp.src('dist/**/*').pipe($.size({title: 'build', gzip: true}));
});

gulp.task('default', ['clean'], function () {
  gulp.start('build');
});

// TODO
// ideally the gulp tasks would be neatly in modules
// so the sass task would be in the location: `./gulp/build/styles.js`

var config = require('./gulp/config');


// performs operations to distribute the css files
//gulp.task('sass', function() {
//
//
//  var options = config.sass.options;
//  options.style = 'expanded';
//
//  var sassStream = sass(config.sass.rubySrc, options)
//      .pipe(gulp.plugins.autoprefixer(config.sass.autoprefixer))
//      .on('error', errorHandler),
//   // cssStream = gulp.src(gulp.cssFiles),
//    targetDir = config.paths.sass.dest;
//
//  return streamqueue({objectMode: true}, sassStream)
//    .pipe(gulp.plugins.concat('main.css'))
//    //.pipe(plugins.if(build, plugins.stripCssComments()))
//    //.pipe(plugins.if(build, plugins.rev()))
//    .pipe(gulp.dest(path.join(targetDir, 'styles')))
//    .on('error', errorHandler)
//    .pipe(gulp.plugins.notify({
//      title: 'SASS',
//      message: 'SASS completed.  New CSS created!',
//      sound: 'Pop'
//    }));
//});
gulp.task('sass', function () {
  return sass('./scss/')
    .on('error', function (err) {
      console.error('Error!', err.message);
    })
    .pipe(gulp.dest('./app/styles'));
});


/**
 * gulp.task('sass', function () {
    return sass('source/')
        .on('error', function (err) {
            console.error('Error!', err.message);
        })
        .pipe(gulp.dest('result'));
});
 * @param error
 */
// Handle errors
function errorHandler(error) {
  console.log('Gulp Styles Error: ', error.toString());
  /*jshint validthis:true */
  this.emit('end');
}

// http://localhost:9000/styles/main.css

