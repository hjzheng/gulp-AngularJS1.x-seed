var gulp = require('gulp');
var del = require('del');
var plugins = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
var proxyMiddleware = require('http-proxy-middleware');
var config = require('./gulp.conf.js');

var target = 'http://localhost:8989';

gulp.task('clean', function() {
	return del.sync(['build', 'tmp']);
});

gulp.task('inject', ['template'], function() {

	var js = gulp.src(config.js, {read: false}).pipe(plugins.order(config.jsOrder));
	var css = gulp.src(config.css, {read: false}).pipe(plugins.order(config.cssOrder));

	return gulp
		.src(config.index)
		.pipe(plugins.inject(gulp.src(config.tmp + 'template.js', {read: false}), {addPrefix: '../', starttag: '<!--template.js-->', endtag: '<!--endTemplate.js-->'}))
		.pipe(plugins.inject(js, {addPrefix: '../src', relative: true}))
		.pipe(plugins.inject(css, {addPrefix: '../src', relative: true}))
		.pipe(gulp.dest(config.src))
		.pipe(browserSync.reload({stream: true}));
});

gulp.task('browserSync', function() {
	// 代理配置, 实现环境切换
	var middleware = proxyMiddleware(['/users'], {target: target, changeOrigin: true});
	browserSync({
		server: {
			baseDir: './',
			index: 'src/index.html',
			middleware: middleware
		}
	});
});

gulp.task('watch', function() {
	// gulp.watch(['./src/**/*.js'], ['inject']);
	// gulp watch 无法监听增加文件和删除文件, 查看 github issue, 他们不准备fix了, 等4.0 呵呵吧
	plugins.watch('src/**/*.js', function() {
		gulp.run('inject');
	});
	plugins.watch('src/**/*.css', function() {
		gulp.run('inject');
	});
});

gulp.task('dev', ['inject', 'browserSync', 'watch']);

gulp.task('build', ['clean', 'inject'], function() {

	var indexHtmlFilter = plugins.filter(['**/*', '!**/index.html'], { restore: true });

	return gulp.src(config.index)
		.pipe(plugins.useref())
		.pipe(plugins.if('*.js', plugins.uglify()))
		.pipe(plugins.if('*.css', plugins.minifyCss()))
		.pipe(indexHtmlFilter)
		.pipe(plugins.rev())
		.pipe(indexHtmlFilter.restore)
		.pipe(plugins.revReplace())
		.pipe(gulp.dest(config.build));
});

gulp.task('template', function() {
	return gulp.src(config.template)
		.pipe(plugins.angularTemplatecache('template.js', {'root': './src/app', 'module': 'app'}))
		.pipe(gulp.dest(config.tmp));
});
