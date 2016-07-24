/// <reference path="../typings/index.d.ts" />
(function (_$, _location) {
    "use strict";
    var decode = decodeURIComponent;
    function _queryStringParser(url) {
        var result = new Array();
        var parts = (url.split("?")[1]).split("#");
        url = parts[0];
        if (parts[1]) {
            result["#"] = decode(parts[1]);
        }
        var args = url.split("&");
        var len = args.length;
        for (var i = 0; i < len; i++) {
            var param = args[i].split("=");
            result[param[0]] = decode(param[1]);
        }
        return result;
    }
    var _queryString = _queryStringParser(_location.search);
    _$.Querystring = function (key) {
        if (key === "#") {
            if (_location.hash) {
                return _location.hash.substr(1);
            }
        }
        else {
            return _queryString[key];
        }
    };
    _$.QueryStringParser = _queryStringParser;
})(jQuery, window.location);
