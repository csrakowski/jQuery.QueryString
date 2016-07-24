/// <reference path="../typings/index.d.ts" />

interface JQueryStatic {
	//Gets the querystring parameter for the key specified (returns undefined if no value is present)
	Querystring(key: string): string;
	QueryStringParser(url: string): string[];
}

(function(_$: JQueryStatic, _location: Location) {
	"use strict";

	const decode = decodeURIComponent;

	function _queryStringParser(url: string) {
		const result = new Array<string>();
		const parts = (url.split("?")[1]).split("#");
		url = parts[0];
		if (parts[1]) {
			result["#"] = decode(parts[1]);
		}
		const args = url.split("&");
		const len = args.length;
		for (let i = 0; i < len; i++) {
			const param = args[i].split("=");
			result[param[0]] = decode(param[1]);
		}
		return result;
	}

	const _queryString = _queryStringParser(_location.search);
	_$.Querystring = function(key: string) {
		if (key === "#") {
			if (_location.hash) {
				return _location.hash.substr(1);
			}
		} else {
			return _queryString[key];
		}
	};

	_$.QueryStringParser = _queryStringParser;
})(jQuery, window.location);