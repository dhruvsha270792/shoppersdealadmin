shoppersApp.controller('categoryController',['$scope','categoryService','$state','modals', function($scope, categoryService, $state, modals) {
	
	$scope.categoryCreate = function(){
        var promise = modals.open("categoryCreate");
        promise.then(
            function handleResolve(response) {
            	categoryService.createCategory(response).success(function(resp){
            		$state.go("category");
            	});
            },
            function handleReject(response){
                console.warn("Alert Rejected.");
            }
        );
    }
	
	$scope.categoryUpdate = function(category) {
        var promise = modals.open("categoryUpdate", { categoryName : category.categoryName});
        promise.then(
            function handleResolve(response){
            	response.categoryId = category.categoryId;
            	categoryService.updateCategory(response).success(function(resp){
            		$state.go("category");
            	});
            },
            function handleReject(response){
                console.warn("Alert Rejected.");
            }
        );
    }
	
	$scope.categoryDetail = function(category) {
		var promise = modals.open("categoryDetail", { 
			categoryName : category.categoryName,
			createTime : category.createTime,
			updateTime : category.updateTime
			});
        promise.then(
            function handleResolve(response){},
            function handleReject(response){
                console.warn("Alert Rejected.");
            }
        );
	}
	
	$scope.categoryDelete = function(category){
		console.log("delete")
		var promise = modals.open("categoryDelete", { categoryName : category.categoryName});
        promise.then(
            function handleResolve(response){
            	if(response) {
            		categoryService.deleteCategory({ categoryId : category.categoryId}).success(function(resp){
                		$state.go("category");
                	});
            	}
            },
            function handleReject(response){
                console.warn("Alert Rejected.");
            }
        );
	}
	
	$scope.getCategoryList = function() {
		categoryService.getCategoryList().success(function(response){
			$scope.categoryList = response.data;
		});
	}
	
	$scope.getCategoryDetail = function(){
		categoryService.getCategoryDetail($state.params.categoryId).success(function(response){
			$scope.categoryDetail = response;
		})
	}
}]);