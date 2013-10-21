EmberHttpMockingExample.RESTService = Ember.Object.extend();

EmberHttpMockingExample.RESTService.reopenClass({
	getData: function(host, endpoint, onResponse, onError) {
		var url = [host, endpoint].join('/');
		return $.getJSON(endpoint).then(
			onResponse,
			onError
		);
	}
});