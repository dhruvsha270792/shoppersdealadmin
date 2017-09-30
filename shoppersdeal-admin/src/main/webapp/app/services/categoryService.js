shoppersApp.factory('categoryService', [ '$http','$rootScope', function($http, $rootScope) {

	function _getCategoryList() {
		return $http.get($rootScope.SERVER_BASEURL+'/c/list/category?n=0&pos=0', {
			header:{
				'content-type':undefined
			}
		})
	};
	
	function _getCategoryDetail(id) {
		var obj = {}
		obj.categoryId = id;
		return $http.get($rootScope.SERVER_BASEURL+'/c/get/category', obj, {
			header:{
				'content-type':undefined
			}
		})
	}
	
	function _createCategory(category) {
		return $http.get($rootScope.SERVER_BASEURL+'/c/add/category', category, {
			header:{
				'content-type':undefined
			}
		})
	}
	
	function _getCategoryUpdate(category) {
		return $http.get($rootScope.SERVER_BASEURL+'/c/update/category', category, {
			header:{
				'content-type':undefined
			}
		})
	}

	return {
		getCategoryList:_getCategoryList,
		getCategoryDetail:_getCategoryDetail,
		createCategory:_createCategory,
		getCategoryUpdate:_getCategoryUpdate
	}
}]);