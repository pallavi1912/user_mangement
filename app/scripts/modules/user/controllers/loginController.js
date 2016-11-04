'use strict';
module.exports = [
'$scope',
'$state',
'$rootScope',
'LoginService',
function($scope,$state,$rootscope,LoginService){
	var vm=this;
	vm.logIn=function(){
		// var data = LoginService.getUserDetails();
		// console.log("user data", data.name,data.password);
		var data={
			name:vm.userName,
			password:vm.password
		}
		LoginService.loginPermission(data);
	}
}]