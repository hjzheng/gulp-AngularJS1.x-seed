module.exports = function() {

	var src = './src/';
	var build = './build/';

	var config = {
		src: src,
		build: build,
		tmp: './tmp/',
		index: src + 'index.html',
		template: src + 'app/**/*.html',
		js: src + '**/*.js',
		css: src + '**/*.css',
		jsOrder: [
			'**/app.js',
			'**/*.module.js',
			'**/*.js'
		],
		cssOrder: [
			'**/app.css',
			'**/*.module.css',
			'**/*.css'
		]
	};

	return config;
}();
