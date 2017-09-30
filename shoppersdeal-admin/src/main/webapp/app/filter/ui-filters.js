angular.module('shoppersApp')
.filter('dateFormat', function($filter,$rootScope) {
	return function (dateString, format) {
        if(dateString === 0) {
            return "Not Updated Yet";
        }
        else {
            return $filter('date')(dateString, format.toString());
        }
    };
});