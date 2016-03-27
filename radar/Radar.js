"use strict";

var quartz = require("./quartz");
var Disc = require("./Disc");
var Dial = require("./Dial");
var utils = require("./utils");

module.exports = function Radar() {
    var _quartz;

    var _discsInitParams = {
        "hours": {
            innerRadius: 100,
            outerRadius: 150,
            initialAngle: 0
        },

        "minutes": {
            innerRadius: 50,
            outerRadius: 100,
            initialAngle: 0
        },

        "seconds": {
            innerRadius: 25,
            outerRadius: 50,
            initialAngle: 0
        }
    };

    var _discs = {};

    this.render = function render(svgElement) {
        addDial(svgElement);
        createDiscs(svgElement);
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

            disc.setInnerRadius(initParams.innerRadius);
            disc.setOuterRadius(initParams.outerRadius);

            disc.render(discsGroup);

            _discs[discName] = disc;
        });
    }

    function addDial(svgElement) {
        var dialGroup = svgElement.append("svg:g").attr("class", "dial");

        var dial = new Dial();

        dial.setRadius(_discsInitParams.hours.outerRadius);
        dial.render(dialGroup);
    }


};

