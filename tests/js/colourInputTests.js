/* global cp, fluid, jqUnit */

(function ($) {
    "use strict";

    $(document).ready(function () {

        fluid.registerNamespace("cp.tests");

        cp.tests.inputValue = function (elm, value) {
            elm.val(value);
            elm.trigger("change");
        };

        cp.tests.verifyModelValue = function (that, baseColour) {
            var stringVal = that.model[baseColour + "Str"];
            jqUnit.assertEquals("The model value for " + baseColour + " should have a stringified pair", that.model[baseColour].toString(), stringVal);
            jqUnit.assertEquals("The model value for " + baseColour + " should be rendered", stringVal, that.locate(baseColour).val());
        };

        jqUnit.module("RGB Input Tests");

        jqUnit.test("cp.rgbInput - Initialization", function () {
            jqUnit.expect(7);

            var that = cp.rgbInput(".cpc-rgbInput");
            jqUnit.assertNotUndefined("The cp.rgbInput component should have been instantiated", that);

            cp.tests.verifyModelValue(that, "red");
            cp.tests.verifyModelValue(that, "green");
            cp.tests.verifyModelValue(that, "blue");
        });

        cp.tests.rgbInputs = {
            "Within Range": {
                red: 4,
                green: 51,
                blue: 123
            },
            "Below Range": {
                red: -2,
                green: -1,
                blue: -10
            },
            "Above Range": {
                red: 256,
                green: 260,
                blue: 2500
            }
        };

        fluid.each(cp.tests.rgbInputs, function (inputs, name) {
            jqUnit.test("cp.rgbInput - " + name, function () {
                jqUnit.expect(3);

                var that = cp.rgbInput(".cpc-rgbInput");

                fluid.each(inputs, function (value, input) {
                    var expected = Math.min(Math.max(that.options.range.min, value), that.options.range.max);
                    cp.tests.inputValue(that.locate(input), value);
                    jqUnit.assertEquals("The model value at path " + input + " should be set", expected, that.model[input]);
                });
            });
        });

        jqUnit.module("CMYK Input Tests");

        jqUnit.test("cp.cmykInput - Initialization", function () {
            jqUnit.expect(9);

            var that = cp.cmykInput(".cpc-cmykInput");
            jqUnit.assertNotUndefined("The cp.cmykInput component should have been instantiated", that);

            cp.tests.verifyModelValue(that, "cyan");
            cp.tests.verifyModelValue(that, "magenta");
            cp.tests.verifyModelValue(that, "yellow");
            cp.tests.verifyModelValue(that, "key");
        });

        cp.tests.cmykInputs = {
            "Within Range": {
                cyan: 0,
                magenta: 51,
                yellow: 100,
                key: 5
            },
            "Below Range": {
                cyan: -1,
                magenta: -51,
                yellow: -100,
                key: -5
            },
            "Above Range": {
                cyan: 220,
                magenta: 101,
                yellow: 1000,
                key: 123
            }
        };

        fluid.each(cp.tests.cmykInputs, function (inputs, name) {
            jqUnit.test("cp.cmykInput - " + name, function () {
                jqUnit.expect(4);

                var that = cp.cmykInput(".cpc-cmykInput");

                fluid.each(inputs, function (value, input) {
                    var expected = Math.min(Math.max(that.options.range.min, value), that.options.range.max);
                    cp.tests.inputValue(that.locate(input), value);
                    jqUnit.assertEquals("The model value at path " + input + " should be set", expected, that.model[input]);
                });
            });
        });
    });
})(jQuery);
