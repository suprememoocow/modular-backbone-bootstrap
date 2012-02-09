define([
  'jquery',
  'underscore',
  'backbone',
  'collections/projects',
  'mustache',
  'text!templates/projects/list.mustache'

], function($, _, Backbone, projectsCollection, Mustache, projectListTemplate){
  var projectListView = Backbone.View.extend({
    el: $("#page"),
    events: {
        "click .add": "add"
    },

    initialize: function(){
      this.collection = projectsCollection;
      //this.collection.bind("add", this.exampleBind);
      //this.collection = projectsCollection.add({ name: "Twitter"});
      //this.collection = projectsCollection.add({ name: "Facebook"});
      //this.collection = projectsCollection.add({ name: "Myspace", score: 20});
    },

    exampleBind: function( model ){
      //console.log(model);
    },
    
    render: function(){
      var data = {
        projects:  _.map(this.collection.models, function(v) { return v.toJSON(); })
      };

      var compiledTemplate = Mustache.render(projectListTemplate, data);
      $("#page").html( compiledTemplate );
    },
    add: function() {
      window.alert("Add");
    }
  });

  return new projectListView;
});
