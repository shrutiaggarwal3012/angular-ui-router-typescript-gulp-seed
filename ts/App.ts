/// <reference path='_All.d.ts' />
module App {
    'use strict';

// Declare app level module which depends on views, and components
    angular.module('app', [
        'ui.router',
        'ngMaterial',
        'home', 'dashboard'
    ]);

    angular.module('app').config(State);
}