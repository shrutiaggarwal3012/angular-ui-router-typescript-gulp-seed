/**
 * Created by shruti.aggarwal on 23-08-2015.
 */
/// <reference path='../../_All.d.ts' />
module Home {
    angular.module('home', []);
    angular.module('home').service('homeService', Home.HomeService);
    angular.module('home').controller('homeCtrl', Home.HomeCtrl);
}