'use strict';

var tmp = '/.tmp',
    app = './app',
    dist = './dist',
    version = '0.0.0';


module.exports = {
    settings: {
        debug: true
    },
    paths: {
        sass: './scss/**/*.{scss, sass}',
        fonts: app + '/fonts/**',
        scripts: app + '/js/**/*.js'
    },
    json: {
        package: './package.json',
        bower: './bower.json',
        config: './gulp/config.js'
    },
    sass: {
        IS_WATCH: false,
        src: './scss/**/*.{scss, sass}',
        rubySrc: './scss/',
        rubyDest: './app/css/',
        dest: './app/styles/test.css',
        options: {
            noCache: true,
            compass: false
            //,
            //bundleExec: false,
            //sourcemap: true,
            // sourcemapPath: '../../scss',
            //sourcemapPath: '.'
            //// sourcemapPath: './scss/scss',
            // sourcemapPath: '../scss'
        },
        autoprefixer: {
            browsers: [
                'last 2 versions',
                'safari 5',
                'ie 8',
                'ie 9',
                'opera 12.1',
                'ios 6',
                'android 4'
            ],
            cascade: true
        }
    },
    scripts: {
        src: './app/js/**/*.js',
        testSrc: './.tmp/scripts/**/*.js',
        html: './app/**/*.html',
        dist: '.tmp',
        name: 'app.js',
        IS_RELEASE_BUILD: true
    },
    build: {
        closureStart: '(function() {\n',
        closureEnd: '\n})();',
        dist: './dist'
    }
};

