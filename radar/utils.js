"use strict";

module.exports = {
    timeToAngles: function timeToAngles(date) {
        function secondsToAngle() {
            // 360deg = 60000ms
            var seconds = date.getSeconds() * 1000 + date.getMilliseconds();

            return 360 * seconds / 60000;
        }

        function minutesToAngle() {
            // 360deg = 3600s
            var minutes = date.getMinutes() * 60 + date.getSeconds();

            return 360 * minutes / 3600;
        }

        function hoursToAngle() {
            // 360deg = 3600s
            var hours = date.getHours() * 60 + date.getMinutes();

            return 360 * hours / 720;
        }

        return {
            hours: hoursToAngle(),
            minutes: minutesToAngle(),
            seconds: secondsToAngle()
        }
    }
};