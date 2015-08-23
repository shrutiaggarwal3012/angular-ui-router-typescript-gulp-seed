/**
 * Created by shruti.aggarwal on 23-08-2015.
 */
/// <reference path='_All.d.ts' />
var App;
(function (App) {
    var State = (function () {
        function State($stateProvider, $urlRouterProvider) {
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
        return State;
    })();
    App.State = State;
})(App || (App = {}));
