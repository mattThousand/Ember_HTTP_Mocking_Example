EmberHttpMockingExample.Things = Ember.Object.extend();

EmberHttpMockingExample.Things.reopenClass({
	getData: function() {
		return EmberHttpMockingExample.RESTService.getData('http://localhost:3000',
			'things', function(response) {
				return [response];
			},
			function(error) {
				return null;
			}
		);
	}
});
