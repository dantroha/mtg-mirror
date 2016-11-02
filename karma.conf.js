module.exports = function(config) {
    config.set({
        frameworks: ['jasmine'],
        files: [
            'bower_components/**/*.js',
            'app/**/*.js',
            'test/**/*.spec.js'
        ],
        asePath: '',

        // list of files to exclude
        exclude: [
        ],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'app/**/*.js': ['coverage']
        },

        overageReporter: {
            dir: 'jasmineReports/',
            reporters: [
                {type: 'html', subdir: 'report-html', includeAllSources: true},
                {type: 'cobertura', subdir: 'report-cobertura', includeAllSources: true}
            ]
        },

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_DEBUG,

        //A list of log appenders to be used. See the documentation for log4js for more information.
        loggers: [{type: 'console'}],

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],

        plugins: [
            'karma-jasmine',
            'karma-coverage',
            'karma-phantomjs-launcher',
            'karma-chrome-launcher',
            'karma-angular-filesort'
        ],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true
    });
};