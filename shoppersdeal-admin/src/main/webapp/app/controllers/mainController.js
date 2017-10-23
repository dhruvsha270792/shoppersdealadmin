adminApp.controller('mainController',['$scope','mainService','sessionService', function($scope, mainService, sessionService){
	
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
				userDetails.advertiserId=response.advertiserId;
				userDetails.timeZone=response.timeZone;
				userDetails.timeOffSet=response.timeOffSet;
				userDetails.angularTimeZone=response.angularTimeZone;
				userDetails.reportCtr=response.reportCtr;
				userDetails.dashboardCtr=response.dashboardCtr;
				userDetails.userInactiveTime=response.userInactiveTime;
				userDetails.campaignBudgetLimit=response.campaignBudgetLimit;
				
				sessionService.create(userDetails);
				 
				if(window.path==undefined || window.path=="" ) {
					//$location.path('dashboard').replace();
					//$window.location.reload();
					//window.location.href='#/dashboard';
					$state.go('dashboard');
					var current = $state.current;
		            var params = angular.copy($stateParams);
		            $state.transitionTo(current, params, { reload: true, inherit: true, notify: true });
		            $window.location.reload();
				}
				else {
					window.location.href=window.path;  
					$window.location.reload();
				}
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
		if(getToken!=null)
		{
		var token = JSON.parse(getToken).token;
		authService.logout(token).success(function(response) {
			if(response.success) {
				sessionService.remove();
				$scope.Islogin = false;
				window.path = null;
				$location.path('login').replace();
			}
		});
		}
	};
	//Logout
	
	
}]);