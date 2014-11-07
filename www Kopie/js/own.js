var projectModule = angular.module('project',[]);
 
projectModule.factory('theService', function() {  
	return {
		thing : {
			x : 100
		}
	};
});
 
function FirstCtrl($scope, theService) {
	$scope.thing = theService.thing;
	$scope.name = "First Controller";
}
 
function SecondCtrl($scope, theService) {	
	$scope.someThing = theService.thing; 
	$scope.name = "Second Controller!";
}

