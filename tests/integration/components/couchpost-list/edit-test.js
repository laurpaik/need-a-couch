import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('couchpost-list/edit', 'Integration | Component | couchpost list/edit', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{couchpost-list/edit}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#couchpost-list/edit}}
      template block text
    {{/couchpost-list/edit}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
