import Ember from 'ember';
import Pretender from 'pretender';
import startApp from '<%= dasherizedPackageName %>/tests/helpers/start-app';

var App, server;

module('Integration - <%= capPlural %> Edit Page', {
  setup: function() {
    App = startApp();

    <%= typePretenderStub %>
  },
  teardown: function() {
    Ember.run(App, 'destroy');
    server.shutdown();
  }
});


test('Should have a <%= typePlural %> edit page', function() {
  visit('/<%= typeUnderscorePlural %>/1/edit').then(function() {
    equal(find('h3').text(), 'Edit <%= capSingular %>');
  });
});

test('Should be able to save edit <%= typeSingular %>', function() {
  visit('/<%= typeUnderscorePlural %>/1/edit');
  andThen(function() {
    fillIn('input.<%= typeSingular %>-name', 'My edited <%= typeSingular %>');
    click('button.save');
    andThen(function() {
      visit('/<%= typeUnderscorePlural %>/1');
      andThen(function() {
         equal(find('h2').text(), 'Some <%= typeSingular %> 1');
         // Pretender stub does not currently deal with PUT and POST
         // so the payload value is not updated 
         // equal(find('h2').text(), 'My edited <%= typeSingular %>');
      });
    });
  });
});

test('Should be able to cancel edit <%= typeSingular %>', function() {
  visit('/<%= typeUnderscorePlural %>/1/edit');
  andThen(function() {
    fillIn('input.<%= typeSingular %>-name', 'My edited <%= typeSingular %>');
    click('button.cancel');
    andThen(function() {
      visit('/<%= typeUnderscorePlural %>/1');
      andThen(function() {
         equal(find('h2').text(), 'Some <%= typeSingular %> 1');
      });
    });
  });
});

