shoppersApp.factory('dashboardService', [ '$http','$rootScope', function($http, $rootScope) {

	function _getTotalCategory() {
		return $http.get($rootScope.SERVER_BASEURL+'/c/list/subcategory?n=0&pos=0', {
			header:{
				'content-type':undefined
			}
		})
	};
	
	return {
		getTotalCategory:_getTotalCategory
	}
	
}]);