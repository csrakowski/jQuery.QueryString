/// <reference path="jquery.querystring.d.ts" />

(function ($) {
    "use strict";

    var _queryString = (function () {
        var result = new Array();
        try  {
            var args = location.search.substr(1).split('&');
            var len = args.length;
            for (var i = 0; i < len; i++) {
                var param = args[i].split('=');
                result[param[0]] = decodeURIComponent(param[1]);
            }
        } catch (e) {
        }
        return result;
    })();

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
