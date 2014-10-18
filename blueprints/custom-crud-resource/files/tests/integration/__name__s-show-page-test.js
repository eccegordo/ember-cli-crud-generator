import Ember from 'ember';
import Pretender from 'pretender';
import startApp from '<%= dasherizedPackageName %>/tests/helpers/start-app';

var App, server;

module('Integration - <%= capPlural %> Show Page', {
  setup: function() {
    App = startApp();

    <%= typePretenderStub %>

  },
  teardown: function() {
    Ember.run(App, 'destroy');
    server.shutdown();
  }
});


test('Should have a <%= typePlural %> show page', function() {
  visit('/<%= typeUnderscorePlural %>/1').then(function() {
      equal(find('h2').text(), 'Some <%= typeSingular %> 1');
  });
});

test('Should have edit link on <%= typePlural %> show page', function() {
  visit('/<%= typeUnderscorePlural %>/1').then(function() {
    equal(find('a:contains("edit")').length, 1);
  });
});

test('Should be able to navigate to edit page from <%= typePlural %> show page', function() {
  visit('/<%= typeUnderscorePlural %>/1').then(function() {
    click('a:contains("edit")').then(function() {
      equal(find('h4').text(), 'Some <%= typeSingular %> 1');
    });
  });
});
