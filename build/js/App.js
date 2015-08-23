/// <reference path='_All.d.ts' />
var App;
(function (App) {
    'use strict';
    // Declare app level module which depends on views, and components
    angular.module('app', [
        'ui.router',
        'ngMaterial',
        'home', 'dashboard'
    ]);
    angular.module('app').config(App.State);
})(App || (App = {}));
