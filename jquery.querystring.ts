/// <reference path="jquery.querystring.d.ts" />

declare var jQuery: JQueryStatic; //Added here for simplicity

(function ($: JQueryStatic) {
	"use strict";

	$.QueryStringParser = function (url: string) {
		var result = new Array<string>();
		try {
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
	$.Querystring = function (key: string) {
		if (key === "#") {
			if (location.hash) {
				return location.hash.substr(1);
			}
		} else {
			return _queryString[key];
		}
	};
})(jQuery);