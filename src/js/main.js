/**
 * Created by nilsbergmann on 25/10/2016.
 */

/*
    Angular main module
 */
const async = require('async');
const ang = angular.module('AtomApp', ['ngMaterial', 'ngAnimate', 'ngFx', 'ui.router']);

/*
    Main Controller
 */
ang.controller('AtomApp', ($scope) => {

});


/*
    UI-Router configuration
 */
ang.config(($stateProvider,$urlRouterProvider) => {

    $urlRouterProvider.otherwise('/loading');

    const loading = {
        url: '/loading',
        templateUrl: 'loading.html'
    };


    $stateProvider.state('loading', loading);
});