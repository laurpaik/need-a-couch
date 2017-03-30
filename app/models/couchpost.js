import DS from 'ember-data';

export default DS.Model.extend({
  location: DS.attr('string'),
  dateNeeded: DS.attr('date'),
  couchFound: DS.attr('boolean'),
  profile: DS.belongsTo('profile', { async: true }),
  // profile: DS.attr(),
  editable: DS.attr('boolean'),
});
