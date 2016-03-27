"use strict";

var d3 = require('d3');


module.exports = function Disc() {
    var _scale = d3.scale
        .linear()
        .domain([0, 359])
        .range([0, 2 * Math.PI]);

    var _innerRadius, _outerRadius, _discGroup, _hand;

    this.setInnerRadius = function setInnerRadius(innerRadius) {
        _innerRadius = innerRadius;
    };

    this.setOuterRadius = function setOuterRadius(outerRadius) {
        _outerRadius = outerRadius;
    };

    this.render = function render(group) {
        _discGroup = group.append("svg:g");

        _discGroup.append("svg:circle")
            .attr("r", _outerRadius)
            .attr("class", "outer diameter disc")
            .append("svg:stop-color");

        _hand = d3.svg.arc()
            .innerRadius(_innerRadius)
            .outerRadius(_outerRadius)
            .startAngle(function (angle) {
                return _scale(angle);
            })
            .endAngle(function (angle) {
                return _scale(angle);
            });

        _discGroup.selectAll("path")
            .data([0])
            .enter()
            .append("svg:path")
            .attr("d", function (data) {
                return _hand(data);
            });
    };

    this.updateAngle = function updateAngle(angle) {
        _discGroup.selectAll("path")
            .data([angle])
            .attr("d", function (data) {
                return _hand(data);
            });
    };
};