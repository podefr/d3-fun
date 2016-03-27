"use strict";

var Radar = require("./Radar");

module.exports = function init(chartDom) {
    var radar = new Radar();

    radar.render(chartDom.append("svg:svg"));
    radar.startClock();
};