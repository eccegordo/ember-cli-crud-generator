import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    // window.console.log("beforeModel: %s | this = %o", this.routeName, this);
  },

  model: function(params) {
    var item = this.store.find('<%= typeSingular %>', params.<%= typeUnderscoreSingular %>_id);
    return item;
  },

  afterModel: function() {
    // window.console.log("afterModel: %s | this = %o", this.routeName, this);
  },

  setupController: function(controller, model) {
    // window.console.log("setupController: id %s | model = %o", model.get('id'), model);
    this.controller.set('model', model);
  }
});
