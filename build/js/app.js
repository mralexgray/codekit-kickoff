// Custom JS Application Code

// If using JSLint for syntax debugging, include the following
/*global $, console, alert, App*/

$(function() { 
	App.init();
});

var App = (function() { 

	var settings = { 
		"name": "My Application",	
		"url": "application_url.com",
		"version": "1.0.0"	
	};

	var listen = function() { 
		// Application Listeners can be loaded here for easy configuration		
		console.log("Ready and Listening");
	};	

	var init = function() {
		// Kick off the listeners
		listen();
		// Application has been initalized
		console.log(settings.name + "(v" + settings.version + ") Started");	
	};
		
	return {
		init: init
	};
	
}());