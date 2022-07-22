var fs = require('fs');
var Handlebars = require('handlebars');

module.exports =  function render(filename, data)
{
  var source   = fs.readFileSync(filename,'utf8').toString();
  var template = Handlebars.compile(source);
  var output = template(data);
  return output;
}

Handlebars.registerHelper('ifCond', function(v1, v2, options) {
  if(v1 === v2) {
    return options.fn(this);
  }
  return options.inverse(this);
});

Handlebars.registerHelper('ifPolicyType', function(v1, v2, options) {
  if(v1 === v2) {
    return options.fn(this);
  }
  return options.inverse(this);
});
