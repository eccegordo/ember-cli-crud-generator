ember-cli-crud-generator
========================

A blueprint for generating ember cli crud scaffolding

NOTE use with caution this is still a WIP in process and I am still learning the best practices with the ember cli addons.


## How to Use

```
ember g custom-crud-resource foo
```

Generates models, pods, tests and http mocks

For best results use a singular resource name, the generator will pluralize the appropriate files.

Also don't forget to update router.js with something like

```
  this.resource('foos', function() {
    this.route('show', { path: ':foo_id' });
    this.route('new');
    this.route('edit', { path: ':foo_id/edit' });
  });

```