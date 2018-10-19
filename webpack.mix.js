const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css');

mix.styles('vendor/almasaeed2010/adminlte/bower_components/bootstrap/dist/css/bootstrap.min.css', 'public/css/bootstrap.min.css');
mix.styles('vendor/almasaeed2010/adminlte/bower_components/font-awesome/css/font-awesome.min.css', 'public/css/font-awesome.min.css');
mix.styles('vendor/almasaeed2010/adminlte/bower_components/Ionicons/css/ionicons.min.css', 'public/css/ionicons.min.css');
mix.styles('vendor/almasaeed2010/adminlte/dist/css/AdminLTE.min.css', 'public/css/AdminLTE.min.css');
mix.styles('vendor/almasaeed2010/adminlte/dist/css/skins/skin-blue.min.css', 'public/css/skins/skin-blue.min.css');
// mix.sass('resources/sass/app.sass', 'public/css');


mix.js('vendor/almasaeed2010/adminlte/bower_components/jquery/dist/jquery.min.js', 'public/js')
    .js('vendor/almasaeed2010/adminlte/bower_components/bootstrap/dist/js/bootstrap.min.js', 'public/js')
    .js('vendor/almasaeed2010/adminlte/dist/js/adminlte.min.js', 'public/js');
