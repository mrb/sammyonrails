(function($) {
  var app = $.sammy(function() {
    this.element_selector = "#home";
		
		this.helpers({
			clear_right: function(){
        $("#right").html('');
      }
		})
		
		this.before(function(){
			this.clear_right();
		});

		this.get('#/:model/:id', function(){
			var model = this.params['model'];
			var id = this.params['id'];
			$.get("/"+model+"/"+id+'.js',function(response){
				$("#right").html(response);
			});
		});
		
    this.get('#/:model', function(){
			var model = this.params['model'];
			$.get("/"+model+".js",function(response){
				$("#left").html(response);
			});
    });
    
    this.bind('run', function(){
      $("home").html('');
    });
  });

  $(function() {
    app.run('#/posts');
  });
})(jQuery);