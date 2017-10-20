adminApp.controller('categoryController',['$scope','categoryService','$state','modals','$rootScope', function($scope, categoryService, $state, modals, $rootScope) {
	
	$scope.categoryCreate = function(){
        var promise = modals.open("categoryCreate");
        promise.then(
            function handleResolve(response) {
            	categoryService.createCategory(response).success(function(resp){
            		$state.go("category");
            	});
            },
            function handleReject(response){}
        );
    }
	
	$scope.categoryUpdate = function(category) {
        var promise = modals.open("categoryUpdate", { categoryName : category.categoryName});
        promise.then(
            function handleResolve(response){
            	response.id = category.id;
            	categoryService.updateCategory(response).success(function(resp){
            		$state.go("category");
            	});
            },
            function handleReject(response){}
        );
    }
	
	$scope.categoryDetail = function(category) {
		var promise = modals.open("categoryDetail", { 
			categoryName : category.categoryName,
			createTime : category.createTime,
			updateTime : category.updateTime
		});
        promise.then(function handleResolve(response){},function handleReject(response){});
	}
	
	$scope.categoryDelete = function(category){
		var promise = modals.open("categoryDelete", { categoryName : category.categoryName });
        promise.then(
            function handleResolve(response){
            	if(response) {
            		categoryService.deleteCategory({ id : category.id}).success(function(resp){
                		$state.go("category");
                	});
            	}
            },
            function handleReject(response){}
        );
	}
	
	$scope.getCategoryList = function() {
		categoryService.getCategoryList().success(function(response){
			$scope.categoryList = response.data;
		});
	}
	
	$rootScope.$on("categoryListToModal", function(){
		$scope.getCategoryList();
    });
}]);