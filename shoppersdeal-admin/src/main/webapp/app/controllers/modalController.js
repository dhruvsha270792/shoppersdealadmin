shoppersApp.controller('modalController',['$scope','modals', function($scope, modals) {
	$scope.form = {};
	
	$scope.createCategoryModal = function(){
	    $scope.close = modals.reject;
	}
	
	$scope.updateCategoryModal = function(){
		$scope.form.categoryName = modals.params().categoryName;
	    $scope.close = modals.reject;
	}
	
	$scope.detailCategoryModal = function() {
		$scope.form.categoryName = modals.params().categoryName;
		$scope.form.createTime = modals.params().createTime;
		$scope.form.updateTime = modals.params().updateTime;
		$scope.close = modals.reject;
	}
	
	$scope.deleteCategoryModal = function(){
		$scope.categoryName = modals.params().categoryName;
		$scope.close = modals.reject;
	}
	
	$scope.deleteCategorySubmit = function(status) {
		modals.resolve(status);
	}
	
	$scope.submit = function(form) {
        modals.resolve(form);
    };
}]);