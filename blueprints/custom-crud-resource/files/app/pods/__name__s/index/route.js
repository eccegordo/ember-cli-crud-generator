import Ember from 'ember';

export default Ember.Route.extend({

  beforeModel: function() {
    // window.console.log("beforeModel: %s | this = %o", this.routeName, this);
  },

  model: function() {
    var collection = this.store.find('<%= typeSingular %>');
    return collection;
  },

  afterModel: function() {
    // window.console.log("afterModel: %s | this = %o", this.routeName, this);
  },

  setupController: function(controller, model) {
    // window.console.log("setupController: records %d | collection = %o", model.get('length'), model);
    this.controller.set('model', model);
  }

});
