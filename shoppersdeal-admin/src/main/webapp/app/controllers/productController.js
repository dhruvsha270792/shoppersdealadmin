adminApp.controller('productController',['$scope','productService','modals','$state', function($scope, productService, modals, $state) {
	
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
	
	$scope.getProductList = function() {
		productService.getProductList().success(function(response){
			$scope.productList = response.data;
		});
	}
	
}]);