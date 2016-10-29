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
ang.controller('AtomApp', ($scope, $state) => {
    $scope.test = function (cb) {
        setTimeout(function () {
            cb();
        }, 3000);
    };
    setTimeout(() => {
        $state.go('rethinkdb');
    }, 1000);
});


/*
    UI-Router configuration
 */
ang.config(($stateProvider,$urlRouterProvider) => {

    $urlRouterProvider.otherwise('/loading');

    const loading = {
        url: '/loading',
        templateUrl: 'routs/loading.html'
    };
    const rethinkdb_setup = {
        url: '/setup/rethinkdb',
        templateUrl: 'routs/rethinkdb_setup.html'
    };


    $stateProvider.state('loading', loading);
    $stateProvider.state('rethinkdb', rethinkdb_setup);
});