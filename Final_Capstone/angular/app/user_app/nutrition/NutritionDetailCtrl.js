angular.module("Share_Health")
  .controller('NutritionDetailCtrl',
  [
    '$scope',
    '$http',
    'RootFactory',
    '$timeout',
    '$routeParams',

    function($scope, $http, RootFactory, $timeout, $routeParams){
      $scope.title = "I'm the nutrition page";
      $scope.apiRoot = null;
      $scope.user = null;

      RootFactory.getApiRoot()
        .then(root => {
          return $http.get(root.nutrition + $routeParams.nutritionId + "/");
        },
          err => console.log("error", err)
        )
        .then(nutritionRes => {
          console.log("nutrition", nutritionRes);
          $scope.nutrition = nutritionRes.data;
          return $http.get($scope.nutrition.user);
        },
          err => console.log("error", err)
        )
        .then((userRes) => {
            console.log("user res", userRes)
          $scope.user = userRes.data;
          $timeout();
        },
          err => console.log("error", err)
        )

        $scope.deleteNutrition = (nutritionId) => {
          // console.log(trackId)
          return $http.delete(`http://localhost:8000/nutrition/${nutritionId}/`)
          .then(() => $location.path("/nutrition/"))
        };

        $scope.editNutrition = (nutrition) => {
          // console.log(nutrition)
          return $http.put(`http://localhost:8000/nutrition/${nutrition.id}/`, nutrition)
          .then(() => $location.path("/nutrition/"))
        };
      }


  ]);
