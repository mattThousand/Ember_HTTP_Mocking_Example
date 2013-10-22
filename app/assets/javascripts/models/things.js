EmberHttpMockingExample.Things = Ember.Object.extend();

EmberHttpMockingExample.Things.reopenClass({
	getThings: function() {
		return EmberHttpMockingExample.Service.getData('things',
			'some params', function(response) {
				return response;
			},
			function(error) {
				return null;
			}
		);
	}
});
