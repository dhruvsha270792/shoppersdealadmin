adminApp.controller('modalController',['$scope','modals', '$rootScope', function($scope, modals, $rootScope) {
	$scope.form = {};
	$scope.categoryName = "";
	$scope.subcategoryName = "";
	
	$scope.dealCategoryList = [{key:'normal', value:'Normal'},{key:'special', value:'Special'},{key:'hotDeals', value:'Hot Deals'}];
	
	$scope.createCategoryModal = function(){
		$scope.form = {};
	    $scope.close = modals.reject;
	};
	
	$scope.updateCategoryModal = function(){
		$scope.form.categoryName = modals.params().categoryName;
	    $scope.close = modals.reject;
	};
	
	$scope.detailCategoryModal = function() {
		$scope.form.categoryName = modals.params().categoryName;
		$scope.form.createTime = modals.params().createTime;
		$scope.form.updateTime = modals.params().updateTime;
		$scope.close = modals.reject;
	};
	
	$scope.deleteCategoryModal = function(){
		$scope.categoryName = modals.params().categoryName;
		$scope.close = modals.reject;
	};
	
	$scope.createSubcategoryModal = function(){
		$scope.form = {};
	    $scope.close = modals.reject;
	};
	
	$scope.updateSubcategoryModal = function(){
		$scope.form.subcategoryName = modals.params().subcategory.subcategoryName;
		$scope.form.categoryName = modals.params().subcategory.categoryName;
	    $scope.close = modals.reject;
	};
	
	$scope.detailSubcategoryModal = function() {
		$scope.form.subcategoryName = modals.params().subcategory.subcategoryName;
		$scope.form.categoryName = modals.params().subcategory.categoryName;
		$scope.form.createTime = modals.params().subcategory.createTime;
		$scope.form.updateTime = modals.params().subcategory.updateTime;
		
		$scope.close = modals.reject;
	};
	
	$scope.deleteSubcategoryModal = function(){
		$scope.subcategoryName = modals.params().subcategoryName;
		$scope.close = modals.reject;
	};
	
	$scope.createProductModal = function() {
		$scope.form = {};
		$scope.close = modals.reject;
	};
	
	$scope.detailProductModal = function() {
		$scope.form = modals.params().product;
		$scope.close = modals.reject;
	};
	
	$scope.updateProductModal = function() {
		$scope.form = modals.params().product;
		$scope.close = modals.reject;
	};
	
	$scope.deleteProductModal = function() {
		$scope.productName = modals.params().productName;
		$scope.close = modals.reject;
	}
	
	$scope.submit = function(form) {
        modals.resolve(form);
    };
    
    $scope.deleteSubmit = function(status) {
		modals.resolve(status);
	};
}]);