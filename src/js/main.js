/**
 * Created by nilsbergmann on 25/10/2016.
 */
const ang = angular.module('AtomApp', ['ngMaterial', 'ngAnimate', 'ngFx', 'ui.router']);
ang.controller('AtomApp', ($scope) => {

});
ang.config(($stateProvider,$urlRouterProvider) => {

    $urlRouterProvider.otherwise('/loading');

    const loading = {
        url: '/loading'
    };


    $stateProvider.state('loading', loading);
});