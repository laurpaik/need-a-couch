import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('couchpost-list/couchpost', 'Integration | Component | couchpost list/post', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{couchpost-list/couchpost}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#couchpost-list/couchpost}}
      template block text
    {{/couchpost-list/couchpost}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
