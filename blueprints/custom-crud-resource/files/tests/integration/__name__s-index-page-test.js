import Ember from 'ember';
import Pretender from 'pretender';
import startApp from '<%= dasherizedPackageName %>/tests/helpers/start-app';

var App, server;

module('Integration - <%= capPlural %> Index Page', {
  setup: function() {
    App = startApp();

    <%= typePretenderStub %>

  },
  teardown: function() {
    Ember.run(App, 'destroy');
    server.shutdown();
  }
});


test('Should have a <%= typePlural %> index page', function() {
  visit('/<%= typeUnderscorePlural %>').then(function() {
      equal(find('h3').text(), 'Create New <%= capSingular %>');
  });
});

test('Should list all <%= typePlural %>', function() {
  visit('/<%= typeUnderscorePlural %>').then(function() {
    equal(find('a:contains("Some <%= typeSingular %> 1")').length, 1);
    equal(find('a:contains("Some <%= typeSingular %> 2")').length, 1);
    equal(find('a:contains("Another <%= typeSingular %>")').length, 1);
  });
});

test('Should be able to navigate to a <%= typeSingular %> page', function() {
  visit('/<%= typeUnderscorePlural %>').then(function() {
    click('a:contains("Some <%= typeSingular %> 1")').then(function() {
      equal(find('h2').text(), 'Some <%= typeSingular %> 1');
    });
  });
});

test('Should be able visit a <%= typeSingular %> page', function() {
  visit('/<%= typeUnderscorePlural %>/1').then(function() {
    equal(find('h2').text(), 'Some <%= typeSingular %> 1');
  });
});


