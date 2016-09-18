angular.module("Share_Health")
  .controller('ExerciseDetailCtrl',
      [
        '$scope',
        '$http',
        'RootFactory',
        '$timeout',
        '$routeParams',

        function($scope, $http, RootFactory, $timeout, $routeParams){
          $scope.title = "I'm the exercise page";
          $scope.apiRoot = null;
          $scope.artists = null;
          $scope.exercise = null;

          RootFactory.getApiRoot()
            .then(root => {
              return $http.get(root.nutrition + $routeParams.exerciseId + "/");
            },
              err => console.log("error", err)
            )
            .then(exerciseRes => {
              console.log("exercise", exerciseRes);
              $scope.exercise = exerciseRes.data;
              return $http.get($scope.exercise.nutrition);
            },
              err => console.log("error", err)
            )
            .then((nutritionRes) => {
                console.log("nutrition res", nutritionRes)
              $scope.nutrition = nutritionRes.data;
              $timeout();
            },
              err => console.log("error", err)
            )

      RootFactory.getApiRoot()
        .then(
          root => $http.get(root.exercise + $routeParams.exerciseId),
          logError
        )
        .then(
          exerciseRes => {
            console.log("exerciseRes 1: ", exerciseRes);
            $scope.exercise = exerciseRes.data;
            return $http.get($scope.exercise.nutrition);
          },
          logError
        )
        .then(
          exerciseRes => {
            console.log("exerciseRes: ", exerciseRes);
            $scope.exercise = exerciseRes.data;
            $timeout();
          },
          logError
        )

        $scope.deleteExercise = (exerciseId) => {
          // console.log(exerciseId)
          return $http.delete(`http://localhost:8000/exercise/${exerciseId}/`)
          .then(() => $location.path("/exercise/"))
        };


        $scope.editExercise = (exercise) => {
          // console.log(exercise)
          return $http.put(`http://localhost:8000/exercise/${exercise.id}/`, exercise)
          .then(() => $location.path("/exercise/"))
        };
    }
  ]);
