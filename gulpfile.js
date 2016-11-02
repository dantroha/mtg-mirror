var gulp = require('gulp');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var imageop = require('gulp-image-optimization');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css');
var karmaServer = require('karma').Server;

var paths = {
  styles: {
      src: './css/sass',
      files: './css/sass/*.scss',
      dest: './dist'
  }
};


var displayError = function(error) {

    var errorString = '[' + error.plugin + ']';
    errorString += ' ' + error.message.replace("\n",''); // Removes new line at the end

    // If the error contains the filename or line number add it to the string
    if(error.fileName)
        errorString += ' in ' + error.fileName;

    if(error.lineNumber)
        errorString += ' on line ' + error.lineNumber;

    // This will output an error like the following:
    // [gulp-sass] error message in file_name on line 1
    console.error(errorString);
}

// Setting up the sass task
gulp.task('sass', function (){
    // Taking the path from the above object
    gulp.src([
        './bower_components/angular-material/angular-material.min.css',
        './css/font-awesome.min.css',
        paths.styles.files])
    // Sass options - make the output compressed and add the source map
    // Also pull the include path from the paths object
    .pipe(sass({
        outputStyle: 'compressed',
        sourceComments: 'map',
        includePaths : [paths.styles.src]
    }))
    .pipe(concat('app.css'))
    // If there is an error, don't stop compiling but use the custom displayError function
    .on('error', function(err){
        displayError(err);
    })
    // Pass the compiled sass through the prefixer with defined
    .pipe(prefix(
        'last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'
    ))
    .pipe(minifyCss())
    // Funally put the compiled sass into a css file
    .pipe(gulp.dest(paths.styles.dest));



    // var cssToCombine = [
    //   './bower_components/angular-material/angular-material.min.css',
    //   './css/font-awesome.min.css',
    //   './css/app.css'
    // ];
    //
    // gulp.src(cssToCombine)
    //   .pipe(concat('app.css'))
    //   .pipe(gulp.dest('dist'))
    //   .pipe(rename('app.min.css'))
    //   .pipe(minifyCss())
    //   .pipe(gulp.dest('dist'))

});


gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: "http://localhost:8080"
    });
});

gulp.task('minimages', function(cb) {
    gulp.src(['Images/**/*.png','Images/Unprocessed/**/*.jpg','Images/Unprocessed/**/*.gif','Images/Unprocessed/**/*.jpeg']).pipe(imageop({
        optimizationLevel: 5,
        progressive: true,
        interlaced: true
    })).pipe(gulp.dest('Images')).on('end', cb).on('error', cb);
});


  var scripts = [
    './app/services/FileSaver.min.js',
    './app/app.js',
    './app/config/routes.js',
    './app/config/appcache.js',
    './app/sidebar.js',
    './app/startScreen/startScreen.js',
    './app/adverts/adverts.js',
    './app/draftsim/draftsim.js',
    './app/sealedsim/sealedsim.js',
    './app/browsecards/browsecards.js',
    './app/boostersim/boostersim.js',
    './app/about/about.js',
    './app/services/datacontext.js',
    './app/services/deckFunctions.js',
    './app/services/downloadDataService.js',
    './app/services/graphAnalysis.js',
    './app/services/landcards.js',
    './app/services/localStorageService.js',
    './app/services/ai.js',
    './app/services/mappings.js',
    './app/services/logger.js',
    './app/directives/cardDisplay.js',
    './app/directives/handSimulator.js',
    './app/directives/poolSummaryCharts.js',
    './app/directives/setSelection.js',
    './app/directives/optionsMenu.js',
    './app/carddata/CardsKLD.js',
    './app/carddata/CardsKLDMaster.js',
    './app/carddata/CardsEMN.js',
    './app/carddata/CardsEMA.js',
    './app/carddata/CardsSOI.js',
    './app/carddata/CardsOGW.js',
    './app/carddata/CardsExpeditionsOGW.js',
    './app/carddata/CardsBFZ.js',
    './app/carddata/CardsBNG.js',
    './app/carddata/CardsDTK.js',
    './app/carddata/CardsExpeditionsBFZ.js',
    './app/carddata/CardsFRF.js',
    './app/carddata/CardsJOU.js',
    './app/carddata/CardsKTK.js',
    './app/carddata/CardsM15.js',
    './app/carddata/CardsMM2.js',
    './app/carddata/CardsORI.js',
    './app/carddata/CardsTHS.js'
  ];


var vendorScripts = [
'./bower_components/angular/angular.min.js',
'./bower_components/angular-route/angular-route.min.js',
'./bower_components/angular-animate/angular-animate.min.js',
'./bower_components/angular-aria/angular-aria.min.js',
'./bower_components/angular-material/angular-material.min.js',
'./bower_components/Chart.js/Chart.min.js'
];

gulp.task('scripts-dev', function(cb) {


  gulp.src(scripts)
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('dist/js'))

  gulp.src(vendorScripts)
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('dist/js'));
});



gulp.task('scripts', function(cb) {


  gulp.src(scripts)
        .pipe(concat('app.js'))
        .pipe(gulp.dest('dist/js'))
        .pipe(rename('app.min.js'))
        .pipe(uglify({mangle: false}))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('vendor-scripts', function(cb) {
  gulp.src(vendorScripts)
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('dist/js'))
        .pipe(rename('vendor.min.js'))
        .pipe(uglify({mangle: false}))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('watch', function() {
    gulp.watch(paths.styles.files, ['sass'])
    // Also when there is a change, display what file was changed, only showing the path after the 'sass folder'
    .on('change', function(evt) {
        console.log(
            '[watcher] File ' + evt.path.replace(/.*(?=sass)/,'') + ' was ' + evt.type + ', compiling...'
        );
    });

    gulp.watch(['./app/**/*.js', './app/*.js'], ['scripts', 'tdd']);
});

gulp.task('test', function (done) {
    new karmaServer({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done).start();
});

 // Watch for file changes and re-run tests on each change
gulp.task('tdd', function (done) {
    new karmaServer({
        configFile: __dirname + '/karma.conf.js'
    }, done).start();
});

// This is the default task - which is run when `gulp` is run
// The tasks passed in as an array are run before the tasks within the function
gulp.task('default', ['sass', 'scripts', 'vendor-scripts'], function() {
    // Watch the files in the paths object, and when there is a change, fun the functions in the array
    gulp.watch(paths.styles.files, ['sass'])
    // // Also when there is a change, display what file was changed, only showing the path after the 'sass folder'
    .on('change', function(evt) {
        console.log(
            '[watcher] File ' + evt.path.replace(/.*(?=sass)/,'') + ' was ' + evt.type + ', compiling...'
        );
    });

    gulp.watch(['./app/**/*.js', './app/*.js'], ['scripts', 'tdd']);

});
