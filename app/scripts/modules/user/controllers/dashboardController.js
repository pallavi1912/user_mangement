'use strict';
module.exports = [
'$scope',
'$state',
'$rootScope',
'LoginService',
function($scope,$state,$rootscope,LoginService){
	var vm=this;
	console.log("user data after logging in",LoginService.loggedInUserDetails());
	vm.logOut=function(){
		console.log("loggedout");
		$state.go('login');
		// console.log("after logout details",LoginService.loginPermission.userDetails);
	}
}]