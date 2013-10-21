module("EmberHttpMockingExample", {
	setup: function(){
		Ember.run(EmberHttpMockingExample, EmberHttpMockingExample.advanceReadiness);
		var server = sinon.fakeServer.create();
		server.respondWith(
			"GET", 
			"/things",
			[200, {"Content-Type": "application/json"}, JSON.stringify(response)]
		);
	},
	teardown: function(){
		EmberHttpMockingExample.reset();
		server.restore();
	}
});

test('/things', function() {
	expect(1);

	visit('/things').then(function() {
		equal(1,2, 'test is running!');
	});

});