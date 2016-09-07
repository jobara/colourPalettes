/* global cp, fluid, jqUnit */

(function ($) {
    "use strict";

    $(document).ready(function () {

        jqUnit.module("Colour Input Tests");

        jqUnit.test("cp.rgbInput - Initialization", function () {
            jqUnit.expect(7);

            var that = cp.rgbInput(".cpc-rgbInput");
            jqUnit.assertNotUndefined("The cp.rgbInput should have been instantiated", that);

            $.each(that.options.strings, function (name) {
                jqUnit.assertEquals("The string for " + name + " should be set", that.options.strings[name], that.locate(name).text());
            });

            $.each(that.model, function (name) {
                jqUnit.assertEquals("The model value for " + name + " should be set", that.model[name].toString(), that.locate(name).val());
            });
        });
    });
})(jQuery);
