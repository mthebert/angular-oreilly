// Create a module for our core AMail services
var aMailServices = angular.module('AMail', []);

// Set up our mappings between URLs, templates, and controllers
function emailRouteConfig($routeProvider) {
$routeProvider.
	when('/', {
		controller: ListController,
		templateUrl: '11_list.html'
	}).
	when('/view/:id', {
		controller: DetailController,
		templateUrl: '11_detail.html'
	}).
	otherwise({
		redirectTo: '11_index_amail.html'
	});
}

// Set up our route so the AMail service can find it
aMailServices.config(emailRouteConfig);

// Publish our messages for the list template
function ListController($scope, $http) {
	$http.get('/data/11.json').success(function(data, status, headers, config) {
		$scope.messages = data;
	});	
}

// Get the message id from the route (parsed from the URL) and use it to
// find the right message object.
function DetailController($scope, $routeParams) {
	$scope.message = messages[$routeParams.id];
}