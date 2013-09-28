require.config({
    paths: {
        jquery: '../bower_components/jquery/jquery'
    }
});

require(['app', 'jquery'], function (app, $) {
    'use strict';
    // use app here
    console.log('Running jQuery %s', $().jquery);

    var el = document.documentElement;

    el.setAttribute('data-useragent', navigator.userAgent);
    el.setAttribute('data-platform', navigator.platform);
});
