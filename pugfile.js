var pug = require('pug'),
    fs = require('fs');

var compileFn = pug.compileFile('./template/main.pug', {pretty: true});

var html = compileFn(
    require('./template-data.json')
);

fs.writeFileSync('./index.html', html, 'utf8');
