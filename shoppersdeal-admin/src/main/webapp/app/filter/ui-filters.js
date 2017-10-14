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
})
.filter('customSplit', function() {
	return function(input) {
		var arr = "";
		if(input instanceof Array) {
			arr = input.join(", ");
		}
		else {
			arr = '-';
		}
		return arr;
	};
})