adminApp.factory('subcategoryService', [ '$http','$rootScope', function($http, $rootScope) {
	
	var config = {
			header: {
				'content-type':undefined
			}
	};
	
	return {
		getSubcategoryList : function () {
			return $http.get($rootScope.SERVER_BASEURL+'/c/list/subcategory?n=0&pos=0', config);
		},
		
		createSubcategory : function (subcategory) {
			return $http.post($rootScope.SERVER_BASEURL+'/c/add/subcategory', subcategory, config);
		},
		
		updateSubcategory : function (subcategory) {
			return $http.post($rootScope.SERVER_BASEURL+'/c/update/subcategory', subcategory, config);
		},
		
		deleteSubcategory : function (subcategory) {
			return $http.post($rootScope.SERVER_BASEURL+'/c/delete/subcategory', subcategory, config);
		}	
	}
}]);