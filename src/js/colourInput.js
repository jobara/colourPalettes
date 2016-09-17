/* global fluid */

var cp = cp || {};

(function ($) {
    "use strict";

    // jsFiddle work https://jsfiddle.net/6yqkLxk5/

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

    fluid.defaults("cp.cmykInput", {
        gradeNames: ["fluid.rendererComponent"],
        selectors: {
            cyanLabel: ".cpc-cmykInput-cyanLabel",
            magentaLabel: ".cpc-cmykInput-magentaLabel",
            yellowLabel: ".cpc-cmykInput-yellowLabel",
            keyLabel: ".cpc-cmykInput-keyLabel",
            cyan: ".cpc-cmykInput-cyan",
            magenta: ".cpc-cmykInput-magenta",
            yellow: ".cpc-cmykInput-yellow",
            key: ".cpc-cmykInput-key"
        },
        strings: {
            cyanLabel: "C",
            magentaLabel: "M",
            yellowLabel: "Y",
            keyLabel: "K"
        },
        model: {
            cyan: 0,
            magenta: 0,
            yellow: 0,
            key: 0
        },
        modelRelay: [{
            source: "cyanStr",
            target: "cyan",
            singleTransform: {
                type: "fluid.transforms.stringToNumber"
            }
        }, {
            target: "cyan",
            singleTransform: {
                type: "fluid.transforms.limitRange",
                input: "{that}.model.cyan",
                min: "{that}.options.range.min",
                max: "{that}.options.range.max"
            }
        }, {
            source: "magentaStr",
            target: "magenta",
            singleTransform: {
                type: "fluid.transforms.stringToNumber"
            }
        }, {
            target: "magenta",
            singleTransform: {
                type: "fluid.transforms.limitRange",
                input: "{that}.model.magenta",
                min: "{that}.options.range.min",
                max: "{that}.options.range.max"
            }
        }, {
            source: "yellowStr",
            target: "yellow",
            singleTransform: {
                type: "fluid.transforms.stringToNumber"
            }
        }, {
            target: "yellow",
            singleTransform: {
                type: "fluid.transforms.limitRange",
                input: "{that}.model.yellow",
                min: "{that}.options.range.min",
                max: "{that}.options.range.max"
            }
        }, {
            source: "keyStr",
            target: "key",
            singleTransform: {
                type: "fluid.transforms.stringToNumber"
            }
        }, {
            target: "key",
            singleTransform: {
                type: "fluid.transforms.limitRange",
                input: "{that}.model.key",
                min: "{that}.options.range.min",
                max: "{that}.options.range.max"
            }
        }],
        range: {
            min: 0,
            max: 100
        },
        protoTree: {
            cyanLabel: {messagekey: "cyanLabel"},
            magentaLabel: {messagekey: "magentaLabel"},
            yellowLabel: {messagekey: "yellowLabel"},
            keyLabel: {messagekey: "keyLabel"},
            cyan: "${cyanStr}",
            magenta: "${magentaStr}",
            yellow: "${yellowStr}",
            key: "${keyStr}"
        },
        renderOnInit: true
    });
})(jQuery);
