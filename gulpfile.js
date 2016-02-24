"use strict";
var teen_process = require('teen_process');
var runSequence = require('run-sequence');

var gulp = require('gulp'),
    boilerplate = require('appium-gulp-plugins').boilerplate.use(gulp);

//clean the build
gulp.task('gradle-clean', function () {
   return teen_process.exec('gradle', ['clean'], {cwd: 'uiautomator2'});
});

//build src apk
gulp.task('gradle-android', function () {
	return teen_process.exec('gradle', ['assembleDebug'], {cwd: 'uiautomator2'});
});

//build test apk
gulp.task('gradle-androidTest', function () {
    return teen_process.exec('gradle', ['assembleDebugandroidTest'], {cwd: 'uiautomator2'});
});

gulp.task('gradle',  ['gradle-clean']);

gulp.task('build', function(callback) {
  runSequence('gradle-clean',
              'gradle-android',
              'gradle-androidTest',
              callback);
});

boilerplate({
  build: 'appium-uiautomator2-installer_test',
  jscs: false,
  extraPrepublishTasks: ['build'],
  e2eTest: {android: true},
  testTimeout: 20000
});

