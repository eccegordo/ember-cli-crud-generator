// TODO: import these as proper modules and don't piggyback or assume they are installed with ember cli
var inflection  = require('../../node_modules/ember-cli/node_modules/inflection');
var stringUtils = require('../../node_modules/ember-cli/lib/utilities/string');

module.exports = {
  description: 'generate a basic crud scaffold and resource stub',

  locals: function(options) {
    var type = options.entity.name || '<UNKNOWN>';

    var typePlural   = inflection.pluralize(type);
    var typeSingular = inflection.singularize(type);

    var capPlural    = stringUtils.capitalize(typePlural);
    var capSingular  = stringUtils.capitalize(typeSingular);

    var typeCamelSingular      = stringUtils.camelize(type);
    var typeCamelPlural        = inflection.pluralize(typeCamelSingular);

    var typeUnderscoreSingular = typeSingular.replace('-', '_');
    var typeUnderscorePlural   = typePlural.replace('-', '_');

    var apiNamespace = 'api/v1';

    // Generate the Pretender mockup stub as a single string and print

    var typePretenderStub = '                                                                                                           \n' +
    '    var ' + typeCamelPlural + ' = [                                                                                                \n' +
    '      {                                                                                                                            \n' +
    '        id: 1,                                                                                                                     \n' +
    '        name: "Some ' + typeSingular + ' 1"                                                                                        \n' +
    '      },                                                                                                                           \n' +
    '      {                                                                                                                            \n' +
    '        id: 2,                                                                                                                     \n' +
    '        name: "Some ' + typeSingular + ' 2"                                                                                        \n' +
    '      },                                                                                                                           \n' +
    '      {                                                                                                                            \n' +
    '        id: 3,                                                                                                                     \n' +
    '        name: "Another ' + typeSingular + '"                                                                                       \n' +
    '      }                                                                                                                            \n' +
    '    ];                                                                                                                             \n' +
    '                                                                                                                                   \n' +
    '    server = new Pretender(function() {                                                                                            \n' +
    '      this.get("' + apiNamespace + '/' + typeUnderscorePlural + '", function(request) {                                            \n' +
    '        return [200, {"Content-Type": "application/json"}, JSON.stringify({' + typeCamelPlural + ': ' + typeCamelPlural +'})];     \n' +
    '      });                                                                                                                          \n' +
    '                                                                                                                                   \n' +
    '      this.get("' + apiNamespace + '/' + typeUnderscorePlural + '/:id", function(request) {                                        \n' +
    '        var ' + typeCamelSingular + ' = ' + typeCamelPlural + '.find(function(' + typeUnderscoreSingular +') {                     \n' +
    '          if (' + typeUnderscoreSingular  +'.id === parseInt(request.params.id, 10)) {                                             \n' +
    '            return ' + typeUnderscoreSingular + ';                                                                                 \n' +
    '          }                                                                                                                        \n' +
    '        });                                                                                                                        \n' +
    '                                                                                                                                   \n' +
    '        return [200, {"Content-Type": "application/json"}, JSON.stringify({' + typeCamelPlural +': [' + typeCamelSingular + ']})]; \n' +
    '      });                                                                                                                          \n' +
    '                                                                                                                                   \n' +
    '      this.put(" ' + apiNamespace +'/' + typeUnderscorePlural +'/:id", function(request){                                          \n' +
    '        return [202, {"Content-Type": "application/json"}, "{}"];                                                                  \n' +
    '      });                                                                                                                          \n' +
    '                                                                                                                                   \n' +
    '    });\n';

    return {
      typePlural: typePlural,
      typeSingular: typeSingular,
      capPlural: capPlural,
      capSingular: capSingular,
      typeCamelSingular: typeCamelSingular,
      typeCamelPlural: typeCamelPlural,
      typeUnderscoreSingular: typeUnderscoreSingular,
      typeUnderscorePlural: typeUnderscorePlural,
      apiNamespace: apiNamespace,
      typePretenderStub: typePretenderStub
    };
  }
  // afterInstall: function(options) {
  //   // Perform extra work here.
  // }
};
