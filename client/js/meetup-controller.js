angular.module('MyApp',['ngResource']).controller('meetupsController',function($scope,$resource)
{
	var MeetUp = $resource('/api/meetUps')
	$scope.getAll
	$scope.clickMe = function()
	{
		alert("sdsdsdsd");
	}

	MeetUp.query(function(result)
	{
		$scope.meetUps = result;
	})
	$scope.AddMeetUp = function()
	{
		var meetUp = new MeetUp();
		meetUp.name = $scope.meetup;
		meetUp.$save(function(result)
			{
				$scope.meetUps.push(result);
			});
	}
});
