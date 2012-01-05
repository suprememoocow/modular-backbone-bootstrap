// Filename: views/home/main
define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone){

  var mainHomeView = Backbone.View.extend({
    el: $("#page"),
    
    render: function(){
      this.el.html($("#home").html());
    }
    
  });
  return new mainHomeView;
});
