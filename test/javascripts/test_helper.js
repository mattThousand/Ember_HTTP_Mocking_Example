//= require application
//= require ember_http_mocking_example
//= require_tree .
//= require_self


// Declare Ember.Testing

Ember.Testing = true;

// EmberHttpMockingExample

	document.write("<div id='testing_container'></div>");

	EmberHttpMockingExample.rootElement = '#testing_container';
	EmberHttpMockingExample.setupForTesting();
	EmberHttpMockingExample.injectTestHelpers(); 

// Define Fixtures

EmberHttpMockingExample.FIXTURES = {};

var bDay = new Date();

EmberHttpMockingExample.FIXTURES['things'] = [
	{ name: "Boris", birthday: bDay },
	{ name: "Franz", birthday: bDay }
];

EmberHttpMockingExample.FIXTURES['/some/other/endpoint'] = [ 'stuff' ];