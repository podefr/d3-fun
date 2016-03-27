"use strict";

var quartz = require('./quartz');
var Disc = require('./Disc');
var Dial = require('./Dial');

module.exports = function Radar() {
    var _quartz;

    var _discsInitParams = {
        "hours": {
            innerDiameter: 100,
            outerDiameter: 150,
            initialAngle: 300
        },

        "minutes": {
            innerDiameter: 50,
            outerDiameter: 100,
            initialAngle: 60
        },

        "seconds": {
            innerDiameter: 0,
            outerDiameter: 50,
            initialAngle: 200
        }
    };

    var _discs = {};

    this.render = function render(svgElement) {
        createDiscs(svgElement);
        addDial(svgElement);
    };

    this.startClock = function startClock() {
        _quartz = quartz();

        _quartz.onValue(function (value) {
            _discs.hours.setAngle(300);
            _discs.minutes.setAngle(60);
            _discs.seconds.setAngle(200);
        });
    };

    function createDiscs(svgElement) {
        var discGroup = svgElement.append("svg:g").attr("class", "discs");

        Object.keys(_discsInitParams).forEach(function (discName) {
            var disc = new Disc();
            var initParams = _discsInitParams[discName];

            disc.setInnerDiameter(initParams.innerDiameter);
            disc.setOuterDiameter(initParams.outerDiameter);
            disc.setAngle(initParams.initialAngle);

            disc.render(discGroup);

            _discs[discName] = disc;
        });
    }

    function addDial(svgElement) {
        var dialGroup = svgElement.append("svg:g").attr("class", "dial");

        var dial = new Dial();

        dial.render(dialGroup);
    }


};

