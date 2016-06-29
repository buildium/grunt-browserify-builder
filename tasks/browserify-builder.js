'use strict';

module.exports = function browserifyBuilderTask(grunt) {
    grunt.registerMultiTask('browserify-builder', 'Browserify build tool for multiple bundles', function() {
        var createBuilder = require('browserify-builder');
        var config = this.data.config;
        var targets = this.data.targets;
        var done = this.async();

        if (targets) {
            createBuilder(config, done).buildMulti(targets);
        } else {
            createBuilder(config, done).buildAll();
        }

        if (config && config.watch) {
            grunt.util.spawn({
                cmd: 'grunt',
                args: ['watch'],
                opts: {stdio: 'inherit'}
            }, function() {});
        }
    });
};
