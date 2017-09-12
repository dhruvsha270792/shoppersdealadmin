var shoppersApp=angular.module('shoppersApp');

shoppersApp.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
	
	.state('login',{
		url: "/login",
		title: 'Login',
		templateUrl: "view/login.html",
		controller: 'loginController',
	})
			
	.state('dashboard',{
		url: "/dashboard",
		title: 'Dashboard',
		templateUrl: "view/dashboard.html",
		controller: 'dashboardController'
	})
	
	.state('category',{
		url: "/category/list",
		templateUrl: "view/categoryList.html",
		controller: 'categoryController'
	})
	
	.state('error',{
		url: "/error",
		templateUrl: "error.html",
	})
	
	.state('DefaultLogin',{
		url: "",
		templateUrl: "view/dashboard.html",
		controller: 'mainController',
	})
	
	.state('unauthorized',{
		url: "/unauthorized",
		templateUrl: "unauthrorized.html",
		
	})
	$urlRouterProvider.otherwise("/dashboard");
});