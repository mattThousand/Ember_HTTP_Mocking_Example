EmberHttpMockingExample.Router.reopen({
	rootURL: '/',
	location: 'history'
});

EmberHttpMockingExample.Router.map(function() {
	this.resource('things');
});


EmberHttpMockingExample.ThingsRoute = Ember.Route.extend({
	model: function(params) {
		var _this = this;
		this.render();
		return EmberHttpMockingExample.Things.getData();
	}
});