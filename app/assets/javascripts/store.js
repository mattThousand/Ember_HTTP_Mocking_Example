EmberHttpMockingExample.RESTService = Ember.Object.extend();

EmberHttpMockingExample.RESTService.reopenClass({

	// Define your REST adapter here

	getData: function(endpoint, params, onResponse, onError) {
		// ...
	}

});


EmberHttpMockingExample.FixtureService = Ember.Object.extend();

EmberHttpMockingExample.FixtureService.reopenClass({

	getData: function(endpoint, params, onResponse, onError) {
		return this.getFixtures(endpoint).then(onResponse, onError);
	},

	getFixtures: function(key) {
		return new Ember.RSVP.Promise(function(resolve, reject) {
			if (EmberHttpMockingExample.FIXTURES[key] !== undefined) {
				resolve(EmberHttpMockingExample.FIXTURES[key]);
			} else {
				reject(null);
			}
		})
	}

});
