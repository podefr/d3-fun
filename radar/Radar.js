"use strict";

var quartz = require("./quartz");
var Disc = require("./Disc");
var Dial = require("./Dial");
var utils = require("./utils");

module.exports = function Radar() {
    var _quartz;

    var _discsInitParams = {
        "hours": {
            innerDiameter: 100,
            outerDiameter: 150,
            initialAngle: 0
        },

        "minutes": {
            innerDiameter: 50,
            outerDiameter: 100,
            initialAngle: 0
        },

        "seconds": {
            innerDiameter: 0,
            outerDiameter: 50,
            initialAngle: 0
        }
    };

    var _discs = {};

    this.render = function render(svgElement) {
        createDiscs(svgElement);
        addDial(svgElement);
    };

    this.startClock = function startClock() {
        _quartz = quartz();

        _quartz.map(utils.timeToAngles)
            .onValue(function (angles) {
                _discs.hours.updateAngle(angles.hours);
                _discs.minutes.updateAngle(angles.minutes);
                _discs.seconds.updateAngle(angles.seconds);
            });
    };

    function createDiscs(svgElement) {
        var discsGroup = svgElement.append("svg:g").attr("class", "discs");

        Object.keys(_discsInitParams).forEach(function (discName) {
            var disc = new Disc();
            var initParams = _discsInitParams[discName];

            disc.setInnerDiameter(initParams.innerDiameter);
            disc.setOuterDiameter(initParams.outerDiameter);

            disc.render(discsGroup);

            _discs[discName] = disc;
        });
    }

    function addDial(svgElement) {
        var dialGroup = svgElement.append("svg:g").attr("class", "dial");

        var dial = new Dial();

        dial.render(dialGroup);
    }


};

