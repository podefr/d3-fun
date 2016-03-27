"use strict";

var Bacon = require('baconjs');

module.exports = function quartz() {
    var _ticksPerSecond = 10;

    return Bacon.fromPoll(1000 / _ticksPerSecond, function () {
        return new Date();
    });
};