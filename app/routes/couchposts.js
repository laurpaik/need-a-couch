import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').findAll('couchpost');
  },
  actions: {
    deleteCouchpost (couchpost) {
      couchpost.destroyRecord()
      .then(() => this.transitionTo('couchposts'));
    },
  },
});
