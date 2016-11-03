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
		console.log("user data", data);
		// if(vm.userName==='pallavi' && vm.password === 'abc'){
		// 	console.log("successful login");
		// }
		// else
		// 	console.log("unsuccessful");
	}
}]