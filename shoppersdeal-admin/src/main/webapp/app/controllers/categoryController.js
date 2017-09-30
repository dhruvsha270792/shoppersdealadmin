shoppersApp.controller('categoryController',['$scope','categoryService','$state', function($scope, categoryService, $state){
	
	$scope.goToDetails = function(categoryId){
		$state.go('category.detail', {categoryId: categoryId})
	}
	
	$scope.getCategoryList = function() {
		categoryService.getCategoryList().success(function(response){
			$scope.categoryList = response.data;
		})
	}
	
	$scope.getCategoryDetail = function(){
		categoryService.getCategoryDetail($state.params.categoryId).success(function(response){
			$scope.categoryDetail = response;
		})
	}
	
}]);