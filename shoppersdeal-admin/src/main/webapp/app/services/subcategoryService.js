shoppersApp.factory('subcategoryService', [ '$http','$rootScope', function($http, $rootScope) {

	function _getSubcategoryList() {
		return $http.get($rootScope.SERVER_BASEURL+'/c/list/subcategory?n=0&pos=0', {
			header:{
				'content-type':undefined
			}
		})
	};
	
	return {
		getCategoryList:_getCategoryList
	}
	
}]);