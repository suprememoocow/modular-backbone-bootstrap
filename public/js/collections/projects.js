define([
  'jquery',
  'underscore',
  'backbone',
  'models/projects'
], function($, _, Backbone, projectsModel){
  var ProjectsCollection = Backbone.Collection.extend({
    model: projectsModel,
    url: "api/wines",
    initialize: function() {
    }

  });

  return ProjectsCollection;
});
