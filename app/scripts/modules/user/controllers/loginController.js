'use strict';
module.exports = [
'$scope',
'$state',
'$rootScope',
'LoginService',
function($scope,$state,$rootscope,LoginService){
	var vm=this;
	vm.logIn=function(){
		var data = LoginService.getUserDetails();
		// console.log("user data", data.name,data.password);
		if(vm.userName===data.name && vm.password === data.password){
			console.log("successful login");
			$state.go('dashboard');
		}
		else
			console.log("unsuccessful");
	}
}]