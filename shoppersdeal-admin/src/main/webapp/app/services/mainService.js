adminApp.factory('mainService', [ '$http', function($http) {

	function _getDataAdList(pos,campaignId) {
		return $http.get('./c/ad/list?campaignId='+campaignId+'&n=10&pos=' + pos + '')
	};

	return {
		getDataAdList:_getDataAdList
	}
}]);