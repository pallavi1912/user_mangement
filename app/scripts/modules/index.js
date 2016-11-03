'use strict';
module.exports = angular.module('Modules', [
        require('./user').name,
    ])
    .run(['$rootScope', 'toastr', '$state', function($rootScope, toastr, $state) {
        $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
           console.log("stateChangeStart", toState, fromState);
        });
        $rootScope.$on('$stateChangeError', function(event, current, previous, rejection) {
            console.log('$stateChangeError', arguments);
        });
        $rootScope.$on('$stateChangeSuccess', function(event, current, previous, rejection) {
            $rootScope.loader = false;
        });
    }]);
