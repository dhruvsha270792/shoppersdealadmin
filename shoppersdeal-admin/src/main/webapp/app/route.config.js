angular.module('shoppersApp')
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
        url: '/category',
        template: '<div ui-view></div>',
        controller: 'categoryController',
        redirectTo: 'category.list'
    })
    .state('category.list', {
        url: '/list',
        templateUrl: 'views/category.html',
    })
    .state('category.detail', {
        url: '/detail/:categoryId',
        templateUrl: 'view/categoryDetail.html',
    })
    
    .state('subcategory', {
        url: '/subcategory',
        templateUrl: 'view/subcategory.html',
        controller: 'subcategoryController'
    })
    .state('subcategory.create', {
        url: '/create',
        templateUrl: 'view/subcategoryCreate.html',
    })
    .state('subcategory.update', {
        url: '/update/:categoryId/:subcategoryId',
        templateUrl: 'view/subcategoryUpdate.html',
    })
    .state('subcategory.detail', {
        url: '/detail/:categoryId/:subcategoryId',
        templateUrl: 'view/subcategoryDetail.html',
    })
    
    .state('product', {
        url: '/product',
        templateUrl: 'view/products.html',
        controller: 'productController'
    })
    .state('products.create', {
        url: '/create',
        templateUrl: 'view/productCreate.html',
    })
    .state('products.update', {
        url: '/update/:categoryId/:subcategoryId/:productId',
        templateUrl: 'view/productUpdate.html',
    })
    .state('products.detail', {
        url: '/detail/:categoryId/:subcategoryId/:productId',
        templateUrl: 'view/productDetail.html',
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