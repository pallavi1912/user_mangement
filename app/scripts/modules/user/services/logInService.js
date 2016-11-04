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
     if(data.name === getUserDetails().name && data.password === getUserDetails().password){
     	console.log("sucessful");
     } else
     console.log("unsuccessful");
  }
  return{
  	getUserDetails:getUserDetails,
  	loginPermission:loginPermission
  };
}
]