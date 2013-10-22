module("EmberHttpMockingExample", {
	setup: function(){
		Ember.run(EmberHttpMockingExample, EmberHttpMockingExample.advanceReadiness);
	},
	teardown: function(){
		EmberHttpMockingExample.reset();
	}
});

test('/things', function() {
	expect(1);

	visit('/things').then(function() {
		var response, fixtures;

		response = EmberHttpMockingExample.__container__.lookup("controller:things").get('things');
		fixtures = EmberHttpMockingExample.FIXTURES['things'];

		equal(response, fixtures, "Things received!");
	});

});