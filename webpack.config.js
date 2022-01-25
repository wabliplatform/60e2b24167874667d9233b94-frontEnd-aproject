const path = require('path');

module.exports = {
  entry: {
	'home' : './javascript/home.js',
	'create' : './javascript/create.js',
	'view' : './javascript/view.js',
	'update' : './javascript/update.js',
	'Page5' : './javascript/Page5.js',
	'Page6' : './javascript/Page6.js',
},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    
  },
};