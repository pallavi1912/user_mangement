'use strict';
module.exports = [
    function() {
        var currentUserDetails = {};

        function getUserDetails() {
            var data = [{
                name: "pallavi",
                password: "abc",
                access: "admin"
            }, {
                name: "Rajesh",
                password: "xyz",
                access: "user"
            },
            , {
                name: "Deblina",
                password: "desi",
                access: "user"
            }];
            return data;
        };

        function loginPermission(data) {
            var userDetails = {};
            var userData = getUserDetails();
            for (var i = 0; i < userData.length; i++) {
                if (data.name === userData[i].name && data.password === userData[i].password) {
                    userDetails = {
                        name: userData[i].name,
                        password: userData[i].password,
                        accessPermission: userData[i].access
                    };
                    currentUserDetails=userDetails;
                    console.log("sucessful");
                }
                else{
                	userDetails={};
                	console.log("unsuccessful");
                }
            }
            return userDetails;
        };

        function loggedInUserDetails() {
            return currentUserDetails;
        }
        return {
            getUserDetails: getUserDetails,
            loginPermission: loginPermission,
            loggedInUserDetails: loggedInUserDetails
        };
    }
]
