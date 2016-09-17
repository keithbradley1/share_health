angular.module("Share_Health")
  .controller('NutritionCtrl',
  [
    '$scope',
    '$http',
    'RootFactory',
    '$timeout',
    function($scope, $http, RootFactory, $timeout){
      $scope.title = "Nutrition";
      $scope.apiRoot = null;

      RootFactory.getApiRoot()
        .then(
        root => {
          $http.get(`${root.nutrition}`)
            .then(res => {
              console.log("nutrition res: ", res.data );
              $scope.nutrition = res.data
            });
            $http.get(`${root.user}`)
              .then(res => {
                $scope.user = res.data
              });
          $timeout();
        },
        err => console.log('error', err)
        // ).then(
        //   $timeout //forces scope apply to DOM - reapply everything
        );

    $scope.addNutrition = (newNutrition) => {
      console.log(newNutrition)
      console.log("2nd item", $scope.selectedUser)
        $http.post(`http://localhost:8000/nutrition/`, { "name": newNutrition, "user": $scope.selectedUser })
          .then(res => {
            console.log("res nutrition: ", res );
            $scope.nutrition.push(res.data)
            $scope.selectedUser = ""
            $scope.newNutrition = ""
            $timeout()
          });
    };
    }]);
