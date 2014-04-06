jQuery.QueryString
==================

Adds a simple querystring helper to the jQuery object, with a similar interface to the ASP.NET one.

Usage:

Lets assume the URL is: http://example.com/?title=myTitle&page=myPage#mySection

To get the different components you will write code like:

	var title = $.QueryString("title");
	var page = $.QueryString("page");
	var hash = $.QueryString("#");

This will result in the following values:

	title == "myTitle"
	page == "myPage"
	hash == "mySection"
