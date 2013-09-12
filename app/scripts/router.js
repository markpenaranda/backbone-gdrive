
define([
  'backbone',
  /* View Template */
  'views/hello',
  'views/test',
  'views/home'
], function(Backbone, HelloView, TestView, HomeView){
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      'users': 'showUsers',
      'test' : 'testApp',
      // Default
      '*actions': 'defaultAction'
    }
  });

  var initialize = function(){
    var app_router = new AppRouter;

 	
 	app_router.on('route:testApp', function(){
 		var test = new TestView();
 		console.log(test);
 	});

    app_router.on('route:showUsers', function(){
    	console.log('users');
 		new HelloView({el:$(".hero-unit")});

    });
    app_router.on('route:defaultAction', function(actions){
      // We have no matching route, lets just log what the URL was
      console.log('No route:', actions);
      new HomeView({el:$(".hero-unit")});
    });
    // Backbone.history.start();
  };
  return {
    initialize: initialize
  };
});