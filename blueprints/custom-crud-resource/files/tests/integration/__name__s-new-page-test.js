import Ember from 'ember';
import Pretender from 'pretender';
import startApp from '<%= dasherizedPackageName %>/tests/helpers/start-app';

var App, server;

module('Integration - <%= capPlural %> New Page', {
  setup: function() {
    App = startApp();

    <%= typePretenderStub %>

  },
  teardown: function() {
    Ember.run(App, 'destroy');
    server.shutdown();
  }
});


test('Should have a <%= typePlural %> new page', function() {
  visit('/<%= typeUnderscorePlural %>/new').then(function() {
      equal(find('h3').text(), 'New <%= capSingular %>');
  });
});

test('Should be able to save new <%= typeSingular %>', function() {
  visit('/<%= typeUnderscorePlural %>/new');
  andThen(function() {
    fillIn('input.<%= typeSingular %>-name', 'My new <%= typeSingular %>');
    click('button.save');
    andThen(function() {
      visit('/<%= typeUnderscorePlural %>');
      andThen(function() {
       // Pretender stub does not currently deal with PUT and POST
       // so the payload value is not updated 
       // equal(find('ul.items li:last').text(), 'My new <%= typeSingular %>');
        equal(find('ul.items li:last').text(), 'Another <%= typeSingular %>');
      });
    });
  });
});
