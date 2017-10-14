adminApp.controller('subcategoryController',['$scope','subcategoryService','$state','modals','$rootScope', function($scope, subcategoryService, $state, modals, $rootScope){
	
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
    }
	
	$scope.subcategoryUpdate = function(subcategory) {
        var promise = modals.open("subcategoryUpdate", { subcategory : subcategory});
        promise.then(
            function handleResolve(response){
            	subcategoryService.updateSubcategory(response).success(function(resp){
            		$state.go("subcategory");
            	});
            },
            function handleReject(response){}
        );
    }
	
	$scope.subcategoryDetail = function(subcategory) {
		var promise = modals.open("subcategoryDetail", { subcategory : subcategory });
        promise.then(function handleResolve(response){},function handleReject(response){});
	}
	
	$scope.subcategoryDelete = function(subcategory){
		var promise = modals.open("subcategoryDelete", { subcategoryName : subcategory.subcategoryName });
        promise.then(
            function handleResolve(response){
            	if(response) {
            		subcategoryService.deleteSubcategory(subcategory).success(function(resp){
                		$state.go("subcategory");
                	});
            	}
            },
            function handleReject(response){}
        );
	}
	
	$scope.getSubcategoryList = function() {
		subcategoryService.getSubcategoryList().success(function(response){
			$scope.subcategoryList = response.data;
		});
	}
	
	$rootScope.$on("subcategoryListToModal", function(){
		$scope.getSubcategoryList();
    });
}]);