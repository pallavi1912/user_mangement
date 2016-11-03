'use strict';
/**
 * @memberof Modules
 * @ngdoc module
 * @name User
 * @description 
 *    User module holds all User related services, controllers, state. 
 */
module.exports = angular.module('User', [])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('login', {
                url: "/login",
                template: require('./templates/login.html'),
                controller: 'LoginController as vm',
                // pageTitle: 'login-page'
            })
            .state('dashboard', {
                url: "/dashboard",
                abstract: true,
                template: require('./templates/dashboard.html')
                // controller: 'AbstractController as vm',
                // resolve: {
                //     userInfo: ['UserService', function(UserService) {
                //         return UserService.getUserInfo();
                //     }]
                // }
            })
    }])
    .controller('LoginController', require("./controllers/loginController.js"))
    .service('LoginService', require("./services/logInService.js"));
