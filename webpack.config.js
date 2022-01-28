const path = require('path');

module.exports = {
  entry: {
	'home' : './javascript/home.js',
	'create' : './javascript/create.js',
	'view' : './javascript/view.js',
	'update' : './javascript/update.js',
	'home2' : './javascript/home2.js',
	'tasks' : './javascript/tasks.js',
	'cretetask' : './javascript/cretetask.js',
	'viewtask' : './javascript/viewtask.js',
},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    
  },
};