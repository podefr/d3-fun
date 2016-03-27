"use strict";

module.exports = function Dial() {
    var _radius = 0;

    this.setRadius = function setRadius(radius) {
        _radius = radius;
    };

    this.render = function render(svgElement) {
        svgElement.append("svg:g")
            .append("svg:circle")
            .attr("class", "dial")
            .attr("r", _radius);
    };
};