app.controller('mainCtrl', ['$scope', function($scope) {
	$scope.title = "CAO Points Calculator";

	$scope.subjects = [
		"Accounting",
		"Agricultural Economics",
		"Agricultural Science",
		"Ancient Greek",
		"Applied Mathematics",
		"Arabic",
		"Art",
		"Biology",
		"Bulgarian",
		"Business",
		"Chemistry",
		"Classical Studies",
		"Contruction Studies",
		"Czech",
		"DCG",
		"Dutch",
		"Economics",
		"Engineering",
		"English",
		"Estonian",
		"Finnish",
		"French",
		"Geography",
		"German",
		"Hisory",
		"Home Economics",
		"Hungarian",
		"Irish",
		"Italian",
		"Japanese",
		"Latin",
		"Latvian",
		"Lithuanian",
		"Mathematics",
		"Modern Greek",
		"Music",
		"Physics",
		"Physics & Chemistry",
		"Polish",
		"Portuguese",
		"Religious Education",
		"Romanian",
		"Russian",
		"Slovakian",
		"Spanish",
		"Swedish",
		"Thechnology"
	];

	$scope.grades = [
		"A1",
		"A2",
		"B1",
		"B2",
		"B3",
		"C1",
		"C2",
		"C3",
		"D1",
		"D2",
		"D3",
		"F/E/NG"
	];

	$scope.points = {
		higher: [100, 90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 0],
		lower: [60, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0]
	};


	$scope.myObj = {
		test: 1,
		test1: 2,
		test2: 3,
		test3: 4,
		test4: 5,
		test5: 6,
		tes6: 7,
		test7: 8,
	}

	// at [0] track the level they took
	// at [1] track the grade they got , 0 = A1, 1 = A2 and so on
	$scope.caoForm = {
		subject1 : [],
		subject2 : [],
		subject3 : [],
		subject4 : [],
		subject5 : [],
		subject6 : [],
		subject7 : [],
		subject8 : []

	};






}])


//	custom filter to calculate the total CAO points.
.filter('calculatePoints', function() {
  return function(caoForm, points) {
		// Where all grades are kept
		var total= [];

		// logic to push everyting onto the
		angular.forEach(caoForm, function(value, key) {
			if(value[0] && value[1]) total.push(parseInt(points[value[0]][value[1]]));
		});

		// sort the array
		total.sort();

		// top 6 grades
		var totalPoints = 0;

		// logic to add up the top 6 grades
		for(var i =0; i<6; i++) {
			if(total[i]) totalPoints += total[i];
		}

		// return the top 6 grades
		return totalPoints;



  };
});
