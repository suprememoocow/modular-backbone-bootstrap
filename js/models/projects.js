define([
  'underscore',
  'backbone'
], function(_, Backbone) {
  var ProjectsModel = Backbone.Model.extend({
    urlRoot: "api/projects",
    defaults: {
      score: 10
    },
    initialize: function(){
    }

  });

  return ProjectsModel;
});
