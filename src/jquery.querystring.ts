//Added here for simplicity
interface JQueryStatic {
	//Gets the querystring parameter for the key specified (returns undefined if no value is present)
	Querystring(key: string): string;
	QueryStringParser(url: string): string[];
}
declare var jQuery: JQueryStatic;

(function ($: JQueryStatic) {
	"use strict";

	let decode = decodeURIComponent;

	function _queryStringParser(url: string) {
		var result = new Array<string>();
		try {
			let parts = (url.split("?")[1]).split("#");
			url = parts[0];
			if (parts[1]) {
				result["#"] = decode(parts[1]);
			}
			var args = url.split("&");
			var len = args.length;
			for (let i=0; i<len; i++) {
				let param = args[i].split("=");
				result[param[0]] = decode(param[1]);
			}
		} catch (e) {
		}
		return result;
	};

	var _queryString = _queryStringParser(location.search);
	$.Querystring = function (key: string) {
		if (key === "#") {
			if (location.hash) {
				return location.hash.substr(1);
			}
		} else {
			return _queryString[key];
		}
	};

	$.QueryStringParser = _queryStringParser;	
})(jQuery);