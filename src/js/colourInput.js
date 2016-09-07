/* global fluid */

var cp = cp || {};

(function ($) {
    "use strict";

    // jsFiddle work https://jsfiddle.net/6yqkLxk5/

    // tests file:///Users/justin/Documents/git/colourPalettes/tests/html/colorInput-test.html

    fluid.defaults("cp.rgbInput", {
        gradeNames: ["fluid.rendererComponent"],
        selectors: {
            redLabel: ".cpc-rgbInput-redLabel",
            greenLabel: ".cpc-rgbInput-greenLabel",
            blueLabel: ".cpc-rgbInput-blueLabel",
            red: ".cpc-rgbInput-red",
            green: ".cpc-rgbInput-green",
            blue: ".cpc-rgbInput-blue",
        },
        strings: {
            redLabel: "R",
            greenLabel: "G",
            blueLabel: "B"
        },
        model: {
            red: 0,
            green: 0,
            blue: 0
        },
        protoTree: {
            redLabel: {messagekey: "redLabel"},
            greenLabel: {messagekey: "greenLabel"},
            blueLabel: {messagekey: "blueLabel"},
            red: "${red}",
            green: "${green}",
            blue: "${blue}"
        },
        renderOnInit: true
    });
})(jQuery);
