angular.module('adminApp')
.run(['$rootScope', '$state',function($rootScope, $state) {
	$rootScope.SERVER_BASEURL="http://localhost:8080/sdp";
	
	$rootScope.$on('$stateChangeSuccess', function(evt, toState, fromState, params) {
		window.onload = loadAutoScroll;
		window.onscroll = scrollAutoScroll;
		
		if(toState.redirectTo) {
	        evt.preventDefault();
	        $state.go(toState.redirectTo, params, {location: 'replace'});
	    }
	});
	
}])
.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
	
	.state('login',{
		url: "/login",
		templateUrl: "view/login.html",
		controller: 'loginController',
	})
			
	.state('dashboard',{
		url: "/dashboard",
		title: 'Dashboard',
		templateUrl: "views/dashboard.html",
		controller: 'dashboardController'
	})
	
	.state('category', {
        template: '<div ui-view></div>',
        redirectTo: 'category.list'
    })
    .state('category.list', {
        url: '/category/list',
        templateUrl: 'views/category.html',
        controller: 'categoryController',
    })
    
    .state('subcategory', {
        template: '<div ui-view></div>',
        redirectTo: 'subcategory.list'
    })
    .state('subcategory.list', {
        url: '/subcategory/list',
        templateUrl: 'views/subcategory.html',
        controller: 'subcategoryController',
    })
    
    .state('products', {
        template: '<div ui-view></div>',
        redirectTo: 'products.list'
    })
    .state('products.list', {
        url: '/products/list',
        templateUrl: 'views/product.html',
        controller: 'productController',
    })
    
	.state('error',{
		url: "/error",
		templateUrl: "error.html",
	})
	
	.state('default',{
		url: "/",
		templateUrl: "views/dashboard.html",
		controller: 'mainController',
	})
	
	.state('unauthorized',{
		url: "/unauthorized",
		templateUrl: "unauthrorized.html",
	})
	
	$urlRouterProvider.otherwise("/");
});