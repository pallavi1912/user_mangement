var UserManagementApp = angular.module('UserManagementApp', [
    'ui.router',
    'ui.bootstrap',
    'ngAnimate',
    'sun.scrollable',
    'toastr',
    'ui.validate',
    'ngMessages',
    'ngFileUpload',
    'ngSanitize',
    'ui.select',
    // require('./common').name,
    // require('./config').name,
    require('./modules').name
])
.run(['$rootScope','$state', function($rootScope, $state){
	$rootScope.state= $state;
	console.log("in run");
}])
.config(['$urlRouterProvider', function($urlRouterProvider) {
         $urlRouterProvider.when('', '/login');
         $urlRouterProvider.when('/', '/dashboard');
         $urlRouterProvider.otherwise('/404');
         // $urlRouterProvider.otherwise('/dashboard');
     }]);
angular.element(document).ready(function() {
         angular.bootstrap(document, ["UserManagementApp"]);
     });