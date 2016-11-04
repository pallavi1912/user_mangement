'use strict';
module.exports =[
function(){
	function getUserDetails(){
	var data = {
		name:"pallavi",
		password:"abc"
	};
	return data;
  };
  function loginPermission(data){
  	var permission = false;
     if(data.name === getUserDetails().name && data.password === getUserDetails().password){
     	permission = true;
     	console.log("sucessful");
     } else{
        permission = false;
     	console.log("unsuccessful");
     }
     return permission;
  }
  return{
  	getUserDetails:getUserDetails,
  	loginPermission:loginPermission
  };
}
]