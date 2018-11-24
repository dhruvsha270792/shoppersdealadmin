adminApp.controller('mainController',['$scope','mainService','sessionService','$rootScope', function($scope, mainService, sessionService, $rootScope){
	
	$scope.loginBtn='Login';
	$scope.errorMsg="";
	$scope.token="";
	
	//Login
	$scope.login= function(credentials) {
		$scope.loginBtn='Waiting...';
		authService.login(credentials).success(function(response) {
			if(response.success) {
				var userDetails={}
				userDetails.userName=credentials.u;
				userDetails.token=response.token;
				
				sessionService.create(userDetails, 'userDetail');
				$rootScope.isLogin = true;
				$state.go('category');
			}
			else {
				$scope.loginBtn='Login';
				$scope.errorMsg='Invalid login credential.';
			}
		});
	};
	//Login
	
	//Logout
	$scope.logout = function() {
		var getToken = sessionService.get();
		if(getToken!=null) {
		var token = JSON.parse(getToken).token;
		authService.logout(token).success(function(response) {
			if(response.success) {
				sessionService.remove();
				$scope.isLogin = false;
				window.path = null;
				$location.path('login').replace();
			}
		});
		}
	};
	//Logout
}]);