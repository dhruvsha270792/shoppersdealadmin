angular.module('adminApp')
.run(['$rootScope', '$state', 'sessionService',function($rootScope, $state, sessionService) {
	$rootScope.SERVER_BASEURL="http://localhost:8080/shoppersdealpoint";
	$rootScope.isLogin = true;
	
	$rootScope.$on('$stateChangeSuccess', function(evt, toState, fromState, params) {
		window.onload = loadAutoScroll;
		window.onscroll = scrollAutoScroll;
		
		/*if (sessionService.get('userDetail') != null) {
	    	var username = JSON.parse(sessionService.get());
	    	$rootScope.isLogin = true;
	    }
		else {
	    	$rootScope.isLogin = false;
	    	$state.go('login');
	    }*/
		
		if(toState.redirectTo) {
	        evt.preventDefault();
	        $state.go(toState.redirectTo, params, {location: 'replace'});
	    }
	});
	
}])
.config(function($stateProvider, $urlRouterProvider, tagsInputConfigProvider) {
	tagsInputConfigProvider.setDefaults('tagsInput', { placeholder: '' });
	
	$stateProvider
	
	.state('login',{
		url: "/login",
		templateUrl: "views/login.html",
		controller: 'mainController',
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
		redirectTo: 'category'
	})
	
	.state('unauthorized',{
		url: "/unauthorized",
		templateUrl: "unauthrorized.html",
	})
	
	$urlRouterProvider.otherwise("/");
});