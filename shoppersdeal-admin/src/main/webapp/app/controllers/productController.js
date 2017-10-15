adminApp.controller('productController',['$scope','productService','subcategoryService','categoryService','modals','$state', function($scope, productService, subcategoryService, categoryService, modals, $state) {
	
	$scope.productCreate = function(){
        var promise = modals.open("productCreate");
        promise.then(
            function handleResolve(response) {
            	var tagArr = [];
            	var images = [];
            	images.push('http://cdn-img.health.com//sites/default/files/wp_migrated_images/eat-super-fruit-400x400.jpeg');
            	images.push('http://ghk.h-cdn.co/assets/cm/15/10/54fa5d62d265d-fruitbowl-xl.jpg');
            	images.push('http://www.finefruitscatering.co.uk/Images/exotic-fruits.jpg');
            	images.push('http://en.vietdragonfruit.com/images/thumbs/news/dragon-fruits-grown-in-bangladesh-for-the-first-time-145.jpg');
            	var tempTag = response.tags;
            	if(tempTag!=null && tempTag!="") {
					tagsArr = tempTag.map(function(tag) {
						return tag.text;
					});
				}
            	response.images = images;
            	response.tags = tagsArr;
            	productService.addProduct(response).then(function(resp){
            		$state.go("products");
            	})
            },
            function handleReject(response){}
        );
    }
	
	$scope.getParentList = function(getProductListCallback) {
		$scope.parentList = {};
		categoryService.getCategoryList().success(function(categoryResponse) {
			$scope.parentList = categoryResponse.data;
			subcategoryService.getSubcategoryList().success(function(subcategoryResponse) {
				angular.forEach(subcategoryResponse.data, function(i) {
					angular.forEach($scope.parentList, function(j){
						if(i.categoryId == j.categoryId) {
							j.subcategoryId = i.subcategoryId;
							j.subcategoryName = i.subcategoryName;
						}
					});
				});		
				$scope.getProductListCallback();
			});
		});
	};
	
	$scope.getProductListCallback = function() {
		productService.getProductList().success(function(response){
			$scope.productList = response.data;
			angular.forEach($scope.productList, function(i){
				angular.forEach($scope.parentList, function(j){
					angular.forEach(i.category, function(k){
						if(k == j.categoryId) {
							i.categoryName = j.categoryName;
							i.subcategoryName = j.subcategoryName;
						}
					});
				});
			});
		});
	}
	
}]);