angular.module("Share_Health")
  .controller('ExerciseCtrl',
  [
    '$scope',
    '$http',
    'RootFactory',
    '$timeout',
    function($scope, $http, RootFactory, $timeout){
      $scope.title = "Exercise";
      $scope.apiRoot = null;

      RootFactory.getApiRoot()
        .then(
        root => {
          $http.get(`${root.exercise}`)
            .then(res => {
              $scope.exercise = res.data
            })
            $http.get(`${root.nutrition}`)
              .then(res => {
                console.log("nutrition res: ", res.data );
                $scope.nutrition = res.data
              });
          $timeout();
        },
        err => console.log('error', err)
        // ).then(
        //   $timeout //forces scope apply to DOM - reapply everything
        );

        $scope.deleteExercise = (key, exerciseId) => {
            // console.log(exerciseId)
            return $http.delete(`http://localhost:8000/exercise/${exerciseId}/`)
                .then((res) => {
                    $scope.exercise.splice(key, 1)
                })
        }
    }]);
