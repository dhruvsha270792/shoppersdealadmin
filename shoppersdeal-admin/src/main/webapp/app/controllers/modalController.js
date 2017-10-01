shoppersApp.controller('modalController',['$scope','modals', function($scope, modals) {
	$scope.form = {};
	
	$scope.createCategoryModal = function(){
	    $scope.close = modals.reject;
	}
	
	$scope.updateCategoryModal = function(){
		$scope.form.categoryName = modals.params().categoryName;
	    $scope.close = modals.reject;
	}
	
	$scope.submit = function(form) {
        modals.resolve(form);
    };
}]);