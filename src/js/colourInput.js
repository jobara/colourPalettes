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
            blue: ".cpc-rgbInput-blue"
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
        modelRelay: [{
            source: "redStr",
            target: "red",
            singleTransform: {
                type: "fluid.transforms.stringToNumber"
            }
        }, {
            target: "red",
            singleTransform: {
                type: "fluid.transforms.limitRange",
                input: "{that}.model.red",
                min: "{that}.options.range.min",
                max: "{that}.options.range.max"
            }
        }, {
            source: "greenStr",
            target: "green",
            singleTransform: {
                type: "fluid.transforms.stringToNumber"
            }
        }, {
            target: "green",
            singleTransform: {
                type: "fluid.transforms.limitRange",
                input: "{that}.model.green",
                min: "{that}.options.range.min",
                max: "{that}.options.range.max"
            }
        }, {
            source: "blueStr",
            target: "blue",
            singleTransform: {
                type: "fluid.transforms.stringToNumber"
            }
        }, {
            target: "blue",
            singleTransform: {
                type: "fluid.transforms.limitRange",
                input: "{that}.model.blue",
                min: "{that}.options.range.min",
                max: "{that}.options.range.max"
            }
        }],
        range: {
            min: 0,
            max: 255
        },
        protoTree: {
            redLabel: {messagekey: "redLabel"},
            greenLabel: {messagekey: "greenLabel"},
            blueLabel: {messagekey: "blueLabel"},
            red: "${redStr}",
            green: "${greenStr}",
            blue: "${blueStr}"
        },
        renderOnInit: true
    });

})(jQuery);
