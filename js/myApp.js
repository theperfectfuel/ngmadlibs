angular
	.module('myApp', ["ngMessages", "ngAnimate"])
	.controller('myCtrl', function($scope) {

		$scope.genderWords = function(userGender) {

			if (userGender == "male") {
				$scope.heShe = "he";
				$scope.himHer = "him";
				$scope.hisHer = "his";
			} else if (userGender == "female") {
				$scope.heShe = "she";
				$scope.himHer = "her";
				$scope.hisHer = "her";
			};
			
			console.log($scope.heShe, $scope.himHer);
		};

		$scope.reset = function() {
			$scope.storyReady = "";
			$scope.gender = "";
			$scope.name = "";
			$scope.job_title = "";
			$scope.tedious_task = "";
			$scope.dirty_task = "";
			$scope.celebrity = "";
			$scope.useless_skill = "";
			$scope.obnoxious_celebrity = "";
			$scope.huge_number = "";
			$scope.adjective = "";
			$scope.heShe = "";
			$scope.himHer = "";
			$scope.hisHer = "";
			$scope.genderCheck = false;
			$scope.submitted = false;
		};

		$scope.submitForm = function(isValid) {

			$scope.submitted = true;

			if (isValid) {
				$scope.gender = "yes";
			}

		};


		$scope.reset();

	});