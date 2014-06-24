"use strict";

var LineChart = require("./js/line-chart");
var lineChart = new LineChart();

lineChart.ySeries((new Array(10)).map(function (val, idx) { return idx * 10; }), "%")
    .xSeries((new Array(5)).map(function (val, idx) { return idx * 10; }), "Degrees")
    .addLine([])
    .addLine([]);
