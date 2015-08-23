/**
 * Created by shruti.aggarwal on 23-08-2015.
 */
/// <reference path='../../_All.d.ts' />
module Dashboard{
    angular.module('dashboard',[]);
    angular.module('dashboard').service('dashboardService', Dashboard.DashboardService);
    angular.module('dashboard').controller('dashboardCtrl', Dashboard.DashboardCtrl);
}
