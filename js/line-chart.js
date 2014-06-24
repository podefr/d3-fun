"use strict";

var d3 = require("d3");

module.exports = function LineChart(place) {
    if (!place) {
        throw new Error("when newing up a LineChart, please give a place where to start charting");
    }

    var _d3 = d3.select(place).append("svg"),
        _yAxis,
        _xAxis;

    this.ySeries = function (ticks, tickSize) {
        _yAxis = d3.svg.axis().ticks(ticks).tickSize(tickSize).orient("left");
        _d3.append("svg:g").call(_yAxis);
        return this;
    };

    this.xSeries = function () {

        return this;
    };

    this.addLine = function (data, legend) {
        return this;
    };

    this.place = function (dom) {

    };

    this.render = function () {

    };

    this.d3 = function (callback) {
        callback(_d3);
        return this;
    };
};
