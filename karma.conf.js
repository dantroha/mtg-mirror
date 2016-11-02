module.exports = function(config) {
    config.set({
        browsers: ['Chrome'],
        frameworks: ['jasmine'],
        files: [
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
            // 'web-app/js/searchResults/js/navbarController.js': ['coverage'],
            // 'web-app/js/searchResults/js/resultController.js': ['coverage'],
            // 'web-app/js/subscriptionCenter/js/alertsController.js': ['coverage'],
            // 'web-app/js/subscriptionCenter/js/alertsService.js': ['coverage'],
            // 'web-app/js/subscriptionCenter/js/settingsController.js': ['coverage'],
            // 'web-app/js/subscriptionCenter/js/subscriptionCenterController.js': ['coverage'],
            // 'web-app/js/subscriptionCenter/js/userService.js': ['coverage'],
            // 'web-app/js/nj-mxnet.js': ['coverage']
        },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress', 'coverage'],

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        //A list of log appenders to be used. See the documentation for log4js for more information.
        loggers: [{type: 'console'}],

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,

        plugins: [
            'karma-jasmine',
            'karma-coverage',
            'karma-phantomjs-launcher',
            'karma-chrome-launcher'
        ],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true
    });
};