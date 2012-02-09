// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'models/projects',
  'views/home/main',
  'views/projects/list',
  'views/users/list',
  'views/projects/edit',
  'collections/projects'
], function($, _, Backbone, ProjectsModel, MainHomeView, projectListView, userListView, ProjectEditView, ProjectsCollection){
  var projectsCollection = new ProjectsCollection();

  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      'projects': 'showProjects',
      'projects/add': 'addProject',
      'projects/:id': 'viewProject',
      'users': 'showUsers',

      // Default
      '*actions': 'defaultAction'
    },

    /* Taken from http://coenraets.org/blog/2012/01/backbone-js-lessons-learned-and-improved-sample-app/ */
    showView: function(selector, view) {
        console.log("Current View: " + selector);
        if (this.currentView)
            this.currentView.close();

        $(selector).html(view.render().el);
        this.currentView = view;
        return view;
    },

    showProjects: function(){
      // Call render on the module we loaded in via the dependency array
      // 'views/projects/list'
      projectListView.render();
    },
    
    // As above, call render on our loaded module
    // 'views/users/list'
    showUsers: function(){
      userListView.render();
    },

    addProject: function() {
      this.showView( '#page', new ProjectEditView({ model: new ProjectsModel(), collection: projectsCollection }));
    },
    
    defaultAction: function(actions){
      this.showView( '#page', new MainHomeView({}) );
    }

  });

  var initialize = function(){
    var app_router = new AppRouter;
    Backbone.history.start();
  };
  
  return {
    initialize: initialize
  };
});
