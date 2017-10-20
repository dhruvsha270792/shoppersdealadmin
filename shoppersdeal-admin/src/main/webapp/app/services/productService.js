adminApp.factory('productService', [ '$http','$rootScope', function($http, $rootScope) {
	
	var config = {
			header: {
				'content-type':undefined
			}
	};
	
	return {
		getProductList : function() {
			return $http.get($rootScope.SERVER_BASEURL+'/c/list/product?n=0&pos=0');
		},
		
		addProduct : function(product) {
			return $http.post($rootScope.SERVER_BASEURL+'/c/add/product', product, config);
		},
		
		updateProduct : function(product) {
			return $http.post($rootScope.SERVER_BASEURL+'/c/update/product', product, config);
		},
		
		deleteProduct : function(product) {
			return $http.post($rootScope.SERVER_BASEURL+'/c/delete/product', product, config);
		},
	}
}]);