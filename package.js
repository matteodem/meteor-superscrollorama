Package.describe({
    "name" : "matteodem:superscrollorama",
    "summary" : "parallax library called \"superscrollorama\" repackaged for meteor",
    "version": "0.3.9",
    "git": "https://github.com/matteodem/meteor-superscrollorama.git"
});

Package.on_use(function (api) {
    api.versionsFrom('METEOR@0.9.0');
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
