/// <reference path="jquery.querystring.d.ts" />

declare var jQuery: JQueryStatic; //Added here for simplicity

(function ($: JQueryStatic) {
	"use strict";

	var _queryString = (function () {
		var result = new Array<String>();
		try {
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