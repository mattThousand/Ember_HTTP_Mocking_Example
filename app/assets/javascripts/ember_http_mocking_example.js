window.EmberHttpMockingExample = Ember.Application.create({
  rootElement: "#ember",

  ready: function() {
  	EmberHttpMockingExample.Service = Ember.Testing ? EmberHttpMockingExample.FixtureService : EmberHttpMockingExample.RESTService;
  }
});
