adminApp.controller('productController',['$scope','productService','subcategoryService','categoryService','modals','$state', function($scope, productService, subcategoryService, categoryService, modals, $state) {
	
	$scope.productCreate = function(){
        var promise = modals.open("productCreate");
        promise.then(
            function handleResolve(response) {
            	var tagsArr = [];
            	var imagesArr = [];
            	
            	var tempTag = response.tags;
            	if(tempTag!=null && tempTag!="") {
					tagsArr = tempTag.map(function(tag) {
						return tag.text;
					});
				}
            	
            	var tempImages = response.images;
            	if(tempImages!=null && tempImages!="") {
					imagesArr = tempImages.map(function(tag) {
						return tag.text;
					});
				}
            	response.images = imagesArr;
            	response.tags = tagsArr;
            	
            	productService.addProduct(response).then(function(resp){
            		$state.go("products");
            	})
            },
            function handleReject(response){}
        );
    }
	
	
	$scope.productDelete = function(product) {
		var promise = modals.open("productDelete", { productName : product.productName });
        promise.then(
            function handleResolve(response){
            	if(response) {
            		productService.deleteProduct(product).then(function(resp){
                		$state.go("products");
                	})
            	}
            },
            function handleReject(response){}
        );
	};
	
	$scope.productDetail = function(product){
        var promise = modals.open("productDetail", {'product' : product});
        promise.then(function handleResolve(response) {},function handleReject(response){});
    }
	
	
	$scope.productUpdate = function(product) {
		var categoryNames = [];
		var subcategoryNames = [];
		var tagsArr = [];
    	var imagesArr = [];
    	
        var promise = modals.open("productUpdate", {'product' : product});
        promise.then(
            function handleResolve(response){
            	angular.forEach(response.category, function(i) {
            		angular.forEach($scope.parentList, function(j){
            			if(i == j.id)
            				categoryNames.push(j.categoryName);
            			
            			response.categoryName = categoryNames;
            		});
            	});
            	angular.forEach(response.subcategory, function(k) {
            		angular.forEach($scope.parentList.subcategory, function(l){
            			if(k == l.id)
            				subcategoryNames.push(l.subcategoryName);
            			
            			response.subcategoryName = subcategoryNames;
            		});
            	});
            	
            	var tempTag = response.tags;
            	if(tempTag!=null && tempTag!="") {
					tagsArr = tempTag.map(function(tag) {
						return tag.text;
					});
				}
            	
            	var tempImages = response.images;
            	if(tempImages!=null && tempImages!="") {
					imagesArr = tempImages.map(function(tag) {
						return tag.text;
					});
				}
            	response.images = imagesArr;
            	response.tags = tagsArr;
            	
            	productService.updateProduct(response).success(function(resp) {
            		$state.go("products");
            	});
            },
            function handleReject(response){}
        );
    };
	
	
	$scope.getParentList = function(getProductListCallback) {
		$scope.parentList = {};
		categoryService.getCategoryList().success(function(categoryResponse) {
			$scope.parentList = categoryResponse.data;
			subcategoryService.getSubcategoryList().success(function(subcategoryResponse) {
				angular.forEach($scope.parentList, function(i) {
					var subcategories = [];
					angular.forEach(subcategoryResponse.data, function(j) {
						if(j.categoryId == i.id) {
							subcategories.push({"id": j.id, "subcategoryName" : j.subcategoryName})
						}
						i.subcategory = subcategories;
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
				
				var categories = [];
				angular.forEach(i.category, function(j){
					angular.forEach($scope.parentList, function(k){
						if(j == k.id) {
							categories.push(k.categoryName);
						}
						categories = categories.filter( function( item, index, inputArray ) {
							return inputArray.indexOf(item) == index;
					    });
						i.categoryName = categories;
					});
				});
				
				var subcategories = [];
				angular.forEach(i.subcategory, function(l){
					angular.forEach($scope.parentList, function(m) {
						angular.forEach(m.subcategory, function(n) {
							if(l == n.id) {
								subcategories.push(n.subcategoryName);
							}
							subcategories = subcategories.filter( function( item, index, inputArray ) {
								return inputArray.indexOf(item) == index;
						    });
							i.subcategoryName = subcategories;
						});
					});
				});
			});
		});
	}
}]);