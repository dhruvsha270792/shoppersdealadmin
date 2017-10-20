adminApp.controller('subcategoryController',['$scope','subcategoryService','categoryService','$state','modals','$rootScope', function($scope, subcategoryService, categoryService, $state, modals, $rootScope){
	
	$scope.subcategoryCreate = function(){
        var promise = modals.open("subcategoryCreate");
        promise.then(
            function handleResolve(response) {
            	subcategoryService.createSubcategory(response).success(function(resp){
            		$state.go("subcategory");
            	});
            },
            function handleReject(response){}
        );
    };
	
	$scope.subcategoryUpdate = function(subcategory) {
        var promise = modals.open("subcategoryUpdate", { subcategory : subcategory});
        promise.then(
            function handleResolve(response){
            	response.id = subcategory.id;
            	subcategoryService.updateSubcategory(response).success(function(resp){
            		$state.go("subcategory");
            	});
            },
            function handleReject(response){}
        );
    };
	
	$scope.subcategoryDetail = function(subcategory) {
		var promise = modals.open("subcategoryDetail", { subcategory : subcategory });
        promise.then(function handleResolve(response){},function handleReject(response){});
	};
	
	$scope.subcategoryDelete = function(subcategory) {
		var promise = modals.open("subcategoryDelete", { subcategoryName : subcategory.subcategoryName });
        promise.then(
            function handleResolve(response){
            	if(response) {
            		subcategoryService.deleteSubcategory(subcategory.id).success(function(resp){
                		$state.go("subcategory");
                	});
            	}
            },
            function handleReject(response){}
        );
	};
	
	
	$scope.getSubcategoryList = function() {
		$scope.subcategoryList = [];
		categoryService.getCategoryList().success(function(categoryResp){
			subcategoryService.getSubcategoryList().success(function(response) {
				angular.forEach(response.data, function(i) {
					angular.forEach(categoryResp.data, function(j){
						if(i.categoryId == j.id) {
							i.categoryName = j.categoryName;
							$scope.subcategoryList.push(i);
						}
					});
				});
			});
		});
	}
	
	$scope.getSubcategories = function() {
		subcategoryService.getSubcategoryList().success(function(response){
			$scope.subcategories = response.data;
		});
	}
	
	$rootScope.$on("subcategoryListToModal", function(){
		$scope.getSubcategoryList();
    });
}]);