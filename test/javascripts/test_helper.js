//= require application
//= require ember_http_mocking_example
//= require sinon
//= require_tree .
//= require_self

// Test Helpers
	function exists(selector) {
		return !!find(selector).length;
	}

// EmberHttpMockingExample

	document.write("<div id='testing_container'></div>");

	EmberHttpMockingExample.rootElement = '#testing_container';
	EmberHttpMockingExample.setupForTesting();
	EmberHttpMockingExample.injectTestHelpers(); 

// HTTP Response

	var response = {
		"things":
			[
				{
					"id":1,
					"name":"Boris",
					"birthday":"2013-10-21T02:39:47Z"
				},
				{
					"id":2,
					"name":"Suzy",
					"birthday":"2013-10-21T02:40:01Z"
				}
			]
		};