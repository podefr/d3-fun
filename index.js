"use strict";

var LineChart = require("./js/line-chart");
var lineChart = new LineChart(document.querySelector("figure"));

lineChart
    .d3(function (d3) {
        d3.attr("width", 500)
        .attr("height", 1000);
    })
    .ySeries(10, 10, "%")
    .xSeries(5, 10, "°(C)")
    .addLine([])
    .addLine([])
    .render();
