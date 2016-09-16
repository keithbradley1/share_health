angular.module("Share_Health")
  .controller('UserDetailCtrl', [
    '$scope',
    '$http',
    'RootFactory',
    '$timeout',
    '$location',
    '$routeParams',
    function ($scope, $http, RootFactory, $timeout, $location, $routeParams) {
      $scope.title = "I'm the user detail page"
      $scope.user = null;
      $scope.nutrition = null;

      let logError = (err) => console.log("error", err);

      RootFactory.getApiRoot()
        .then(root => $http.get(root.user + $routeParams.userId + '/'),
          logError
        )
        .then( userRes => {
          console.log("userRes: before", userRes.data );
          $scope.user = userRes.data;
          },
          logError
        )



        $scope.deleteUser = (userId) => {
          // console.log(exerciseId)
          return $http.delete(`http://localhost:8000/user/${userId}/`)
          .then(() => $location.path("/user/"))
        };


        $scope.editUser = (user) => {
          // console.log(user)
          return $http.put(`http://localhost:8000/user/${user.id}/`, user)
          .then(() => $location.path("/user/"))
        };





    }
  ]);