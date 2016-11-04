'use strict';
module.exports = [
'$scope',
'$state',
'$rootScope',
'LoginService',
function($scope,$state,$rootscope,LoginService){
	var vm=this;
	vm.logOut=function(){
		console.log("loggedout");
		$state.go('login');
	}
}]