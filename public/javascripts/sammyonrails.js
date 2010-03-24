(function($) {
  var app = $.sammy(function() {
    this.element_selector = "#home";
    // This is the body of your application
    
    // Home Page Route
		this.get('#/', function(){
			
		});
		
    this.get('#/:id', function(){
			$.get("/posts/"+this.params['id']+".js",function(response){
				$("#home").append(response);
			});
    });
    
    this.bind('run', function(){
      // 'run' is one of the custom events that you can bind to within a
      // Sammy application.  Use it to set up your application.  I use it to
      // bind forms with jQuery form, setup common behaviors, etc.
      var context = this;
    });
  });

  $(function() {
    // When the application runs, the #/ route will be executed
    app.run('#/');
  });
})(jQuery);