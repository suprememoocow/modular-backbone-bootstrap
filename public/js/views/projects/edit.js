define([
  'jquery',
  'underscore',
  'backbone',
  'mustache',
  'text!templates/projects/edit.mustache'

], function($, _, Backbone, Mustache, template){
  var ProjectEditView = Backbone.View.extend({
    events: {
        "click .save": "saveItem",
        "click .delete": "deleteItem"
    },

    initialize: function(){
      this.model.bind("change", this.render, this);
    },
    
    render: function(){
     var compiledTemplate = Mustache.render(template, this.model.toJSON() );
      $(this.el).html(compiledTemplate);
      return this;
    },

    saveItem: function() {
      window.alert("Save");
      this.model.set({
        name: $('#projectName').val(),
        grapes: $('#score').val()
      });

      if (this.model.isNew()) {
        var self = this;
        this.collection.create(this.model, {
          success: function() {
            //app.navigate('wines/'+self.model.id, false);
            window.alert("Success");
          }
        });
      } else {
        this.model.save();
      }

      return false;
      
    },

    deleteItem: function() {
      window.alert("Delete");
    }

  });

  return ProjectEditView;
});
