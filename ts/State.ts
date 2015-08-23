/**
 * Created by shruti.aggarwal on 23-08-2015.
 */
/// <reference path='_All.d.ts' />
module App {
    export class State {
        'use strict';
        constructor($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) {
            $stateProvider
                .state('home', {
                    url: '/home',
                    templateUrl: 'module/home/home.html',
                    controller: 'homeCtrl as homeCtrl'
                })
                .state('dashboard', {
                    url: '/dashboard',
                    templateUrl: 'module/dashboard/dashboard.html',
                    controller: 'dashboardCtrl as dashboardCtrl'
                });
            $urlRouterProvider.otherwise('/home');
        }
    }
}