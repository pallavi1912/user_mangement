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
  return{
  	getUserDetails:getUserDetails
  };
}
]