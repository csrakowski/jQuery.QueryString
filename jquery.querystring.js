/// <reference path="jquery.querystring.d.ts" />

(function ($) {
    "use strict";

    $.QueryStringParser = function (url) {
        var result = new Array();
        try  {
            var parts = (url.split("?")[1]).split("#");
            url = parts[0];
            if (parts[1]) {
                result["#"] = decodeURIComponent(parts[1]);
            }
            var args = url.split('&');
            var len = args.length;
            for (var i = 0; i < len; i++) {
                var param = args[i].split('=');
                result[param[0]] = decodeURIComponent(param[1]);
            }
        } catch (e) {
        }
        return result;
    };

    var _queryString = $.QueryStringParser(location.search);
    $.Querystring = function (key) {
        if (key === "#") {
            if (location.hash) {
                return location.hash.substr(1);
            }
        } else {
            return _queryString[key];
        }
    };
})(jQuery);
