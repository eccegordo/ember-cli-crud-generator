module.exports = function(app) {
  var express = require('express');
  var <%= typeCamelPlural %>Router = express.Router();
  var collection = [
    {
      "id": "1",
      "name": "My first <%= typeSingular %>"
    },
    {
      "id": "2",
      "name": "My second <%= typeSingular %>"
    },
    {
      "id": "3",
      "name": "My third <%= typeSingular %>"
    },
    {
      "id": "4",
      "name": "My fourth <%= typeSingular %>"
    },
    {
      "id": "5",
      "name": "My fifth <%= typeSingular %>"
    }
  ];

  // index route
  <%= typeCamelPlural %>Router.get('/<%= apiNamespace %>/<%= typeUnderscorePlural %>', function(req, res) {
    res.send({<%= typeUnderscorePlural %>: collection});
  });

  // route with id parameters
  <%= typeCamelPlural %>Router.get('/<%= apiNamespace %>/<%= typeUnderscorePlural %>/:id', function(req, res) {
    res.send({<%= typeUnderscorePlural %>: collection[req.params.id - 1]});
  });

  // create new resource via POST
  <%= typeCamelPlural %>Router.post('/api/v1/<%= typeUnderscorePlural %>', function(req, res) {
    var new_id = collection.length + 1;
    var new_resource = req.param('<%= typeUnderscoreSingular %>');
    new_resource['id'] = new_id;
    response = {<%= typeUnderscoreSingular %>: new_resource}
    res.send(response);
  });

  // update resource via PUT
  <%= typeCamelPlural %>Router.put('/api/v1/<%= typeUnderscorePlural %>/:id', function(req, res) {
    var resource = req.param('<%= typeUnderscoreSingular %>');
    resource['id'] = req.params.id;
    collection[req.params.id - 1] = resource;
    response = {<%= typeUnderscoreSingular %>: collection[req.params.id - 1]}
    res.send(response);
  });

  app.use('/', <%= typeCamelPlural %>Router);
};
