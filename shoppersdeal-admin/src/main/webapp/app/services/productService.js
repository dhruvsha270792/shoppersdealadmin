shoppersApp.factory('productService', [ '$http','$rootScope', function($http, $rootScope) {

	function _addProduct() {
		return $http.get($rootScope.SERVER_BASEURL+'/c/list/subcategory?n=0&pos=0', {
			header:{
				'content-type':undefined
			}
		})
	};
	
	return {
		addProduct:_addProduct
	}
	
}]);