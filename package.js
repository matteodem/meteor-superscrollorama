Package.describe({
    summary : "parallax library called \"superscrollorama\" repackaged for meteor"
});

Package.on_use(function (api) {
    api.use('jquery', 'client');

    api.add_files([
        'lib/css/normalize.css',
        // for mobile
        'lib/js/iscroll.js',
        'lib/js/jquery.lettering-0.6.1.min.js',
        'lib/js/jquery.superscrollorama.js',
        'lib/js/TweenMax.min.js',
        'lib/js/polyfill.requestAnimationFrame.js'
    ], 'client');
});