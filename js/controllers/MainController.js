app.controller('MainController', ['$scope', function($scope) {
	$scope.title = "Games";
	$scope.games = [
		{
			name: "GTA 5",
			price: 10
		},
		{
			name: "Call of Duty",
			price: 20
		}
	]
}]);
