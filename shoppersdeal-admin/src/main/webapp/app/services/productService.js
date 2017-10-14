shoppersApp.factory('productService', [ '$http','$rootScope', function($http, $rootScope) {
	
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
	}
}]);