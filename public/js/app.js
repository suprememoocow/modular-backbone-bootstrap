// Filename: app.js
define([
  'jquery',
  'underscore',
  'backbone',
  'router', // Request router.js
], function($, _, Backbone, Router) {
    var initialize = function() {  

    /* From http://coenraets.org/blog/2012/01/backbone-js-lessons-learned-and-improved-sample-app/ */
    Backbone.View.prototype.close = function () {
      console.log('Closing view ' + this);
      if (this.beforeClose) {
        this.beforeClose();
      }
      this.remove();
      this.unbind();
    };

    // Pass in our Router module and call it's initialize function
    Router.initialize();
  }

  return {
    initialize: initialize
  };

});
