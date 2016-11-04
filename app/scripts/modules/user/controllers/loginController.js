'use strict';
module.exports = [
'$scope',
'$state',
'$rootScope',
'LoginService',
function($scope,$state,$rootscope,LoginService){
	var vm=this;
	var loginPermission=false;
	vm.logIn=function(){
		// var data = LoginService.getUserDetails();
		// console.log("user data", data.name,data.password);
		var data={
			name:vm.userName,
			password:vm.password
		}
		var userDetails=LoginService.loginPermission(data);
		console.log("details",userDetails);
		if(Object.keys(userDetails).length === 0){
			loginPermission=false;
			console.log("unsuccessful",loginPermission);	
		}
		else
		{  
			loginPermission=true;
			console.log("successful",loginPermission);
			$state.go('dashboard');
		}
			
		}
	}
]