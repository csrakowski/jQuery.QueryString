jQuery.QueryString
==================

Adds a simple querystring helper to the jQuery object, with a similar interface to the ASP.NET one.

Usage:

Lets assume the URL is: https://example.com/?title=myTitle&page=myPage#mySection

To get the different components you will write code like:

	var title = $.QueryString("title");
	var page = $.QueryString("page");
	var hash = $.QueryString("#");
	var undef = $.QueryString("otherPage");

This will result in the following values:

	title == "myTitle"
	page == "myPage"
	hash == "mySection"
	undef == undefined


You can also use the "internal" querystring parser to generate a collection of key/value pairs from a specified url:

	var parts = $.QueryStringParser("https://example.com/?title=myTitle&page=myPage#mySection");
	var title = parts["title"];
	var page = parts["page"];
	var hash = parts["#"];
	var undef = parts["otherPage"];
	
The results will be the same as above, but this approach allows you to parse arbitrary urls of your choosing.


You can either use the files found in the `output` folder directly, or get them from [NPM](https://www.npmjs.com/package/jquery-querystring):

	npm install jquery-querystring

Since the querystring helper is (currently) written as a jQuery plugin, the NPM package has a peer dependency on jQuery. This means that if jQuery is not installed through NPM, it will throw an error.

I plan on refactoring the extension in such a way that it will also be available as a standalone script, but I am not sure when I will have the time to complete that. Please stay tuned for updates :-)
