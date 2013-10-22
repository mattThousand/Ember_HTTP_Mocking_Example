EmberHttpMockingExample.ThingsController = Ember.ObjectController.extend({

	init: function(controller) {
		var _this = this;

		EmberHttpMockingExample.Things.getThings().then(function(things) {
			_this.set('things', things);
		});
	}

});