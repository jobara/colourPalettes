/* global cp, fluid, jqUnit */

(function ($) {
    "use strict";

    $(document).ready(function () {

        fluid.registerNamespace("cp.tests");

        cp.tests.inputValue = function (elm, value) {
            elm.val(value);
            elm.trigger("change");
        };

        jqUnit.module("Colour Input Tests");

        cp.tests.verifyModelValue = function (that, baseColour) {
            var stringVal = that.model[baseColour + "Str"];
            jqUnit.assertEquals("The model value for " + baseColour + " should have a stringified pair", that.model[baseColour].toString(), stringVal);
            jqUnit.assertEquals("The model value for " + baseColour + " should be rendered", stringVal, that.locate(baseColour).val());
        };

        jqUnit.test("cp.rgbInput - Initialization", function () {
            jqUnit.expect(7);

            var that = cp.rgbInput(".cpc-rgbInput");
            jqUnit.assertNotUndefined("The cp.rgbInput should have been instantiated", that);

            cp.tests.verifyModelValue(that, "red");
            cp.tests.verifyModelValue(that, "green");
            cp.tests.verifyModelValue(that, "blue");
        });

        jqUnit.test("cp.rgbInput - Within range", function () {
            jqUnit.expect(3);

            var that = cp.rgbInput(".cpc-rgbInput");
            var inputs = {
                red: 4,
                green: 51,
                blue: 123
            };

            fluid.each(inputs, function (value, input) {
                cp.tests.inputValue(that.locate(input), value);
                jqUnit.assertEquals("The model value at path " + input + " should be set", value, that.model[input]);
            });

        });

        jqUnit.test("cp.rgbInput - Below range", function () {
            jqUnit.expect(3);

            var that = cp.rgbInput(".cpc-rgbInput");
            var inputs = {
                red: -2,
                green: -1,
                blue: -10
            };

            fluid.each(inputs, function (value, input) {
                cp.tests.inputValue(that.locate(input), value);
                jqUnit.assertEquals("The model value at path " + input + " should be set", that.options.range.min, that.model[input]);
            });

        });

        jqUnit.test("cp.rgbInput - Above range", function () {
            jqUnit.expect(3);

            var that = cp.rgbInput(".cpc-rgbInput");
            var inputs = {
                red: 256,
                green: 260,
                blue: 2500
            };

            fluid.each(inputs, function (value, input) {
                cp.tests.inputValue(that.locate(input), value);
                jqUnit.assertEquals("The model value at path " + input + " should be set", that.options.range.max, that.model[input]);
            });

        });
    });
})(jQuery);
