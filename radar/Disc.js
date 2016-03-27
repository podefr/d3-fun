"use strict";

var d3 = require('d3');


module.exports = function Disc() {
    var _scale = d3.scale
        .linear()
        .domain([0, 359])
        .range([0, 2 * Math.PI]);

    var _innerDiameter, _outerDiameter, _angle;

    this.setInnerDiameter = function setInnerDiameter(innerDiameter) {
        _innerDiameter = innerDiameter;
    };

    this.setOuterDiameter = function setOuterDiameter(outerDiameter) {
        _outerDiameter = outerDiameter;
    };

    this.render = function render(group) {
        group.append("svg:circle")
            .attr("r", _outerDiameter)
            .attr("class", "outer diameter disc");

        var hand = d3.svg.arc()
            .innerRadius(_innerDiameter)
            .outerRadius(_outerDiameter)
            .startAngle(function (angle) {
                return _scale(angle);
            })
            .endAngle(function (angle) {
                return _scale(angle);
            });

        group.selectAll("g")
            .data([_angle])
            .enter()
            .append("svg:path")
            .attr("d", function (data) {
                return hand(data);
            });
    };

    this.setAngle = function setAngle(angle) {
        _angle = angle;
    };
};